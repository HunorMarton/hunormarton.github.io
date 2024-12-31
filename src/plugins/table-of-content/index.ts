import { visit } from "unist-util-visit";

interface HeadingNode {
  type: "heading";
  depth: number;
  children: any[];
}

interface ParentNode {
  type: string;
}

interface TOCItem {
  depth: number;
  title: string;
  url: string;
}

export default function remarkTOC() {
  return (tree: any, file: any) => {
    const toc: TOCItem[] = [];

    visit(
      tree,
      "heading",
      (node: HeadingNode, index: any, parent: ParentNode) => {
        if (parent.type !== "root") return;
        const depth = node.depth;
        const title = node.children
          .filter((child: any) => child.type === "text")
          .map((child: any) => child.value)
          .join("");

        const url = title
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .trim()
          .replace(/\s+/g, "-");

        toc.push({ depth, title, url });
      }
    );

    if (toc.length !== 0) {
      file.data.astro.frontmatter.tableOfContents = toc;
    }
  };
}
