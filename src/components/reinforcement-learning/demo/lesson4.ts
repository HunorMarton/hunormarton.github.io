import { type Environment, type Reward } from "../types";
import {
  BlackjackEnvironment,
  type BlackjackPolicy,
  type BlackjackAgentState,
} from "../environments/blackjackEnvironment";
import StateValue from "../valueFunctions/stateValue";
import StateVisitCounter from "../counters/stateVisitCounter";

class MonteCarloPolicyEvaluation<State, Action> {
  environment: Environment<State, Action>;
  policy: (state: State) => Action;
  episodes: number;

  constructor(
    environment: Environment<State, Action>,
    policy: (state: State) => Action,
    episodes: number
  ) {
    this.environment = environment;
    this.policy = policy;
    this.episodes = episodes;
  }

  run(): StateValue<State> {
    // N(s)
    const stateVisitCounter = new StateVisitCounter<State>();
    // v_pi(s)
    const stateValueFunction = new StateValue<State>();

    for (let i = 0; i < this.episodes; i++) {
      const episode = this.generateEpisode();
      const G = this.calculateReturns(episode);

      // Walk through the episode and update the value function for each state as an incremental mean.
      for (let t = 0; t < episode.length; t++) {
        const state = episode[t].state;

        stateVisitCounter.increment(state);

        // We update the new mean a little bit into the direction of this error.
        // The error term is the difference between the previous mean and the new return.
        stateValueFunction.adjust(
          state,
          (G[t] - stateValueFunction.get(state)) / stateVisitCounter.get(state)
        );
      }
    }

    return stateValueFunction;
  }

  generateEpisode(): { state: State; reward: Reward }[] {
    const episode: { state: State; reward: Reward }[] = [];
    this.environment.initializeEnvironment();
    let state = this.environment.getInitialAgentState();

    while (true) {
      const action = this.policy(state);
      const reward = this.environment.getReward(state, action);
      episode.push({ state, reward });

      if (this.environment.isTerminal(state, action)) break;

      state = this.environment.getNextState(state, action);
    }

    return episode;
  }

  calculateReturns(episode: { state: State; reward: Reward }[]): Reward[] {
    const returns: Reward[] = [];
    let G = 0;

    for (let t = episode.length - 1; t >= 0; t--) {
      G = episode[t].reward + G;
      returns[t] = G;
    }

    return returns;
  }
}

export const monteCarloPolicyEvaluation = (
  policy: BlackjackPolicy,
  episodes: number
): StateValue<BlackjackAgentState> => {
  const environment = new BlackjackEnvironment();
  const monteCarlo = new MonteCarloPolicyEvaluation(
    environment,
    policy,
    episodes
  );
  return monteCarlo.run();
};

/*
// Example policy: always twist if playerSum < 20, otherwise stick
const examplePolicy: BlackjackPolicy = (state: BlackjackAgentState) => {
  if (state.playerSum < 20) {
    return "twist";
  }
  return "stick";
};

// Run Monte-Carlo policy evaluation
const stateValueFunction = monteCarloPolicyEvaluation(examplePolicy, 10000);
console.log("value", stateValueFunction);
*/
