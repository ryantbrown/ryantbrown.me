import { ContentContainer } from "@/components/container";
import { SubscribeForm } from "@/components/subscribe";

export default function Page() {
  return (
    <ContentContainer className="mt-32 md:mt-48">
      <div className="max-w-xl">
        <h1 className="text-balance font-bold text-[2.25rem] leading-[2.5rem] tracking-tight sm:text-[3.25rem] sm:leading-[3.25rem]">
          I help developers become superhuman{" "}
          <span className="bg-yellow-200 text-gray-950 dark:bg-yellow-300 dark:text-gray-900">
            product builders
          </span>
        </h1>
        <div className="mt-4 text-gray-600 text-sm/6 sm:text-base/7 dark:text-gray-400">
          <p className="text-balance">
            During my decades-long career as a software engineer, CTO, and
            co-founder of a $1B startup, I've discovered what matters most
            &mdash; the product. If you're a motivated developer in{" "}
            {new Date().getFullYear()}, you have everything needed to build a
            successful software company at your fingertips. Start that journey.
          </p>
        </div>

        <div className="mt-6 max-w-72">
          <SubscribeForm />
        </div>
      </div>
    </ContentContainer>
  );
}
