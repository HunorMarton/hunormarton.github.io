import { visit } from "../utils/visit";
import { getNodeText } from "../utils/traversing";

export default function (tree: any) {
  visit(
    tree,
    "mi",
    ({
      value,
      node,
      index,
      parent,
      addLabel,
      groupAndLabel,
      getPreviousNText,
      getNextNText,
    }) => {
      if (value === "R") {
        if (parent.tagName === "msubsup" || parent.tagName == "msub") return;
        addLabel("Reward");
      }

      if (value === "𝔼") {
        addLabel("Expectation");
      }

      if (value === "ℙ") {
        addLabel("Probability");
      }

      if (value === "α") {
        addLabel(
          "Step size. An exponential forgetting rate. As a result previous episodes will be gradually forgotten."
        );
      }

      if (value === "π") {
        if (parent.tagName === "msup" || parent.tagName === "msub") return;
        if (getNextNText(5) === "(a|s)") {
          groupAndLabel(
            5,
            "Stochastic policy: Probability of taking action a in state s"
          );
        } else if (getNextNText(3) === "(s)") {
          groupAndLabel(
            3,
            "Deterministic policy: Gives back the action to take in state s"
          );
        } else {
          addLabel("Policy");
        }
      }

      if (value === "V") {
        if (getPreviousNText(2) === "Gt−") return; // Gt−V(St) is the Error term

        if (getNextNText(3) === "(s)") {
          groupAndLabel(3, "Estimated mean value of state s");
        } else if (getNextNText(3) === "(St)") {
          groupAndLabel(
            3,
            "Estimated mean value of the state at the current step t"
          );
        } else if (getNextNText(3) === "(St+1)") {
          groupAndLabel(
            3,
            "Estimated mean value of the state at the next step t+1"
          );
        } else {
          addLabel("Estimated mean value");
        }
      }

      if (value === "S") {
        if (getNextNText(3) === "(s)") {
          groupAndLabel(3, "Total return of state s through multiple episodes");
        }
      }

      if (value === "N") {
        if (parent.tagName === "msub") return;
        if (getNextNText(5) === "(s,a)") {
          groupAndLabel(
            5,
            "Counter. Total number of times action a was taken from state s"
          );
        } else if (getNextNText(5) === "(St,At)") {
          groupAndLabel(
            5,
            "Counter. How many times we seen state-action pair at time t"
          );
        } else if (getNextNText(3) === "(s)") {
          groupAndLabel(
            3,
            "Counter. Total number of times state s was visited"
          );
        } else if (getNextNText(3) === "(St)") {
          groupAndLabel(
            3,
            "Counter. Total number of times the state at time t was visited"
          );
        } else {
          addLabel("Counter");
        }
      }

      if (value === "γ") {
        addLabel(
          "Discounting factor. Future rewards count less than immediate rewards."
        );
      }

      /*
        // TODO: This is messing up $$\mathcal{P}_{ss'}$$ because the parent of s is an mrow
        if (value === "s") {
          if (parent.tagName === "msubsup" || parent.tagName === "msub") return;
          if (previous.at(-1) === "(") return;
          addLabel("State");
        }
        */

      if (value === "𝒫") {
        if (parent.tagName === "msubsup" || parent.tagName == "msub") return;
        addLabel("Transition probability");
      }

      if (value === "(") {
        if (getNextNText(4) === "1-λ)") {
          groupAndLabel(
            4,
            "Normalizing factor that makes all of our weights sum to 1"
          );
        }
      }

      if (value === "Q") {
        if (getNextNText(5) === "(s,a)") {
          groupAndLabel(
            5,
            "Q-value (action-value) is the value we get for taking action a in state s"
          );
        } else if (getNextNText(5) === "(St,At)") {
          groupAndLabel(
            5,
            "Q-value (action-value) for the state-action pair at time t"
          );
        } else if (
          getNextNText(5) === "(S′,A′)" ||
          getNextNText(5) === "(St+1,At+1)"
        ) {
          groupAndLabel(
            5,
            "Q-value (action-value) for the next state-action pair"
          );
        } else if (getNextNText(5) === "(S,A)") {
          groupAndLabel(5, "Q-value function (action-value function)");
        } else if (getNextNText(3) === "(St+1)") {
          groupAndLabel(3, "Q-value (action-value) after one step");
        } else {
          addLabel("Q-value function (action-value function)");
        }
      }

      if (value === "ϵ") {
        if (getNextNText(2) === "/m") {
          groupAndLabel(
            2,
            "Exploration rate. Probability of choosing a random action instead of the greedy one."
          );
        }
      }

      if (value === "𝐰") {
        addLabel("Vector of weights");
      }

      if (value === "𝐱") {
        addLabel("Feature vector");
      }

      if (value === "∂") {
        addLabel("Partial derivative");
      }

      if (value === "Δ") {
        addLabel("Change in");
      }

      // Lambda: constant value between 0 and 1, telling how much we are going to decay the weights of each successive n.
    }
  );
}
