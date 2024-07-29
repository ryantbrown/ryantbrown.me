import { cn } from "@/lib/style";
import type { ComponentPropsWithoutRef } from "react";

export function Eyebrow({
  className,
  children,
  decorate = false,
  ...props
}: ComponentPropsWithoutRef<"p"> & { decorate?: boolean }) {
  return (
    <p
      className={cn(
        "relative z-10 order-first flex items-center text-gray-400 text-sm dark:text-gray-500",
        className,
        decorate && "pl-3.5",
      )}
      {...props}
    >
      {decorate && (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 flex items-center"
        >
          <span className="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500" />
        </span>
      )}
      {children}
    </p>
  );
}
