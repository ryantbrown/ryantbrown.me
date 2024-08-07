import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import { Callout, type CalloutProps } from "./components/callout";

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    Image: (props: ImageProps) => <Image {...props} />,
    Callout: (props: CalloutProps) => <Callout {...props} />,
  };
}
