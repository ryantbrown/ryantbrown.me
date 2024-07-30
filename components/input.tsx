import { cn } from "@/lib/style";
import type { ComponentPropsWithoutRef } from "react";

export function Input({
  className,
  placeholder,
  ...props
}: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      placeholder={placeholder}
      aria-label={placeholder}
      className={cn(
        "min-w-0 flex-auto appearance-none rounded-lg border border-gray-900/10 bg-white px-3 py-2 shadow-gray-800/5 shadow-sm",
        "placeholder:text-gray-400 focus:outline-none sm:text-sm",
        "dark:border-gray-700 dark:bg-gray-700/15 dark:text-gray-200 dark:placeholder:text-gray-500",
        className,
      )}
      {...props}
    />
  );
}
