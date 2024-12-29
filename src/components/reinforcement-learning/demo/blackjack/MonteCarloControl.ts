import type { Policy } from "../../types";
import { MonteCarloPolicyControl } from "../../control/monteCarlo";
import {
  BlackjackEnvironment,
  type BlackjackAgentState,
  type BlackjackAction,
} from "../../environments/blackjackEnvironment";
import StateActionValue from "../../valueFunctions/stateActionValue";
import EpsilonGreedyPolicy from "../../policy/epsilonGreedyPolicy";

export const monteCarloPolicyControl = ({
  initialPolicy,
  episodes,
  epsilon,
}: {
  initialPolicy: Policy<BlackjackAgentState, BlackjackAction>;
  episodes: number;
  epsilon: number;
}): {
  actionValueFunction: StateActionValue<BlackjackAgentState, BlackjackAction>;
  policy: Policy<BlackjackAgentState, BlackjackAction>;
} => {
  const environment = new BlackjackEnvironment();
  const policy = new EpsilonGreedyPolicy(environment, initialPolicy, epsilon);
  const monteCarlo = new MonteCarloPolicyControl({
    environment,
    policy,
    episodes,
  });
  return monteCarlo.run();
};
