import type { Metadata } from "next";
import { EventosClient } from "@/app/eventos/eventos-client";
import { siteName, siteUrl } from "@/lib/site";

const title = "Brand Lab Live 2026 — Las marcas no venden, significan";
const description =
  "Conferencia de branding estratégico. 19 de septiembre de 2026, 9:00 a 11:30 a.m., DoubleTree by Hilton Managua. Conferencia, panel de discusión, coffee break y networking.";

export const metadata: Metadata = {
  title: `${title} | ${siteName}`,
  description,
  alternates: { canonical: "/eventos" },
  openGraph: {
    type: "website",
    url: "/eventos",
    siteName,
    title,
    description,
    locale: "es_NI",
    images: [{ url: `${siteUrl}/brand/evento-banner-v3.png`, width: 1200, height: 630, alt: "Brand Lab Live 2026 — Las marcas no venden, significan" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <EventosClient />;
}
