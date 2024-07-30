import { Container } from "@/components/container";
import { SubscribeForm } from "@/components/subscribe";

export const runtime = "edge";

export default function Page() {
  return (
    <Container className="mt-36 lg:mt-40">
      <div className="max-w-xl">
        <h1 className="text-balance font-bold text-[2.25rem] leading-[2.5rem] tracking-tight sm:text-[3.25rem] sm:leading-[3.25rem]">
          I help developers become superhuman{" "}
          <span className="bg-yellow-200 text-gray-950 dark:bg-yellow-300 dark:text-gray-900">
            product builders
          </span>
        </h1>
        <div className="mt-4 text-gray-600 text-sm/6 sm:text-base/7 dark:text-gray-400">
          <p className="text-balance">
            During my 15-year career as a software engineer, agency owner and
            co-founder (CTO) of a $1B startup, I've discovered what matters most
            &mdash; the product. If you're a{" "}
            <span className="text-gray-400 italic dark:text-gray-600">
              (motivated)
            </span>{" "}
            developer in {new Date().getFullYear()}, you have everything you
            need to build amazing products at your fingertips.{" "}
            <span className="font-medium text-gray-950 dark:text-gray-50">
              Start that journey
            </span>
            .
          </p>
        </div>

        <div className="mt-6 max-w-72">
          <SubscribeForm />
        </div>
      </div>
    </Container>
  );
}
