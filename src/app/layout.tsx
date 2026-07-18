import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: "Samuel García — Brand Strategist | Brand Lab by Samu",
  description:
    "Ayudo a empresas y emprendedores a construir marcas con significado, claridad y dirección estratégica. Branding con significado — We don't sell, we mean!",
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
