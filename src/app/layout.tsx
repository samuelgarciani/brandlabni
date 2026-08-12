import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
