import type {
  Policy,
  StateActionValue,
  StateActionValueTS,
  StateActionValueTS2,
} from "../../types";
import {
  type WindyAgentState,
  type WindyAction,
} from "../../environments/windyGridworldEnvironment";

type TransformedWindyGridworldValueFunction = {
  up: number;
  down: number;
  left: number;
  right: number;
}[][];

export const transformWindyGridworldPolicyControl = ({
  policy,
}: {
  policy: Policy<WindyAgentState, WindyAction>;
}): string[][] => {
  const transformedPolicy: string[][] = Array.from({ length: 7 }, () =>
    Array(10).fill("")
  );

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 7; y++) {
      const state = { x, y };

      const bestAction = policy.greedy(state);

      transformedPolicy[y][x] = bestAction;
    }
  }

  return transformedPolicy;
};

export const transformWindyGridworldActionValueFunction = ({
  actionValueFunction,
}: {
  actionValueFunction:
    | StateActionValue<WindyAgentState, WindyAction>
    | StateActionValueTS<WindyAgentState, WindyAction>
    | StateActionValueTS2<WindyAgentState, WindyAction>;
}): TransformedWindyGridworldValueFunction => {
  const transformedActionValue: TransformedWindyGridworldValueFunction =
    Array.from({ length: 7 }, () =>
      Array.from({ length: 10 }).map(() => ({
        up: 0,
        down: 0,
        left: 0,
        right: 0,
      }))
    );

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 7; y++) {
      const state = { x, y };
      for (let action of ["up", "down", "left", "right"] as WindyAction[]) {
        transformedActionValue[y][x][action] = actionValueFunction.get(
          state,
          action
        );
      }
    }
  }

  return transformedActionValue;
};
