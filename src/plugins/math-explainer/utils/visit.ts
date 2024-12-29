import { visit as unistVisit } from "unist-util-visit";
import { addLabelToNode } from "./label";
import { groupNodesWithLabel } from "./group";
import { getNextNText, getPreviousNText } from "./traversing";

let counter = 0;

export function visit(
  tree: any,
  tag: string,
  visitor: ({}: {
    value: string;
    node: any;
    index: number;
    parent: any;
    addLabel: (label: string) => void;
    groupAndLabel: (numberOfNodes: number, label: string) => void;
    getPreviousNText: (n: number) => string;
    getNextNText: (n: number) => string;
  }) => void
) {
  unistVisit(tree, { tagName: tag }, (node, index, parent) => {
    if (index === undefined) return;
    counter++;

    const value =
      node.children[0]?.value || // When the structure is mi / mtext
      node.children[0]?.children[0]?.value || // When the structure is msub / mi / mtext
      node.children[0]?.children[0]?.children[0]?.value; // When the structure is msub / mrow / mi / mtext

    visitor({
      value,
      node,
      index,
      parent,
      addLabel: addLabelToNode.bind(null, node, index, parent, counter),
      groupAndLabel: groupNodesWithLabel.bind(null, index, parent, counter),
      getPreviousNText: getPreviousNText.bind(null, parent, index),
      getNextNText: getNextNText.bind(null, parent, index),
    });
  });
}
