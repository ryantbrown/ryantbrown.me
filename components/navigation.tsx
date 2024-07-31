"use client";

import { navigation } from "@/lib/navigation";
import { cn } from "@/lib/style";
import {
  Content as DialogContent,
  Overlay as DialogOverlay,
  Portal as DialogPortal,
  Root as DialogRoot,
  DialogTitle,
  Trigger as DialogTrigger,
} from "@radix-ui/react-dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";

export function DesktopNavigation(props: ComponentPropsWithoutRef<"nav">) {
  const path = usePathname();

  return (
    <nav {...props}>
      <ul className="flex px-3 font-medium text-sm">
        {navigation.map(({ href, name, target }) => (
          <li key={name}>
            <Link
              href={href}
              target={target}
              className={cn(
                "relative block px-3 py-2 transition",
                (href === "/" && path === "/") ||
                  (href !== "/" && path.includes(href))
                  ? "text-gray-950 dark:text-white"
                  : "text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200",
              )}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function MobileNavigation(props: ComponentPropsWithoutRef<"div">) {
  const path = usePathname();

  return (
    <div {...props}>
      <DialogRoot>
        <DialogTrigger className="font-medium text-gray-950 text-sm dark:text-white">
          Menu
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 z-50 bg-gray-800/40 backdrop-blur-sm dark:bg-black/80" />
          <DialogContent className="fixed inset-x-4 top-8 z-50 origin-top rounded-2xl bg-white p-8 ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800">
            <DialogTitle className="hidden" aria-hidden>
              Menu
            </DialogTitle>
            <nav>
              <ul className="text-base">
                {navigation.map(({ href, name, target }) => (
                  <li
                    key={name}
                    className={cn(
                      (href === "/" && path === "/") ||
                        (href !== "/" && path.includes(href))
                        ? "font-medium text-gray-950 dark:text-white"
                        : "font-normal text-gray-800 dark:text-gray-300",
                    )}
                  >
                    <Link href={href} target={target} className="block py-2">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </DialogContent>
        </DialogPortal>
      </DialogRoot>
    </div>
  );
}
