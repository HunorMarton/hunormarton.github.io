import * as tf from "@tensorflow/tfjs-node";
import StateActionValue from "./stateActionValueTS";

export default class StateActionEligibilityTrace<
  State,
  Action
> extends StateActionValue<State, Action> {
  increment(state: State, action: Action, value: number = 1) {
    super.adjust(state, action, value);
  }

  decay(decayRate: number) {
    this._stateActionValue = tf.tidy(() => {
      const scalar = tf.scalar(decayRate);
      const updated: tf.Tensor2D = this._stateActionValue.mul(scalar);
      this._stateActionValue.dispose();

      return updated;
    });
  }

  raw() {
    return this._stateActionValue;
  }
}
