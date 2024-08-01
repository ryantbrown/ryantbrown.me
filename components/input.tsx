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
        "min-w-0 flex-auto appearance-none rounded-lg px-3 py-2 sm:text-sm",
        // shadow
        "shadow-gray-800/5 shadow-sm",
        // border
        "border border-gray-900/10 dark:border-gray-700",
        // placeholder
        "placeholder:text-gray-400 dark:placeholder:text-gray-500",
        // focus
        "focus:outline-none",
        // text
        "text-gray-900 dark:text-gray-200",
        // bg
        "bg-white dark:bg-white/5",
        className,
      )}
      {...props}
    />
  );
}
