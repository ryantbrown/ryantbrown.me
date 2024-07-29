import { Container } from "@/components/container";
import { SubscribeForm } from "@/forms/subscribe";

export default function Page() {
  return (
    <Container className="mt-40">
      <div className="max-w-xl">
        <h1 className="text-balance font-bold text-[2.5rem] leading-[2.75rem] tracking-tight sm:text-[3.25rem] sm:leading-[3.25rem]">
          I help developers become superhuman{" "}
          <span className="bg-yellow-100">product builders</span>.
        </h1>
        <div className="mt-4 text-gray-600 text-sm/6 sm:text-base/7 dark:text-gray-400">
          <p className="text-balance">
            Throug my 15-year career as a software engineer, agency owner and
            co-founder (CTO) of a $1B startup, I've discovered what matters most
            &mdash; the product. If you're a motivated developer in{" "}
            {new Date().getFullYear()}, you have everything you need to build
            amazing products at your fingertips. Start that journey.
          </p>
        </div>

        <div className="mt-6 max-w-72">
          <SubscribeForm />
        </div>
      </div>
    </Container>
  );
}
