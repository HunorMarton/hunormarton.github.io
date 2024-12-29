import { visit } from "../utils/visit";
import { getNodeText } from "../utils/traversing";

export default function (tree: any) {
  visit(
    tree,
    "mn",
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
      if (value === "1" && getNextNText(2) === "−ϵ") {
        groupAndLabel(2, "Probability of choosing the greedy action");
      }

      if (value === "𝟙") {
        addLabel(
          "Indicator function. Returns 1 if the condition is true, 0 otherwise."
        );
      }
    }
  );
}
