import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

// Onest ships as a variable font: one file covers 300–900 instead of the seven
// static weights the old <link> pulled from Google. next/font self-hosts it and
// generates a size-adjusted fallback, so the first paint is already on the
// right metrics and the swap does not reflow the page.
const onest = Onest({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-onest",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Samuel García — Brand Strategist | Brand Lab by Samu",
  description:
    "Ayudo a empresas y emprendedores a construir marcas con significado, claridad y dirección estratégica. Branding con significado — We don't sell, we mean!",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={onest.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
