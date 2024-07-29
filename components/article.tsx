import type { Article } from "@/lib/articles";
import { formatDate } from "@/lib/date";
import Link from "next/link";
import { Eyebrow } from "./eyebrow";
import { ChevronRightIcon } from "./icons";

export function ArticleRow({ article }: { article: Article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <div className="group relative flex flex-col items-start md:col-span-3">
        <h2 className="font-semibold text-gray-800 text-lg tracking-tight dark:text-gray-100">
          <div className="-inset-x-4 -inset-y-6 sm:-inset-x-6 absolute z-0 scale-95 bg-gray-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:rounded-2xl dark:bg-gray-800/50" />
          <Link href={`/articles/${article.slug}`}>
            <span className="-inset-x-4 -inset-y-6 sm:-inset-x-6 absolute z-20 sm:rounded-2xl" />
            <span className="relative z-10">{article.title}</span>
          </Link>
        </h2>
        <Eyebrow className="mb-4">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </Eyebrow>
        <p className="relative z-10 mt-4 text-gray-600 text-sm/7 dark:text-gray-400">
          {article.description}
        </p>
        <div
          aria-hidden="true"
          className="relative z-10 mt-6 flex items-center font-medium text-sm text-teal-500"
        >
          Read article
          <ChevronRightIcon className="ml-1 size-4 stroke-current" />
        </div>
      </div>
    </article>
  );
}
