import Link from "next/link";

import { socials } from "@/lib/socials";
import { InnerContainer, OuterContainer } from "./container";
import { ThemeToggle } from "./theme";

export function Footer() {
  return (
    <footer className="mt-32 h-auto flex-none lg:h-36">
      <OuterContainer>
        <div className="border-gray-100 border-t pt-10 pb-16 dark:border-gray-700/40">
          <InnerContainer>
            <div className="flex flex-col items-center justify-start gap-6 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-8">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    className="text-gray-800 hover:text-gray-950 dark:text-gray-200 dark:hover:text-white"
                  >
                    <social.icon className="size-5" />
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-400 text-sm dark:text-gray-500">
                  &copy; {new Date().getFullYear()} Ryan T. Brown.
                </p>

                <ThemeToggle />
              </div>
            </div>
          </InnerContainer>
        </div>
      </OuterContainer>
    </footer>
  );
}
