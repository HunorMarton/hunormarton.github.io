import type { Policy } from "../../types";
import { SarsaPolicyControl } from "../../control/sarsaTemporalDifference";
import {
  WindyGridworldEnvironment,
  type WindyAgentState,
  type WindyAction,
} from "../../environments/windyGridworldEnvironment";
import StateActionValue from "../../valueFunctions/stateActionValue";
import EpsilonGreedyPolicy from "../../policy/epsilonGreedyPolicy";

export const temporalDifferencePolicyControl = ({
  initialPolicy,
  episodes,
  alpha,
  gamma,
  epsilon,
}: {
  initialPolicy: Policy<WindyAgentState, WindyAction>;
  episodes: number;
  alpha: number;
  gamma: number;
  epsilon: number;
}): {
  actionValueFunction: StateActionValue<WindyAgentState, WindyAction>;
  policy: Policy<WindyAgentState, WindyAction>;
} => {
  const environment = new WindyGridworldEnvironment();
  const policy = new EpsilonGreedyPolicy(environment, initialPolicy, epsilon);
  const monteCarlo = new SarsaPolicyControl({
    environment,
    policy,
    episodes,
    alpha,
    gamma,
  });
  return monteCarlo.run();
};
