import type { Policy } from "../../types";
import { MonteCarloPolicyControl } from "../../control/monteCarlo";
import {
  WindyGridworldEnvironment,
  type WindyAgentState,
  type WindyAction,
} from "../../environments/windyGridworldEnvironment";
import StateActionValue from "../../valueFunctions/stateActionValue";
import EpsilonGreedyPolicy from "../../policy/epsilonGreedyPolicy";

export const monteCarloPolicyControl = ({
  initialPolicy,
  episodes,
  epsilon,
}: {
  initialPolicy: Policy<WindyAgentState, WindyAction>;
  episodes: number;
  epsilon: number;
}): {
  actionValueFunction: StateActionValue<WindyAgentState, WindyAction>;
  policy: Policy<WindyAgentState, WindyAction>;
} => {
  const environment = new WindyGridworldEnvironment();
  const policy = new EpsilonGreedyPolicy(environment, initialPolicy, epsilon);
  const monteCarlo = new MonteCarloPolicyControl({
    environment,
    policy,
    episodes,
  });
  return monteCarlo.run();
};
