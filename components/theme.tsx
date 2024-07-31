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
      className="group px-3 py-2 transition duration-150"
      aria-label={mounted ? `Set theme to ${otherTheme}` : "Change theme"}
    >
      <SunIcon className="size-4 fill-gray-100 stroke-gray-700 group-hover:fill-gray-200 sm:size-5 dark:hidden" />
      <MoonIcon className="hidden size-4 fill-gray-900 stroke-gray-300 group-hover:fill-gray-600 sm:size-5 dark:block" />
    </button>
  );
}
