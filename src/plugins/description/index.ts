import { visit, EXIT } from "unist-util-visit";

function getNodeValue(node: any) {
  return node.children
    .map((child: any) => child.value ?? getNodeValue(child))
    .join("");
}

export default function remarkAddFirstParagraphToFrontmatter() {
  return (tree: any, file: any) => {
    visit(tree, "paragraph", (node: any) => {
      file.data.astro.frontmatter.description = getNodeValue(node);
      return EXIT;
    });
  };
}
