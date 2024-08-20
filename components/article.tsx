import type { Article } from "@/lib/articles";
import { formatDate } from "@/lib/date";
import Link from "next/link";

export function ArticleRow({ article }: { article: Article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <div className="group relative flex flex-col items-start md:col-span-3">
        <h2 className="font-semibold text-gray-900 text-lg tracking-tight dark:text-gray-100">
          <div className="-inset-x-4 -inset-y-6 sm:-inset-x-6 absolute z-0 scale-95 bg-gray-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:rounded-2xl dark:bg-gray-800/50" />
          <Link href={`/articles/${article.slug}`}>
            <span className="-inset-x-4 -inset-y-6 sm:-inset-x-6 absolute z-20 sm:rounded-2xl" />
            <span className="relative z-10">{article.title}</span>
          </Link>
        </h2>
        <time
          className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-gray-400 text-sm md:hidden dark:text-gray-500"
          dateTime={article.date}
        >
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span className="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500" />
          </span>
          {formatDate(article.date)}
        </time>
        <p className="relative z-10 mt-2 text-gray-600 text-sm/6 dark:text-gray-400">
          {article.description}
        </p>
        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center font-medium text-lime-500 text-sm"
        >
          Read
        </div>
      </div>
      <time
        className="relative z-10 order-first mt-1 mb-3 hidden items-center text-gray-400 text-sm md:block dark:text-gray-500"
        dateTime={article.date}
      >
        {formatDate(article.date)}
      </time>
    </article>
  );
}
