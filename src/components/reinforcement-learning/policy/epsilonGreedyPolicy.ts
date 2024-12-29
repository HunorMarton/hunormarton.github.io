import GreedyPolicy from "./greedyPolicy";
import type { Environment, Policy } from "../types";

export default class EpsilonGreedyPolicy<State, Action> extends GreedyPolicy<
  State,
  Action
> {
  #environment: Environment<State, Action>;
  #epsilon: number;

  constructor(
    environment: Environment<State, Action>,
    initialPolicy: Policy<State, Action>,
    epsilon: number
  ) {
    super(initialPolicy);
    this.#environment = environment;
    this.#epsilon = epsilon;
  }

  evaluate(state: State): Action {
    if (Math.random() < this.#epsilon) {
      // Explore: choose a random action
      return this.#environment.getRandomAction(state);
    } else {
      // Exploit: choose the best action based on the current policy
      return super.evaluate(state);
    }
  }
}
