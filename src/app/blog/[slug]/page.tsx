import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleClient } from "@/app/blog/[slug]/article-client";
import { articles, getArticle, plainText } from "@/app/blog/articles";
import { siteName, siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const title = article.title;
  const description = plainText(article.excerpt);

  return {
    title: `${title} | Blog Brand | ${siteName}`,
    description,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${article.slug}`,
      siteName,
      title,
      description,
      locale: "es_NI",
      publishedTime: article.dateISO,
      authors: ["Samuel García"],
      tags: article.keywords,
      images: [{ url: `${siteUrl}${article.img}`, width: 1200, height: 900, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}${article.img}`] },
  };
}

function articleJsonLd(article: ReturnType<typeof getArticle>) {
  if (!article) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: plainText(article.excerpt),
    image: `${siteUrl}${article.img}`,
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    keywords: article.keywords.join(", "),
    articleSection: article.cat,
    inLanguage: "es",
    url: `${siteUrl}/blog/${article.slug}`,
    mainEntityOfPage: `${siteUrl}/blog/${article.slug}`,
    author: {
      "@type": "Person",
      name: "Samuel García",
      url: `${siteUrl}/`,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/brand/isotipo-navy.png` },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article)) }}
      />
      <ArticleClient article={article} />
    </>
  );
}
