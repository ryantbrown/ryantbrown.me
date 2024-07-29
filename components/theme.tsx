"use client";

import { useMounted } from "@/hooks/use-mounted";
import { useTheme } from "@/hooks/use-theme";
import { MoonIcon, SunIcon } from "./icons";

/**
 * A button to toggle the theme.
 */
export function ThemeToggle() {
  const mounted = useMounted();
  const { setTheme, otherTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(otherTheme)}
      className="group hidden px-3 py-2 transition duration-150 sm:block"
      aria-label={mounted ? `Set theme to ${otherTheme}` : "Change theme"}
    >
      <SunIcon className="size-5 fill-gray-100 stroke-gray-700 group-hover:fill-gray-200 dark:hidden" />
      <MoonIcon className="hidden size-5 fill-gray-900 stroke-gray-300 group-hover:fill-gray-600 dark:block" />
    </button>
  );
}
