import type { Policy, StateActionValue } from "../../types";
import StateValue from "../../valueFunctions/stateValue";
import {
  type BlackjackAgentState,
  type BlackjackAction,
} from "../../environments/blackjackEnvironment";

type TransformedBlackjackActionValue = {
  twist: number;
  stick: number;
}[][];

export const transformBlackjackValueFunction = (
  valueFunction: StateValue<BlackjackAgentState>
): { hasUsableAce: number[][]; noAce: number[][] } => {
  const hasAceMatrix: number[][] = Array.from({ length: 10 }, () =>
    Array(10).fill(0)
  );
  const noAceMatrix: number[][] = Array.from({ length: 10 }, () =>
    Array(10).fill(0)
  );

  for (let playerSum = 12; playerSum <= 21; playerSum++) {
    for (let dealerCard = 1; dealerCard <= 10; dealerCard++) {
      for (let hasUsableAce of [true, false]) {
        const value = valueFunction.get({
          playerSum,
          dealerCard,
          hasUsableAce,
        });

        if (hasUsableAce) {
          hasAceMatrix[playerSum - 12][dealerCard - 1] = value;
        } else {
          noAceMatrix[playerSum - 12][dealerCard - 1] = value;
        }
      }
    }
  }

  return { hasUsableAce: hasAceMatrix, noAce: noAceMatrix };
};

export const transformBlackjackActionValueFunction = ({
  actionValueFunction,
}: {
  actionValueFunction: StateActionValue<BlackjackAgentState, BlackjackAction>;
}): {
  hasAceMatrix: TransformedBlackjackActionValue;
  noAceMatrix: TransformedBlackjackActionValue;
} => {
  const hasAceMatrix: TransformedBlackjackActionValue = Array.from(
    { length: 10 },
    () => Array.from({ length: 10 }).map(() => ({ twist: 0, stick: 0 }))
  );
  const noAceMatrix: TransformedBlackjackActionValue = Array.from(
    { length: 10 },
    () => Array.from({ length: 10 }).map(() => ({ twist: 0, stick: 0 }))
  );

  for (let playerSum = 12; playerSum <= 21; playerSum++) {
    for (let dealerCard = 1; dealerCard <= 10; dealerCard++) {
      for (let hasUsableAce of [true, false]) {
        for (let action of ["twist", "stick"] as BlackjackAction[]) {
          const value = actionValueFunction.get(
            {
              playerSum,
              dealerCard,
              hasUsableAce,
            },
            action
          );

          if (hasUsableAce) {
            hasAceMatrix[playerSum - 12][dealerCard - 1][action] = value;
          } else {
            noAceMatrix[playerSum - 12][dealerCard - 1][action] = value;
          }
        }
      }
    }
  }

  return { hasAceMatrix, noAceMatrix };
};

export const transformBlackjackPolicyControl = ({
  policy,
}: {
  policy: Policy<BlackjackAgentState, BlackjackAction>;
}): { hasAceMatrix: string[][]; noAceMatrix: string[][] } => {
  const hasAceMatrix: string[][] = Array.from({ length: 10 }, () =>
    Array(10).fill("")
  );

  const noAceMatrix: string[][] = Array.from({ length: 10 }, () =>
    Array(10).fill("")
  );

  for (let playerSum = 12; playerSum <= 21; playerSum++) {
    for (let dealerCard = 1; dealerCard <= 10; dealerCard++) {
      for (let hasUsableAce of [true, false]) {
        const bestAction = policy.greedy({
          playerSum,
          dealerCard,
          hasUsableAce,
        });

        if (hasUsableAce) {
          hasAceMatrix[playerSum - 12][dealerCard - 1] = bestAction;
        } else {
          noAceMatrix[playerSum - 12][dealerCard - 1] = bestAction;
        }
      }
    }
  }

  return { hasAceMatrix, noAceMatrix };
};
