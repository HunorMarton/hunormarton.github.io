import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeMathML from "@daiji256/rehype-mathml";

import astroExpressiveCode from "astro-expressive-code";
import remarkInlineCodeClass from "remark-inline-code-class";
import mathExplainerPlugin from "./src/plugins/math-explainer/index.ts";
import remarkTableOfContents from "./src/plugins/table-of-content/index.js";
import description from "./src/plugins/description/index.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://hunormarton.github.io",
  integrations: [
    astroExpressiveCode({
      useDarkModeMediaQuery: false,
      styleOverrides: {
        codeFontSize: "12px", // How to use em or rem here?
      },
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkInlineCodeClass,
      remarkTableOfContents,
      description,
    ],
    rehypePlugins: [rehypeMathML, mathExplainerPlugin],
  },
});
