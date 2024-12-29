import { visit } from "../utils/visit";
import { getNodeText } from "../utils/traversing";

export default function (tree: any) {
  visit(
    tree,
    "msub",
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

      if (value === "𝒫") {
        if (sub === "ss′") {
          addLabel("Transition probability from state s to state s′");
        }
      }

      if (value === "R") {
        if (sub === "t") {
          addLabel("Reward at step t");
        } else if (sub === "t+1") {
          addLabel("Immediate reward after the current step t+1");
        } else if (sub === "t+2") {
          addLabel("Reward at time step t+2)");
        }
      }

      if (value === "μ") {
        if (sub === "n") {
          addLabel("Mean (up to episode n)");
        }

        if (sub === "n−1") {
          addLabel("Previous mean (up to episode n-1)");
        }
      }

      if (value === "S") {
        if (getPreviousNText(1) === "(") return; // E.g. V(St)
        if (sub === "t") {
          addLabel("The state at the current step t");
        }
        if (sub === "t+1") {
          addLabel("The state at the next step t+1");
        }
        if (sub === "T") {
          addLabel("The state at the terminal step T");
        }
      }

      if (value === "G") {
        if (sub === "t") {
          if (getNextNText(5) === "−V(St)") {
            groupAndLabel(
              5,
              "Error term. The difference between what we thought that's going to happen, the previous estimated mean value and what actually happened, the new reward"
            );
          } else {
            addLabel("Return at time step t");
          }
        }
      }

      if (value === "v") {
        if (sub === "π") {
          if (getNextNText(3) === "(s)") {
            groupAndLabel(3, "Value of state s under policy π");
          } else if (getNextNText(3) === "(St)") {
            groupAndLabel(
              3,
              "Value of the state at the current step t under policy π"
            );
          } else if (getNextNText(3) === "(St+1)") {
            groupAndLabel(
              3,
              "Value of the state at the next step t+1 under policy π"
            );
          } else {
            addLabel("Value function under policy π");
          }
        }
      }

      if (value === "δ") {
        if (sub === "t") {
          addLabel("Temporal difference error");
        }
      }

      if (value === "E") {
        if (getNextNText(3) === "(s)") {
          if (sub === "t") {
            groupAndLabel(3, "Eligibility trace of state s at time t.");
          }
          if (sub === "t−1") {
            groupAndLabel(
              3,
              "Eligibility trace of state s at the previous step time t-1."
            );
          }
          if (sub === "0") {
            groupAndLabel(3, "Eligibility trace of state s at time 0.");
          }
        }
        if (getNextNText(5) === "(s,a)") {
          if (sub === "0") {
            groupAndLabel(
              5,
              "Eligibility trace of state s and action a at time 0."
            );
          } else if (sub === "t−1") {
            groupAndLabel(
              5,
              "Eligibility trace of state s and action a at the previous step time t-1."
            );
          } else if (sub === "t") {
            groupAndLabel(
              5,
              "Eligibility trace of state s and action a at time t."
            );
          }
        }
      }

      if (value === "q") {
        if (sub === "π") {
          if (getNextNText(5) === "(s,a)") {
            groupAndLabel(
              5,
              "Q-value is the expected return starting from state s, taking action a, and then following policy π"
            );
          } else {
            addLabel("Q-value function under policy π");
          }
        }
      }

      if (value === "arg max") {
        if (sub === "a∈𝒜") {
          addLabel(
            "Pick the action that maximizes the following expression and return this action"
          );
        }
      }

      if (value === "π") {
        if (sub === "k") {
          if (getNextNText(5) === "(a|s)") {
            groupAndLabel(
              5,
              "Improved stochastic policy: Probability of taking action a in state s in the k-th episode"
            );
          }
        }

        if (sub === "*") {
          addLabel("Optimal policy");
        }
      }

      if (value === "N") {
        if (sub === "k") {
          if (getNextNText(5) === "(s,a)") {
            groupAndLabel(
              5,
              "Counter. Total number of times action a was taken from state s up until the k-th episode"
            );
          } else {
            addLabel("Counter in the k-th episode");
          }
        }
      }
    }
  );
}
