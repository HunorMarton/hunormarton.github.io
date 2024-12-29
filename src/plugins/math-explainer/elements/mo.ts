import { visit } from "../utils/visit";
import { getNodeText } from "../utils/traversing";

export default function (tree: any) {
  visit(
    tree,
    "mo",
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
      if (value === "(") {
        if (getNextNText(4) === "1−λ)") {
          groupAndLabel(
            4,
            "Normalizing factor that makes all of our weights sum to 1"
          );
        }
      }

      if (value === "≈") {
        addLabel("Approximately equal to");
      }

      if (value === "∇") {
        addLabel("Gradient");
      }
    }
  );
}
