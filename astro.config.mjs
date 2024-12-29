import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeMathML from "@daiji256/rehype-mathml";

import mathExplainerPlugin from "./src/plugins/math-explainer/index.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://hunormarton.github.io",
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathML, mathExplainerPlugin],
  },
});
