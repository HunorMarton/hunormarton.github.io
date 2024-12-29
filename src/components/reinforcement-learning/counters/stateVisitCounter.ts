export default class StateVisitCounter<State> {
  #counter: {
    [stateKey: string]: number;
  } = {};

  increment(state: State) {
    const stateKey = JSON.stringify(state);

    this.#counter[stateKey] ??= 0;
    this.#counter[stateKey]++;
  }

  get(state: State) {
    const stateKey = JSON.stringify(state);

    return this.#counter[stateKey] ?? 0;
  }
}
