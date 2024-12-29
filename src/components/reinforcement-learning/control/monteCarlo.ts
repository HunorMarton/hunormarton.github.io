import type { Environment, Policy, Reward } from "../types";
import StateActionValue from "../valueFunctions/stateActionValue";
import ActionVisitCounter from "../counters/actionVisitCounter";

export class MonteCarloPolicyControl<State, Action> {
  environment: Environment<State, Action>;
  policy: Policy<State, Action>;
  episodes: number;

  constructor({
    environment,
    policy,
    episodes,
  }: {
    environment: Environment<State, Action>;
    policy: Policy<State, Action>;
    episodes: number;
  }) {
    this.environment = environment;
    this.policy = policy;
    this.episodes = episodes;
  }

  run(): {
    actionValueFunction: StateActionValue<State, Action>;
    policy: Policy<State, Action>;
  } {
    // N(s, a)
    const actionVisitCounter = new ActionVisitCounter<State, Action>();
    // Q(s, a)
    const actionValueFunction = new StateActionValue<State, Action>();

    for (let i = 0; i < this.episodes; i++) {
      const episode = this.generateEpisode();
      const G = this.calculateReturns(episode);

      // Walk through the episode and update the value function for each state-action pair as an incremental mean.
      for (let t = 0; t < episode.length; t++) {
        const { state, action } = episode[t];

        actionVisitCounter.increment(state, action);

        actionValueFunction.adjust(
          state,
          action,
          (G[t] - actionValueFunction.get(state, action)) /
            actionVisitCounter.get(state, action)
        );

        // Policy improvement step
        this.policy.improve(actionValueFunction, state);
      }
    }

    return {
      actionValueFunction,
      policy: this.policy,
    };
  }

  generateEpisode(): { state: State; action: Action; reward: Reward }[] {
    const episode: { state: State; action: Action; reward: Reward }[] = [];
    this.environment.initializeEnvironment();
    let state = this.environment.getInitialAgentState();

    while (true) {
      const action = this.policy.evaluate(state);
      const reward = this.environment.getReward(state, action);
      episode.push({ state, action, reward });

      state = this.environment.getNextState(state, action);
      if (this.environment.isTerminal(state, action)) break;
    }

    return episode;
  }

  calculateReturns(
    episode: { state: State; action: Action; reward: Reward }[]
  ): Reward[] {
    const returns: Reward[] = [];
    let G = 0;

    for (let t = episode.length - 1; t >= 0; t--) {
      G = episode[t].reward + G;
      returns[t] = G;
    }

    return returns;
  }
}
