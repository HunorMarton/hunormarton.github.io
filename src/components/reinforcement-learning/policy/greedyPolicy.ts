import type { Policy, StateActionValue, StateActionValueTS } from "../types";

export default class GreedyPolicy<State, Action>
  implements Policy<State, Action>
{
  #policy: Map<string, Action>;
  #initialPolicy: Policy<State, Action>;

  constructor(initialPolicy: Policy<State, Action>) {
    this.#policy = new Map();
    this.#initialPolicy = initialPolicy;
  }

  async improve(
    actionValueFunction: {
      getBestAction: (state: State) => Action;
    },
    state: State
  ) {
    const bestAction = actionValueFunction.getBestAction(state);

    const stateKey = JSON.stringify(state);
    this.#policy.set(stateKey, bestAction);
  }

  greedy(state: State) {
    const stateKey = JSON.stringify(state);
    return this.#policy.get(stateKey) || this.#initialPolicy.evaluate(state);
  }

  evaluate(state: State) {
    return this.greedy(state);
  }
}
