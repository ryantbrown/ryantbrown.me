import { ContentContainer, MainContainer } from "@/components/container";
import { SubscribeForm } from "@/components/subscribe";

export default function Page() {
  return (
    <MainContainer className="flex min-h-[800px] items-center">
      {/* <div className="absolute right-0 bottom-0 hidden h-full w-[40%] md:block">
        <GridSquares />
      </div> */}
      <ContentContainer className="relative z-20">
        <div className="max-w-xl">
          <h1 className="text-balance font-bold text-[2.25rem] leading-[2.5rem] tracking-tight sm:text-[3.25rem] sm:leading-[3.25rem]">
            Helping developers become startup founders
          </h1>
          <div className="mt-4 text-base/7 text-gray-600 dark:text-gray-400">
            <p className="text-balance">
              I love building products, and product builders. I co-founded a $1B
              startup and now I help other developers create companies and
              become technical founders.
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
