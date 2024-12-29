import { u } from "unist-builder";

export function addLabelToNode(
  node: any,
  index: number,
  parent: any,
  counter: number,
  label: string
) {
  markNodeAsLabel(node, counter);

  const labelNode = createLabelNode(label, counter);

  parent.children.splice(index + 1, 0, labelNode);
}

export function markNodeAsLabel(node: any, counter: number) {
  node.properties.className ??= [];
  node.properties.className.push("label");

  node.properties.style ??= "";
  node.properties.style += `anchor-name: --anchor-el-${counter};`;
}

export function createLabelNode(label: string, counter: number) {
  return u("element", {
    tagName: "mtext",
    properties: {
      style: `position-anchor: --anchor-el-${counter};`,
    },
    children: [u("text", label)],
  });
}
