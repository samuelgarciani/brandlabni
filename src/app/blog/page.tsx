import type { Metadata } from "next";
import { BlogClient } from "@/app/blog/blog-client";
import { siteName, siteUrl } from "@/lib/site";

const title = "Blog Brand — Historias que enseñan a construir marca";
const description =
  "Artículos de marca, vivencias reales y educación para construir marcas con propósito y humanas. Pensamiento estratégico aplicado a casos reales del mercado.";

export const metadata: Metadata = {
  title: `${title} | ${siteName}`,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    siteName,
    title,
    description,
    locale: "es_NI",
    images: [{ url: `${siteUrl}/brand/blog-hero.png`, width: 1200, height: 630, alt: "Blog Brand — Brand Lab by Samu" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <BlogClient />;
}
