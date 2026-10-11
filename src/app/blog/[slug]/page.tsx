import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleClient } from "@/app/blog/[slug]/article-client";
import { articles, getArticle } from "@/app/blog/articles";
import { siteName, siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const title = article.title;
  const description = article.excerpt;

  return {
    title: `${title} | Blog Brand | ${siteName}`,
    description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${article.slug}`,
      siteName,
      title,
      description,
      locale: "es_NI",
      images: [{ url: `${siteUrl}${article.img}`, width: 1200, height: 900, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}${article.img}`] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticleClient article={article} />;
}
