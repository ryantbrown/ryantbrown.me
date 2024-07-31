import type { Article } from "@/lib/articles";
import { formatDate } from "@/lib/date";
import type { ReactNode } from "react";
import { ContentContainer } from "./container";

export function PageLayout({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <ContentContainer className="mt-20 md:mt-32">
      <div className="max-w-2xl">
        <h1 className="text-balance font-bold text-4xl text-gray-800 tracking-tight sm:text-5xl dark:text-gray-100">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-balance text-base text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </ContentContainer>
  );
}

export function ArticleLayout({
  article,
  children,
}: {
  article: Article;
  children: ReactNode;
}) {
  return (
    <ContentContainer className="mt-12 md:mt-16">
      <div className="mx-auto max-w-2xl">
        <article>
          <header className="flex flex-col">
            <h1 className="mt-6 font-bold text-4xl text-gray-800 tracking-tight sm:text-5xl dark:text-gray-100">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="order-first flex items-center text-base text-gray-400 dark:text-gray-500"
            >
              <span className="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500" />
              <span className="ml-3">{formatDate(article.date)}</span>
            </time>
          </header>
          <div className="prose dark:prose-invert mt-8" data-mdx-content>
            {children}
          </div>
        </article>
      </div>
    </ContentContainer>
  );
}
