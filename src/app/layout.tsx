import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reparación de Appliances en Miami - Caraballo Appliances - ¡Llegamos hoy!",
  description: "Expertos en reparación de refrigeradores, lavadoras y secadoras en Miami, Hialeah, Doral y Kendall. Servicio el mismo día con técnicos certificados. ¡Llama ahora!",
  keywords: ["reparación de electrodomésticos miami", "reparación de appliances hialeah", "reparación de lavadoras miami", "caraballo appliances"],
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛠️</text></svg>',
  },
  openGraph: {
    title: "Caraballo Appliances - Reparación el mismo día en Miami",
    description: "Servicio rápido y garantizado para tus electrodomésticos en todo Miami-Dade.",
    url: "https://caraballoappliances.com",
    siteName: "Caraballo Appliances",
    locale: "es_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18099581139"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18099581139');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
