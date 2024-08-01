import { ArticleRow } from "@/components/article";
import { PageLayout } from "@/components/layout";
import { getArticles } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Practical tips guiding you from developer to founder and product builder.",
};

export default async function Page() {
  const articles = await getArticles();

  return (
    <PageLayout
      title="I write about code, design, and building products."
      description="My goal is to help developers become successful founders by building amazing products. I share advice, interviews, code and anything else that might be helpful."
    >
      <div className="md:border-gray-100 md:border-l md:pl-6 md:dark:border-gray-700/40">
        <div className="flex max-w-3xl flex-col space-y-20">
          {articles.map((article) => (
            <ArticleRow key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
