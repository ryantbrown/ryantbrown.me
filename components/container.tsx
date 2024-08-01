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

export function MainContainer({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"main">) {
  return (
    <main
      className={cn(
        "relative flex-auto border-gray-950/5 border-b pb-8 md:pb-16 dark:border-white/5",
        className,
      )}
      {...props}
    >
      {children}
    </main>
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
