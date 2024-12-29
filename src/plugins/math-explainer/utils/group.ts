import { u } from "unist-builder";
import { createLabelNode } from "./label";

export function groupNodesWithLabel(
  index: number,
  parent: any,
  counter: number,
  numberOfNodes: number,
  label: string
) {
  const children = parent.children.splice(index, numberOfNodes + 1);
  const paddingNode = createPaddingNode(children, counter);
  const labelNode = createLabelNode(label, counter);

  parent.children.splice(index, 0, paddingNode, labelNode);
}

export function createPaddingNode(children: any[], counter: number) {
  return u("element", {
    tagName: "mpadded",
    properties: {
      class: "label",
      style: `anchor-name: --anchor-el-${counter};`,
    },
    children,
  });
}
