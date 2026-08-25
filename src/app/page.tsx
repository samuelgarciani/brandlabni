import type { Metadata } from "next";
import { HomeClient } from "@/app/home-client";
import { siteName, siteUrl } from "@/lib/site";

const description =
  "Ayudo a empresas y emprendedores a construir marcas con significado, claridad y dirección estratégica. Branding con significado — We don't sell, we mean!";

export const metadata: Metadata = {
  title: "Samuel García — Brand Strategist | Brand Lab by Samu",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: "Samuel García — Brand Strategist | Brand Lab by Samu",
    description,
    locale: "es_NI",
    images: [{ url: `${siteUrl}/brand/hero/hero-bg.jpg`, width: 1920, height: 1080, alt: "Samuel García, estratega de marca" }],
  },
  twitter: { card: "summary_large_image", title: "Samuel García — Brand Strategist", description },
};

export default function Page() {
  return <HomeClient />;
}
