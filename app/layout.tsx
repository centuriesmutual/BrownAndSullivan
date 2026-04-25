import type { Metadata } from "next";
import { Cormorant_Garamond, Archivo_Black, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { UtilityBar } from "@/components/layout/utility-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SearchShortcut } from "@/components/layout/search-shortcut";
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

const body = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
  title: "Brown & Sullivan — Compliance Directory for Regulated Distribution",
  description:
    "A compliance-grade directory of artifacts, agents, carriers, and regulatory frameworks for Medicare, ACA, and TCPA-governed distribution. Counsel for the regulated.",
  metadataBase: new URL("https://brownandsullivan.example"),
  openGraph: {
    title: "Brown & Sullivan",
    description:
      "Compliance counsel and the directory of record for regulated distribution.",
    type: "website",
  },
  robots: { index: true, follow: true },
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
      <body className="font-body bg-paper text-ink antialiased">
        <UtilityBar />
        <Header />
        <main className="animate-paper-fade">{children}</main>
        <Footer />
        <SearchShortcut />
      </body>
    </html>
  );
}
