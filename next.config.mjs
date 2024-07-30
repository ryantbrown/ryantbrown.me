import rehypePrism from "@mapbox/rehype-prism";
import createMDX from "@next/mdx";
import createJiti from "jiti";
import { fileURLToPath } from "node:url";
import remarkGfm from "remark-gfm";

createJiti(fileURLToPath(import.meta.url))("./env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
