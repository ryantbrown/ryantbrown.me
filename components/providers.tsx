"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";
import { Analytics } from "./analytics";

/**
 * Providers component for the application.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <Analytics />
      <ThemeWatcher />
      {children}
    </ThemeProvider>
  );
}

/**
 * Watch the system theme and set the theme accordingly.
 */
function ThemeWatcher() {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    function onMediaChange() {
      const systemTheme = media.matches ? "dark" : "light";

      if (resolvedTheme === systemTheme) {
        setTheme("system");
      }
    }

    onMediaChange();

    media.addEventListener("change", onMediaChange);

    return () => {
      media.removeEventListener("change", onMediaChange);
    };
  }, [resolvedTheme, setTheme]);

  return null;
}
