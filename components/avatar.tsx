import { cn } from "@/lib/style";
import Image from "next/image";
import Link from "next/link";

import avatarImage from "@/images/portrait.jpg";

export function Avatar({
  large = false,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  large?: boolean;
}) {
  return (
    <div
      className={cn(
        className,
        "size-10 rounded-full bg-white/90 p-0.5 shadow-gray-800/5 shadow-lg ring-1 ring-gray-900/5 backdrop-blur md:size-12 dark:bg-gray-800/90 dark:ring-white/10",
      )}
      {...props}
    >
      <Link
        href="/"
        aria-label="About"
        className={cn("pointer-events-auto", className)}
      >
        <Image
          src={avatarImage}
          alt="Ryan T. Brown"
          priority
          sizes={large ? "4rem" : "2.25rem"}
          className={cn(
            "rounded-full bg-gray-100 object-cover dark:bg-gray-800",
            large ? "size-16" : "size-9 md:size-11",
          )}
        />
      </Link>
    </div>
  );
}
