const rewardForEachStep = -1;

const actions = {
  up: (row: number, col: number) => ({ row: row - 1, col }),
  right: (row: number, col: number) => ({ row, col: col + 1 }),
  down: (row: number, col: number) => ({ row: row + 1, col }),
  left: (row: number, col: number) => ({ row, col: col - 1 }),
};

export function evaluatePolicy(
  v: number[][],
  terminalStates: [row: number, col: number][],
  iterations: number
) {
  let updated = Array(v.length)
    .fill(0)
    .map(() => Array(v[0].length).fill(0));

  const mRow = v.length;
  const mCol = v[0].length;

  for (let i = 0; i < iterations; i++) {
    for (let row = 0; row < mRow; row++) {
      for (let col = 0; col < mCol; col++) {
        // Skip terminal states
        if (terminalStates.some(([tRow, tCol]) => tRow === row && tCol === col))
          continue;

        // Policy: take an action with equal probability
        // Evaluate the policy and improve action-value function
        let averageValueFromAction = 0;
        for (let a of Object.keys(actions)) {
          // Execute action
          let { row: nextRow, col: nextCol } = actions[a](row, col);

          // Actions that would take us out of bounds do not change the value
          // otherwise take the value of the next step
          const actionValue =
            nextRow < 0 || nextRow >= mRow || nextCol < 0 || nextCol >= mCol
              ? v[row][col]
              : v[nextRow][nextCol];

          // Add the immediate reward and the action value weighted by the action's probability
          averageValueFromAction += 0.25 * (rewardForEachStep + actionValue);
        }
        updated[row][col] = averageValueFromAction;
      }
    }
    v = updated;
  }

  return v;
}

export function evaluateValueFunction(
  v: number[][],
  terminalStates: [row: number, col: number][],
  iterations: number
) {
  v = evaluatePolicy(v, terminalStates, iterations);
  // Go through each state and calculate the policy based on which action gives the highest value. If there are multiple actions with the same value, we return all of them.
  const policy = Array(v.length)
    .fill(0)
    .map(() => Array(v[0].length).fill([]));

  const mRow = v.length;
  const mCol = v[0].length;

  for (let row = 0; row < mRow; row++) {
    for (let col = 0; col < mCol; col++) {
      // Skip terminal states
      if (terminalStates.some(([tRow, tCol]) => tRow === row && tCol === col))
        continue;

      // Pick the actions with the highest value
      let bestActions: string[] = [];
      let bestActionValue = -Infinity;

      for (let a of Object.keys(actions)) {
        // Execute action
        let { row: nextRow, col: nextCol } = actions[a](row, col);

        // Actions that would take us out of bounds do not change the value
        // otherwise take action value
        const actionValue =
          nextRow < 0 || nextRow >= mRow || nextCol < 0 || nextCol >= mCol
            ? v[row][col]
            : v[nextRow][nextCol];

        // Act greedily and choose the actions that have the maximum value
        if (actionValue > bestActionValue) {
          bestActionValue = actionValue;
          bestActions = [a];
        } else if (actionValue === bestActionValue) {
          bestActions.push(a);
        }
      }

      policy[row][col] = bestActions;
    }
  }

  return policy;
}

export function iterateValueFunction(
  v: number[][],
  terminalStates: [row: number, col: number][],
  iterations: number
) {
  let updated = Array(v.length)
    .fill(0)
    .map(() => Array(v[0].length).fill(0));

  const mRow = v.length;
  const mCol = v[0].length;

  for (let i = 0; i < iterations; i++) {
    for (let row = 0; row < mRow; row++) {
      for (let col = 0; col < mCol; col++) {
        // Skip terminal states
        if (terminalStates.some(([tRow, tCol]) => tRow === row && tCol === col))
          continue;

        // Pick the actions with the highest value
        let bestActionValue = -Infinity;

        for (let a of Object.keys(actions)) {
          // Execute action
          let { row: nextRow, col: nextCol } = actions[a](row, col);

          // Actions that would take us out of bounds do not change the value
          // otherwise take action value
          const actionValue =
            rewardForEachStep +
            (nextRow < 0 || nextRow >= mRow || nextCol < 0 || nextCol >= mCol
              ? v[row][col]
              : v[nextRow][nextCol]);

          // Act greedily and choose the actions that have the maximum value
          bestActionValue = Math.max(bestActionValue, actionValue);
        }

        updated[row][col] = bestActionValue;
      }
    }
    v = updated;
  }

  return v;
}
