import * as tf from "@tensorflow/tfjs-node";

export type Reward = number;

export type Environment<State, Action> = {
  initializeEnvironment: () => void;
  getInitialAgentState: () => State;
  getReward: (state: State, action: Action) => Reward;
  getNextState: (state: State, action: Action) => State;
  isTerminal: (state: State, action: Action) => boolean;
  getRandomAction: (state: State) => Action;
  getPossibleActions: () => Action[];
  stateToTensor: (state: State) => tf.Tensor2D;
};

export type Policy<State, Action> = {
  evaluate: (state: State) => Action;
  greedy: (state: State) => Action;
  improve: (
    actionValueFunction: {
      getBestAction: (state: State) => Action;
    },
    state: State
  ) => void;
};

export type StateActionValue<State, Action> = {
  get: (state: State, action: Action) => number;
  getBestAction: (state: State) => Action;
  adjust: (state: State, action: Action, value: number) => void;
  adjustAll: (
    alpha: number,
    tdError: number,
    eligibilityTraces: StateActionEligibilityTrace<State, Action>
  ) => void;
};

export type StateActionValueTS<State, Action> = {
  get: (state: State, action: Action) => number;
  getBestAction: (state: State) => Action;
  adjust: (state: State, action: Action, value: number) => void;
  adjustAll: (
    alpha: number,
    tdError: number,
    eligibilityTraces: StateActionEligibilityTraceTS<State, Action>
  ) => void;
};

export type StateActionValueTS2<State, Action> = {
  get: (state: State, action: Action) => number;
  getBestAction: (state: State) => Action;
  adjust: (
    state: State,
    action: Action,
    reward: number,
    nextState: State,
    nextAction: Action,
    alpha: number,
    gamma: number
  ) => void;
};

export type StateActionEligibilityTrace<State, Action> = {
  increment: (state: State, action: Action, value?: number) => void;
  decay: (decayRate: number) => void;
  raw: () => { [stateKey: string]: { [actionKey: string]: number } };
};

export type StateActionEligibilityTraceTS<State, Action> = {
  increment: (state: State, action: Action, value?: number) => void;
  decay: (decayRate: number) => void;
  raw: () => tf.Tensor2D;
};

export type StateCounter = { [stateKey: string]: number };
