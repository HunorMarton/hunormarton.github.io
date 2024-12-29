import { visit } from "../utils/visit";
import { getNodeText } from "../utils/traversing";

export default function (tree: any) {
  visit(
    tree,
    "munder",
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
      const under = getNodeText(node.children[1]);

      if (value === "max") {
        if (under === "a∈𝒜" || under === "a′∈𝒜") {
          addLabel(
            "Pick the action that maximizes the following expression and return the value of the expression"
          );
        }
      }

      if (value === "arg max") {
        if (under === "a∈𝒜") {
          addLabel(
            "Pick the action that maximizes the following expression and return this action"
          );
        }
      }

      if (value === "∑") {
        if (under === "a∈𝒜" || under === "a′∈𝒜") {
          addLabel("Summarize for all actions");
        }

        if (under === "s′∈𝒮") {
          addLabel("Summarize for all possible next states");
        }
      }
    }
  );
}
