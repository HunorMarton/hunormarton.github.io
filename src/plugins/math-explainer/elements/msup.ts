import { visit } from "../utils/visit";
import { getNodeText } from "../utils/traversing";

export default function (tree: any) {
  visit(
    tree,
    "msup",
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
      const sup = getNodeText(node.children[1]);

      if (value === "π") {
        if (sup === "′") {
          if (getNextNText(5) === "(a|s)") {
            groupAndLabel(
              5,
              "Improved stochastic policy: Probability of taking action a in state s"
            );
          } else if (getNextNText(3) === "(s)") {
            groupAndLabel(
              3,
              "Improved deterministic policy: Gives back the action to take in state s"
            );
          } else {
            addLabel("Improved policy");
          }
        }
      }
    }
  );
}
