import * as tf from "@tensorflow/tfjs-node";
import { type Environment, type Reward } from "../types";

type Card = number;
type Deck = Card[];

export type BlackjackAgentState = {
  playerSum: number;
  dealerCard: number;
  hasUsableAce: boolean;
};

type BlackjackEnvironmentState = {
  deck: Deck;
  dealerCard: Card;
  dealerHasUsableAce: boolean;
};

export type BlackjackAction = "stick" | "twist";

export type BlackjackPolicy = (state: BlackjackAgentState) => BlackjackAction;

export class BlackjackEnvironment
  implements Environment<BlackjackAgentState, BlackjackAction>
{
  #state: BlackjackEnvironmentState;

  constructor() {
    this.#state = this.#getInitialEnvironmentState();
  }

  #getInitialEnvironmentState(): BlackjackEnvironmentState {
    const deck = this.#initializeDeck();
    const dealerCard = this.#drawCard(deck);
    const dealerHasUsableAce = false;

    return { deck, dealerCard, dealerHasUsableAce };
  }

  initializeEnvironment() {
    this.#state = this.#getInitialEnvironmentState();
  }

  #initializeDeck(): Deck {
    const deck: Deck = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 0; j < 4; j++) {
        deck.push(i);
      }
    }
    return this.#shuffle(deck);
  }

  #shuffle(deck: Deck): Deck {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  #drawCard(deck?: Deck): Card {
    return deck ? deck.pop()! : this.#state.deck.pop()!;
  }

  getInitialAgentState(): BlackjackAgentState {
    const playerCard1 = this.#drawCard();
    const playerCard2 = this.#drawCard();
    const dealerCard = this.#state.dealerCard;

    let playerSum = playerCard1 + playerCard2;
    const hasAce = playerCard1 === 1 || playerCard2 === 1;

    // Usable ace is an ace that can be counted as 11 without the hand going over 21. Later on, it can be counted as 1 if needed.
    if (hasAce && playerSum + 10 <= 21) {
      playerSum += 10;
      return { playerSum, dealerCard, hasUsableAce: true };
    }

    return { playerSum, dealerCard, hasUsableAce: false };
  }

  getReward(state: BlackjackAgentState, action: BlackjackAction): Reward {
    if (action === "stick") {
      if (state.playerSum > 21) return -1;

      const dealerSum = this.#dealerPlay();
      if (dealerSum > 21) return 1;

      if (state.playerSum > dealerSum) return 1;
      if (state.playerSum === dealerSum) return 0;
      return -1;
    } else if (action === "twist") {
      if (state.playerSum > 21) return -1;
      return 0;
    }
    return 0;
  }

  #dealerPlay(): number {
    let dealerSum = this.#state.dealerCard;
    while (dealerSum < 17) {
      const newCard = this.#drawCard();
      dealerSum += newCard;

      // If the dealer drew an ace and the dealer can use it as 11 without going over 21, we do so.
      if (newCard === 1 && dealerSum + 10 <= 21) {
        dealerSum += 10;
        this.#state.dealerHasUsableAce = true;
      }

      // If the dealer went over 21 and has a usable ace, we count the ace as 1 instead of 11.
      if (dealerSum > 21 && this.#state.dealerHasUsableAce) {
        dealerSum -= 10;
        this.#state.dealerHasUsableAce = false;
      }
    }
    return dealerSum;
  }

  getNextState(
    state: BlackjackAgentState,
    action: BlackjackAction
  ): BlackjackAgentState {
    if (action === "twist") {
      const newCard = this.#drawCard();
      let newSum = state.playerSum + newCard;
      let hasUsableAce = state.hasUsableAce;

      // If the player drew an ace and the player can use it as 11 without going over 21, we do so.
      if (newCard === 1 && newSum + 10 <= 21) {
        newSum += 10;
        hasUsableAce = true;
      }

      // If the player went over 21 and has a usable ace, we count the ace as 1 instead of 11.
      if (newSum > 21 && hasUsableAce) {
        newSum -= 10;
        hasUsableAce = false;
      }

      return { playerSum: newSum, dealerCard: state.dealerCard, hasUsableAce };
    }
    return state;
  }

  isTerminal(state: BlackjackAgentState, action: BlackjackAction): boolean {
    return action === "stick" || state.playerSum > 21;
  }

  getRandomAction(): BlackjackAction {
    return Math.random() < 0.5 ? "stick" : "twist";
  }

  getPossibleActions(): BlackjackAction[] {
    return ["stick", "twist"];
  }

  stateToTensor(state: BlackjackAgentState) {
    const inputArray = [
      state.playerSum,
      state.dealerCard,
      state.hasUsableAce ? 1 : 0,
    ];

    return tf.tensor2d([inputArray], [1, inputArray.length]);
  }
}
