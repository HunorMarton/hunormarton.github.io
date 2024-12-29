import * as tf from "@tensorflow/tfjs-node";
import { type Environment, type Reward } from "../types";

export type WindyAgentState = {
  x: number;
  y: number;
};

export type WindyAction = "up" | "down" | "left" | "right";

export type WindyPolicy = (state: WindyAgentState) => WindyAction;

export class WindyGridworldEnvironment
  implements Environment<WindyAgentState, WindyAction>
{
  initializeEnvironment() {}

  getInitialAgentState(): WindyAgentState {
    return { x: 0, y: 3 };
  }

  getReward(state: WindyAgentState, action: WindyAction): Reward {
    if (this.isTerminal(state, action)) return 1;
    return -1;
  }

  getNextState(state: WindyAgentState, action: WindyAction): WindyAgentState {
    const nextState = { ...state };
    switch (action) {
      case "up":
        nextState.y -= 1;
        break;
      case "down":
        nextState.y += 1;
        break;
      case "left":
        nextState.x -= 1;
        break;
      case "right":
        nextState.x += 1;
        break;
    }

    // Add wind effect
    if ([3, 4, 5, 8].includes(nextState.x)) nextState.y -= 1;
    if ([6, 7].includes(nextState.x)) nextState.y -= 2;

    // Ensure the agent stays within the grid
    nextState.y = Math.max(0, nextState.y);
    nextState.y = Math.min(6, nextState.y);
    nextState.x = Math.max(0, nextState.x);
    nextState.x = Math.min(9, nextState.x);

    return nextState;
  }

  isTerminal(state: WindyAgentState, action: WindyAction): boolean {
    return state.x === 7 && state.y === 3;
  }

  getRandomAction(): WindyAction {
    const actions = this.getPossibleActions();
    return actions[Math.floor(Math.random() * actions.length)];
  }

  getPossibleActions(): WindyAction[] {
    return ["up", "down", "left", "right"];
  }

  stateToTensor(state: WindyAgentState) {
    const maxValues = { x: 9, y: 6 };
    const inputArray = [state.x / maxValues.x, state.y / maxValues.y];
    return tf.tensor2d([inputArray], [1, inputArray.length]);
  }
}
