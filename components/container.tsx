import { cn } from "@/lib/style";
import type { ComponentPropsWithoutRef } from "react";

export function PageContainer({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "relative flex size-auto min-h-full w-full flex-col",
        "border-gray-950/5 border-x bg-white dark:border-white/5 dark:bg-gray-900",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function ContentContainer({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("px-6 md:px-8 lg:px-16", className)} {...props}>
      {children}
    </div>
  );
}
