import type { Metadata, Viewport } from "next";
import { SiteJsonLd } from "@/components/seo/site-json-ld";
import { getSiteUrl } from "@/lib/site";
import {
  Cormorant_Garamond,
  Archivo_Black,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import { UtilityBar } from "@/components/layout/utility-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SearchShortcut } from "@/components/layout/search-shortcut";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const block = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-block",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brown & Sullivan — Medicare & ACA Compliance Infrastructure",
  description:
    "Counsel and compliance for Medicare, ACA, and TCPA-governed health insurance distribution.",
  metadataBase: new URL(getSiteUrl()),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Brown & Sullivan",
    description:
      "Counsel and compliance for regulated health insurance distribution.",
    type: "website",
    locale: "en_US",
    siteName: "Brown & Sullivan",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brown & Sullivan",
    description:
      "Counsel and compliance for regulated health insurance distribution.",
  },
  robots: { index: true, follow: true },
  other: { "msapplication-TileColor": "#ffffff" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${block.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="font-body min-w-0 [touch-action:manipulation] bg-paper text-ink antialiased pb-[env(safe-area-inset-bottom,0px)]">
        <SiteJsonLd />
        <UtilityBar />
        <Header />
        <main className="min-w-0 animate-paper-fade">{children}</main>
        <Footer />
        <SearchShortcut />
        <Analytics />
      </body>
    </html>
  );
}
