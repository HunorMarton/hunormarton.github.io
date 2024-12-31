import type { Environment, Policy } from "../types";
import Lookup from "../valueFunctions/lookup";
import StateActionValue from "../valueFunctions/stateActionValueTS";

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
    let t0: number;
    let t_env = 0;
    let t_v_adjust = 0;
    let t_v_get = 0;
    let t_policy_evaluate = 0;
    let t_policy_improve = 0;
    let steps = 0;

    Lookup.init(this.environment.getPossibleActions());

    // Q(s, a)
    const actionValueFunction = new StateActionValue<State, Action>(7 * 10, 4);

    for (let i = 0; i < this.episodes; i++) {
      t0 = performance.now();
      this.environment.initializeEnvironment();
      let state = this.environment.getInitialAgentState();
      t_env += performance.now() - t0;

      t0 = performance.now();
      let action = this.policy.evaluate(state);
      t_policy_evaluate += performance.now() - t0;

      while (true) {
        steps++;
        t0 = performance.now();
        const reward = this.environment.getReward(state, action);
        const nextState = this.environment.getNextState(state, action);
        t_env += performance.now() - t0;

        t0 = performance.now();
        const nextAction = this.policy.evaluate(nextState);
        t_policy_evaluate += performance.now() - t0;

        t0 = performance.now();
        const tdTarget =
          reward + this.gamma * actionValueFunction.get(nextState, nextAction);
        const tdError = tdTarget - actionValueFunction.get(state, action);
        t_v_get += performance.now() - t0;

        // Update Q-values
        t0 = performance.now();
        actionValueFunction.adjust(state, action, this.alpha * tdError);
        t_v_adjust += performance.now() - t0;

        // Policy improvement step
        t0 = performance.now();
        this.policy.improve(actionValueFunction, state);
        t_policy_improve += performance.now() - t0;

        t0 = performance.now();
        if (this.environment.isTerminal(nextState, nextAction)) break;
        t_env += performance.now() - t0;

        state = nextState;
        action = nextAction;
      }
    }

    console.log("Temporal difference SARSA - TensorFlow.js");
    console.log("Time spent in environment", t_env);
    console.log("Time spent in value function get", t_v_get);
    console.log("Time spent in value function adjust", t_v_adjust);
    console.log("Time spent in policy evaluate", t_policy_evaluate);
    console.log("Time spent in policy improve", t_policy_improve);
    console.log("Iterations", steps);

    // console.log(actionValueFunction._stateActionValue.arraySync());

    return {
      actionValueFunction,
      policy: this.policy,
    };
  }
}