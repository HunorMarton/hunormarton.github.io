import type {
  StateActionValue as Type,
  StateActionEligibilityTrace,
} from "../types";

export default class StateActionValue<State, Action>
  implements Type<State, Action>
{
  _stateActionValue: {
    [stateKey: string]: { [actionKey: string]: number };
  } = {};

  adjust(state: State, action: Action, value: number) {
    const stateKey = JSON.stringify(state);
    const actionKey = JSON.stringify(action);

    this.#adjust(stateKey, actionKey, value);
  }

  adjustAll(
    alpha: number,
    tdError: number,
    eligibilityTraces: StateActionEligibilityTrace<State, Action>
  ) {
    const eligibilityTracesRaw = eligibilityTraces.raw();

    for (const stateKey in eligibilityTracesRaw) {
      for (const actionKey in eligibilityTracesRaw[stateKey]) {
        this.#adjust(
          stateKey,
          actionKey,
          alpha * tdError * eligibilityTracesRaw[stateKey][actionKey]
        );
      }
    }
  }

  #adjust(stateKey: string, actionKey: string, value: number) {
    this._stateActionValue[stateKey] ??= {};
    this._stateActionValue[stateKey][actionKey] ??= 0;
    this._stateActionValue[stateKey][actionKey] += value;
  }

  get(state: State, action: Action) {
    const stateKey = JSON.stringify(state);
    const actionKey = JSON.stringify(action);

    return this._stateActionValue[stateKey]?.[actionKey] ?? 0;
  }

  getBestAction(state: State): Action {
    const stateKey = JSON.stringify(state);

    const actions = Object.keys(this._stateActionValue[stateKey] ?? {}).map(
      (actionKey) => JSON.parse(actionKey)
    );

    return actions.reduce((action1, action2) =>
      this.get(state, action1) > this.get(state, action2) ? action1 : action2
    );
  }
}
