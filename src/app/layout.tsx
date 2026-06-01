import type { Metadata } from "next";
import { display, sans, mono } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const siteUrl = "https://www.envilabs.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EnviLabs — digitale toepassingen en trainingen voor het fysieke domein",
    template: "%s · EnviLabs",
  },
  description:
    "EnviLabs bouwt digitale toepassingen op maat voor het fysieke domein en verzorgt trainingen en opleiding voor de teams die ermee werken.",
  keywords: [
    "fysieke domein",
    "leefomgeving",
    "digitale toepassingen",
    "software op maat",
    "trainingen",
    "opleiding",
    "Omgevingswet",
  ],
  authors: [{ name: "EnviLabs" }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: "EnviLabs",
    title: "EnviLabs — digitale toepassingen en trainingen voor het fysieke domein",
    description:
      "Software op maat voor het fysieke domein, plus trainingen en opleiding voor de teams die ermee werken.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EnviLabs — digitale toepassingen en trainingen voor het fysieke domein",
    description:
      "Software op maat en trainingen voor het fysieke domein.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a
          href="#hoofdinhoud"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-paper"
        >
          Direct naar de hoofdinhoud
        </a>
        <Header />
        <main id="hoofdinhoud">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
