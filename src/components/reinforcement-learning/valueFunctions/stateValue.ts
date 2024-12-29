export default class StateValue<State> {
  #stateValue: { [stateKey: string]: number } = {};

  adjust(state: State, value: number) {
    const stateKey = JSON.stringify(state);

    this.#stateValue[stateKey] ??= 0;
    this.#stateValue[stateKey] += value;
  }

  get(state: State) {
    const stateKey = JSON.stringify(state);

    return this.#stateValue[stateKey] ?? 0;
  }
}
