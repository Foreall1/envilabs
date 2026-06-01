import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { display, sans, mono } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const defaultTitle =
  "EnviLabs — digitale toepassingen, advies en trainingen voor het publieke domein";
const defaultDescription =
  "EnviLabs ontwikkelt, adviseert en leidt op voor gemeenten, provincies, waterschappen en andere publieke organisaties in het fysieke domein.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: "%s · EnviLabs",
  },
  description: defaultDescription,
  applicationName: "EnviLabs",
  keywords: [
    "fysieke domein",
    "publieke domein",
    "Omgevingswet",
    "vergunningverlening",
    "digitale toepassingen",
    "software voor gemeenten",
    "advies publieke sector",
    "trainingen datagedreven werken",
    "DSO",
    "gemeenten provincies waterschappen",
  ],
  authors: [{ name: "EnviLabs" }],
  creator: "EnviLabs",
  publisher: "EnviLabs B.V.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: "EnviLabs",
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
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
        <JsonLd />
        <Analytics />
        <SpeedInsights />
        <CookieConsent />
      </body>
    </html>
  );
}
