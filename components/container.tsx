import { cn } from "@/lib/style";
import type { ComponentPropsWithoutRef } from "react";

export function OuterContainer({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("sm:px-8", className)} {...props}>
      <div className="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
    </div>
  );
}

export function InnerContainer({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("relative px-6 sm:px-8 lg:px-12", className)} {...props}>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
}

export function Container({
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <OuterContainer {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
}

export function IconContainer({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "relative mt-1 flex flex-none items-center justify-center rounded-full shadow-gray-800/5 shadow-md ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
