import type { StateActionEligibilityTrace as Type } from "../types";
import StateActionValue from "./stateActionValue";

export default class StateActionEligibilityTrace<State, Action>
  extends StateActionValue<State, Action>
  implements Type<State, Action>
{
  increment(state: State, action: Action, value: number = 1) {
    super.adjust(state, action, value);
  }

  decay(decayRate: number) {
    for (const stateKey in this._stateActionValue) {
      for (const actionKey in this._stateActionValue[stateKey]) {
        this._stateActionValue[stateKey][actionKey] *= decayRate;
      }
    }
  }

  raw() {
    return this._stateActionValue;
  }
}
