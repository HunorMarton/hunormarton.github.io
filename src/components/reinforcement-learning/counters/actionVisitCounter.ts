export default class ActionVisitCounter<State, Action> {
  #counter: {
    [stateKey: string]: { [actionKey: string]: number };
  } = {};

  increment(state: State, action: Action) {
    const stateKey = JSON.stringify(state);
    const actionKey = JSON.stringify(action);

    this.#counter[stateKey] ??= {};
    this.#counter[stateKey][actionKey] ??= 0;
    this.#counter[stateKey][actionKey]++;
  }

  get(state: State, action: Action) {
    const stateKey = JSON.stringify(state);
    const actionKey = JSON.stringify(action);

    return this.#counter[stateKey]?.[actionKey] ?? 0;
  }
}
