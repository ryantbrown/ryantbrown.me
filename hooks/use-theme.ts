import { useTheme as useNextTheme } from "next-themes";

/**
 * Returns the current theme and a function to toggle the theme.
 */
export function useTheme() {
  const { resolvedTheme, setTheme } = useNextTheme();
  const otherTheme = resolvedTheme === "dark" ? "light" : "dark";

  return { resolvedTheme, setTheme, otherTheme };
}
