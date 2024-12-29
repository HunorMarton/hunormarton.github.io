import * as tf from "@tensorflow/tfjs-node";
import type { StateActionEligibilityTraceTS } from "../types";
import Lookup from "./lookup";

export default class StateActionValue<State, Action> {
  _stateActionValue: tf.Tensor2D;

  constructor(numStates: number, numActions: number) {
    this._stateActionValue = tf.zeros([numStates, numActions]);
  }

  adjust(state: State, action: Action, value: number) {
    const stateIndex = Lookup.getStateIndex(state);
    const actionIndex = Lookup.getActionIndex(action);

    const data = this._stateActionValue.arraySync();
    this._stateActionValue.dispose();
    data[stateIndex][actionIndex] += value;
    this._stateActionValue = tf.tensor2d(data);

    /* 
    // Alternative implementation using sparse updates for large tensors
    this._stateActionValue = tf.tidy(() => {
      const indexes = [[stateIndex, actionIndex]];
      const updates = [value];
      const shape = this._stateActionValue.shape;
      const mask = tf.scatterND(indexes, updates, shape);
      return this._stateActionValue.add(mask);
    });
    */
  }

  adjustAll(
    alpha: number,
    tdError: number,
    eligibilityTraces: StateActionEligibilityTraceTS<State, Action>
  ) {
    const eligibilityTracesRaw = eligibilityTraces.raw();

    this._stateActionValue = tf.tidy(() => {
      let updated: tf.Tensor2D = this._stateActionValue.add(
        eligibilityTracesRaw.mul(tf.scalar(alpha * tdError))
      );
      this._stateActionValue.dispose();
      return updated;
    });
  }

  get(state: State, action: Action) {
    const stateIndex = Lookup.getStateIndex(state);
    const actionIndex = Lookup.getActionIndex(action);
    return this._stateActionValue.arraySync()[stateIndex][actionIndex];
  }

  getBestAction(state: State): Action {
    const stateIndex = Lookup.getStateIndex(state);

    const actions = this._stateActionValue.arraySync()[stateIndex];
    const actionIndex = actions.indexOf(Math.max(...actions));

    /*
    // Alternative implementation using tfjs
    const actionIndex = this._stateActionValue
      .gather([stateIndex])
      .argMax(1)
      .dataSync()[0];
    */

    const actionKey = Lookup.getAction(actionIndex);

    return JSON.parse(actionKey);
  }
}
