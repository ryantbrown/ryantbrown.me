import glob from "fast-glob";
import type { ComponentType } from "react";

export interface Article {
  slug: string;
  date: string;
  title: string;
  author: string;
  description: string;
}

type ImportedArticle = {
  article: Article;
  default: ComponentType;
};

async function getArticle(file: string) {
  const component: ImportedArticle = await import(`../app/articles/${file}`);

  return {
    ...component.article,
    slug: file.replace(/(\/page)?\.mdx$/, ""),
  };
}

export async function getArticles() {
  const files = await glob("*/page.mdx", { cwd: "./app/articles" });
  const articles = await Promise.all(files.map(getArticle));

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
