import { visit } from "../utils/visit";
import { getNodeText } from "../utils/traversing";

export default function (tree: any) {
  visit(
    tree,
    "msubsup",
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
      const sub = getNodeText(node.children[1]);
      const sup = getNodeText(node.children[2]);

      if (value === "ℛ") {
        if (sub === "s" && sup === "a") {
          addLabel("Reward when taking action a in state s");
        }
      }

      if (value === "𝒫") {
        if (sub === "ss′" && sup === "a") {
          addLabel(
            "Transition probability from state s to state s′ when taking action a. (The model of the MDP??)"
          );
        }
      }

      if (value === "S") {
        if (getPreviousNText(2) === "V(") return; // E.g. V(St)
        if (sub === "t" && sup === "k") {
          addLabel("The state at the current step t and the k-th episode");
        }
        if (sub === "t+1" && sup === "k") {
          addLabel("The state at the next step t+1 and the k-th episode");
        }
      }

      if (value === "A") {
        if (sub === "t" && sup === "k") {
          addLabel("The action at the current step t and the k-th episode");
        }
      }

      if (value === "G") {
        if (sub === "t" && sup === "k") {
          addLabel("The return at the current step t and the k-th episode");
        }
        if (sub === "t" && sup === "(1)") {
          addLabel(
            "One step return. The reward after one step and the discounted value estimate of the state we ended up in."
          );
        }
        if (sub === "t" && sup === "(2)") {
          addLabel(
            "Two step return. The reward after one step, plus the discarded reward after the second step, and the twice discounted value estimate of the state we ended up in."
          );
        }
        if (sub === "t" && sup === "(n)") {
          addLabel(
            "n-step return. We take n-steps and collect the real rewards, and add the discounted value estimate of the state we end up in."
          );
        } else if (sub === "t" && sup === "(∞)") {
          addLabel(
            "We use all the steps in the episode to calculate the return."
          );
        } else if (sub === "t" && sup === "λ") {
          addLabel(
            "λ-return. We use all the steps in the episode to calculate the return, but we use a weighting factor λ to balance the importance of the steps."
          );
        }
      }

      if (value === "q") {
        if (sub === "t" && sup === "k") {
          addLabel("The return at the current step t and the k-th episode");
        }
        if (sub === "t" && sup === "(1)") {
          addLabel(
            "One step Q-value. The reward after one step and the discounted Q-value of the state we ended up in."
          );
        }
        if (sub === "t" && sup === "(2)") {
          addLabel(
            "Two step Q-value. The reward after one step, plus the discarded reward after the second step, and the twice discounted Q-value of the state we ended up in."
          );
        }
        if (sub === "t" && sup === "(n)") {
          addLabel(
            "n-step Q-value. We take n-steps and collect the real rewards, and add the discounted Q-value of the state we end up in."
          );
        } else if (sub === "t" && sup === "(∞)") {
          addLabel(
            "We use all the steps in the episode to calculate the Q-value."
          );
        } else if (sub === "t" && sup === "λ") {
          addLabel(
            "λ Q-Value. We use all the steps in the episode to calculate the Q-values, but we use a weighting factor λ to balance the importance of the steps."
          );
        }
      }

      if (value === "R") {
        if (sub === "t+1" && sup === "k") {
          addLabel(
            "Immediate reward after the current step t+1 in the k-th episode"
          );
        }
      }
    }
  );
}
