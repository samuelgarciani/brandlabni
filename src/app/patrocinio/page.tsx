import type { Metadata } from "next";
import { PatrocinioClient } from "@/app/patrocinio/patrocinio-client";
import { siteName, siteUrl } from "@/lib/site";

const title = "Patrocinio — Brand Lab Live 2026";
const description =
  "Sé parte de las marcas que crean significado. Niveles de patrocinio para Brand Lab Live 2026 con visibilidad antes, durante y después del evento.";

export const metadata: Metadata = {
  title: `${title} | ${siteName}`,
  description,
  alternates: { canonical: "/patrocinio" },
  openGraph: {
    type: "website",
    url: "/patrocinio",
    siteName,
    title,
    description,
    locale: "es_NI",
    images: [{ url: `${siteUrl}/brand/patrocinio-hero.png`, width: 1200, height: 630, alt: "Patrocinio — Brand Lab Live 2026" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <PatrocinioClient />;
}
