import { visit } from "../utils/visit";
import { getNodeText } from "../utils/traversing";

export default function (tree: any) {
  visit(
    tree,
    "munderover",
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
      const over = getNodeText(node.children[2]);

      if (value === "∑") {
        if (under === "k=1" && over === "K") {
          addLabel("Summarize for all episodes");
        }

        if (under === "t=1" && over === "Tk") {
          addLabel("Summarize for all time steps in episode k");
        }
        if (under === "n=1" && over === "∞") {
          addLabel("Summarize for all n-steps.");
        }
      }
    }
  );
}
