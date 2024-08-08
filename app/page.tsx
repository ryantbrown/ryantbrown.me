import { ContentContainer, MainContainer } from "@/components/container";
import { GridSquares } from "@/components/squares";
import { SubscribeForm } from "@/components/subscribe";
import { linkedinUrl } from "@/lib/socials";
import Link from "next/link";

export default function Page() {
  return (
    <MainContainer className="flex min-h-[800px] items-center">
      <div className="absolute right-0 bottom-0 block h-full w-[40%] md:hidden">
        <GridSquares />
      </div>
      <ContentContainer className="relative z-20">
        <div className="max-w-xl">
          <h1 className="text-balance font-bold text-[2.25rem] leading-[2.5rem] tracking-tight sm:text-[3.25rem] sm:leading-[3.25rem]">
            I help software developers become{" "}
            <span className="bg-lime-200 text-gray-950 dark:bg-lime-300 dark:text-gray-900">
              product founders
            </span>
          </h1>
          <div className="mt-4 text-base/7 text-gray-600 dark:text-gray-400">
            <p className="text-balance">
              During my{" "}
              <Link href={linkedinUrl} target="_blank" className="font-medium">
                career
              </Link>{" "}
              as a software engineer, CTO, and co-founder of a $1B startup, I've
              discovered what matters most &mdash; the product. If you're a
              motivated developer in {new Date().getFullYear()}, you have
              everything needed to build a successful software company at your
              fingertips. Start that journey.
            </p>
          </div>

          <div className="mt-6 max-w-72">
            <SubscribeForm />
          </div>
        </div>
      </ContentContainer>
    </MainContainer>
  );
}
