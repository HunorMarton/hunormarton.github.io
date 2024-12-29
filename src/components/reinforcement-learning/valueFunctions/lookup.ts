export default class Lookup {
  static #stateIndexMap: Map<string, number> = new Map();
  static #actionIndexMap: Map<string, number> = new Map();

  static init(actions: any[]) {
    this.#stateIndexMap = new Map();
    this.#actionIndexMap = new Map();

    // All actions need to have a matching index upfront, otherwise the getAction method will not work
    actions.forEach((action) => {
      const actionKey = JSON.stringify(action);
      this.#actionIndexMap.set(actionKey, this.#actionIndexMap.size);
    });
  }

  static getStateIndex(state: any): number {
    const stateKey = JSON.stringify(state);
    if (!this.#stateIndexMap.has(stateKey)) {
      this.#stateIndexMap.set(stateKey, this.#stateIndexMap.size);
    }
    return this.#stateIndexMap.get(stateKey)!;
  }

  static getActionIndex(action: any): number {
    const actionKey = JSON.stringify(action);
    if (!this.#actionIndexMap.has(actionKey)) {
      this.#actionIndexMap.set(actionKey, this.#actionIndexMap.size);
    }
    return this.#actionIndexMap.get(actionKey)!;
  }

  static getAction(actionIndex: number): any {
    return Array.from(this.#actionIndexMap.keys())[actionIndex];
  }
}
