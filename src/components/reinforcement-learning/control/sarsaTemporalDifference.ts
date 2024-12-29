import type { Environment, Policy } from "../types";
import StateActionValue from "../valueFunctions/stateActionValue";

export class SarsaPolicyControl<State, Action> {
  environment: Environment<State, Action>;
  policy: Policy<State, Action>;
  episodes: number;
  alpha: number;
  gamma: number;

  constructor({
    environment,
    policy,
    episodes,
    alpha,
    gamma,
  }: {
    environment: Environment<State, Action>;
    policy: Policy<State, Action>;
    episodes: number;
    alpha: number;
    gamma: number;
  }) {
    this.environment = environment;
    this.policy = policy;
    this.episodes = episodes;
    this.alpha = alpha;
    this.gamma = gamma;
  }

  run(): {
    actionValueFunction: StateActionValue<State, Action>;
    policy: Policy<State, Action>;
  } {
    // Q(s, a)
    const actionValueFunction = new StateActionValue<State, Action>();

    for (let i = 0; i < this.episodes; i++) {
      this.environment.initializeEnvironment();
      let state = this.environment.getInitialAgentState();
      let action = this.policy.evaluate(state);

      while (true) {
        const reward = this.environment.getReward(state, action);
        const nextState = this.environment.getNextState(state, action);
        const nextAction = this.policy.evaluate(nextState);

        const tdTarget =
          reward + this.gamma * actionValueFunction.get(nextState, nextAction);
        const tdError = tdTarget - actionValueFunction.get(state, action);

        actionValueFunction.adjust(state, action, this.alpha * tdError);

        // Policy improvement step
        this.policy.improve(actionValueFunction, state);

        if (this.environment.isTerminal(nextState, nextAction)) break;

        state = nextState;
        action = nextAction;
      }
    }

    return {
      actionValueFunction,
      policy: this.policy,
    };
  }
}
