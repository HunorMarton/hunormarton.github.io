import { visit, EXIT } from "unist-util-visit";

function getValue(node: any) {
  return node.children
    .map((child: any) => child.value ?? getValue(child))
    .join("");
}

export default function remarkAddFirstParagraphToFrontmatter() {
  return (tree: any, file: any) => {
    visit(tree, "paragraph", (node: any) => {
      file.data.astro.frontmatter.description = getValue(node);
      return EXIT;
    });
  };
}
