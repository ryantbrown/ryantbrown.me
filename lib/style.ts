import type { ClassValue } from "tailwind-variants";

/**
 * Merge class names.
 */
export function cn(...args: ClassValue[]) {
  return args.filter(Boolean).join(" ");
}
