import * as tf from "@tensorflow/tfjs-node";
import type { StateActionValueTS2 } from "../types";

interface Experience<State, Action> {
  state: State;
  action: Action;
  reward: number;
  nextState: State;
  nextAction: Action;
}

export default class StateActionValue<State, Action>
  implements StateActionValueTS2<State, Action>
{
  private model: tf.Sequential;
  #actions: Action[];
  #stateToTensor: (state: State) => tf.Tensor2D;
  #replayBuffer: Experience<State, Action>[];
  #batchSize: number;

  constructor(
    inputSize: number,
    actions: Action[],
    stateToTensor: (state: State) => tf.Tensor2D,
    batchSize: number = 32
  ) {
    this.#actions = actions;
    this.#stateToTensor = stateToTensor;
    this.#replayBuffer = [];
    this.#batchSize = batchSize;

    this.model = tf.sequential();
    this.model.add(
      tf.layers.dense({
        units: 24,
        inputShape: [inputSize],
        activation: "relu",
      })
    );
    this.model.add(tf.layers.dense({ units: 24, activation: "relu" }));
    this.model.add(tf.layers.dense({ units: actions.length }));
    this.model.compile({ optimizer: "adam", loss: "meanSquaredError" });
  }

  get(state: State, action: Action): number {
    const input = this.#stateToTensor(state);
    const prediction = this.model.predict(input) as tf.Tensor;
    const value = prediction.dataSync();
    const index = this.#actions.indexOf(action);
    return value[index];
  }

  async adjust(
    state: State,
    action: Action,
    reward: number,
    nextState: State,
    nextAction: Action,
    alpha: number,
    gamma: number
  ) {
    // Add experience to replay buffer
    this.#replayBuffer.push({ state, action, reward, nextState, nextAction });

    // If replay buffer is full, sample a batch and update the model
    if (this.#replayBuffer.length >= this.#batchSize) {
      const batch = this.#sampleBatch();
      await this.#updateModel(batch, alpha, gamma);
      this.#replayBuffer = []; // Clear the buffer after updating
    }
  }

  #sampleBatch(): Experience<State, Action>[] {
    const batch = [];
    for (let i = 0; i < this.#batchSize; i++) {
      const index = Math.floor(Math.random() * this.#replayBuffer.length);
      batch.push(this.#replayBuffer[index]);
    }
    return batch;
  }

  async #updateModel(
    batch: Experience<State, Action>[],
    alpha: number,
    gamma: number
  ) {
    const states = [];
    const targets = [];

    for (const experience of batch) {
      const { state, action, reward, nextState, nextAction } = experience;

      const stateTensor = this.#stateToTensor(state);
      const nextStateTensor = this.#stateToTensor(nextState);

      // Predict Q-values for the current state
      const predictions = this.model.predict(stateTensor) as tf.Tensor;
      const qValues = Array.from(predictions.dataSync());

      // Predict Q-values for the next state
      const nextPredictions = this.model.predict(nextStateTensor) as tf.Tensor;
      const nextQValues = Array.from(nextPredictions.dataSync());

      // Find the index of the current action and next action
      const actionIndex = this.#actions.indexOf(action);
      const nextActionIndex = this.#actions.indexOf(nextAction);

      // Calculate the TD target
      const tdTarget = reward + gamma * nextQValues[nextActionIndex];

      // Calculate the TD error
      const tdError = tdTarget - qValues[actionIndex];

      // Update the Q-value for the specific action using the TD error
      qValues[actionIndex] += alpha * tdError;

      states.push(stateTensor);
      targets.push(tf.tensor2d([qValues], [1, this.#actions.length]));
    }

    // Stack states and targets into tensors
    const stateTensorBatch = tf.concat(states);
    const targetTensorBatch = tf.concat(targets);

    // Train the model with the updated Q-values
    await this.model.fit(stateTensorBatch, targetTensorBatch, { verbose: 0 });
  }

  /*
  async adjust(state: State, action: Action, target: number) {
    const stateTensor = this.#stateToTensor(state);
    const predictions = this.model.predict(stateTensor) as tf.Tensor;
    const qValues = Array.from(predictions.dataSync());

    // Find the index of the action
    const actionIndex = this.#actions.indexOf(action);

    // Update the Q-value for the specific action
    qValues[actionIndex] += target;

    // Create the target tensor with the updated Q-values
    const targetTensor = tf.tensor2d([qValues], [1, this.#actions.length]);

    // Train the model with the updated Q-values
    await this.model.fit(stateTensor, targetTensor, { verbose: 0 });
  }
  */

  getBestAction(state: State): Action {
    const input = this.#stateToTensor(state);
    const prediction = this.model.predict(input) as tf.Tensor;
    const index = prediction.argMax(1).dataSync()[0];
    return this.#actions[index];
  }

  /*
  private stateActionToTensor(state: State, action: Action): tf.Tensor {
    // Convert state and action to a tensor
    // This is a placeholder, you need to implement the actual conversion
    return tf.tensor2d(
      [
        // state and action values
      ],
      [1, inputSize]
    );
  }
  */
}
