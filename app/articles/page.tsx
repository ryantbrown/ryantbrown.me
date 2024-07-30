import { ArticleRow } from "@/components/article";
import { PageLayout } from "@/components/layout";
import { getArticles } from "@/lib/articles";
import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Practical tips guiding you from developer to founder and product builder.",
};

export default async function Page() {
  const articles = await getArticles();

  return (
    <PageLayout title="I create content about building, launching, and growing software products.">
      <div className="flex max-w-3xl flex-col space-y-20">
        {articles.map((article) => (
          <ArticleRow key={article.slug} article={article} />
        ))}
      </div>
    </PageLayout>
  );
}
