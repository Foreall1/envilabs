"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  GA_ID,
  ADS_ID,
  hasGoogleTags,
  CONSENT_KEY,
} from "@/lib/gtag";

type Consent = "granted" | "denied" | null;

/**
 * AVG-conforme toestemmingsbanner. De Google-tags (GA4 + Google Ads) worden
 * pas geladen ná expliciete toestemming. Zonder geconfigureerde tags toont
 * de banner niet.
 */
export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = window.localStorage.getItem(CONSENT_KEY) as Consent;
      if (stored === "granted" || stored === "denied") setConsent(stored);
    } catch {
      // localStorage niet beschikbaar — banner blijft tonen, niets geladen.
    }
  }, []);

  function decide(value: "granted" | "denied") {
    setConsent(value);
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // negeren
    }
  }

  // Geen tags geconfigureerd of nog niet gemount: niets renderen.
  if (!hasGoogleTags || !mounted) return null;

  const gtagSrc = `https://www.googletagmanager.com/gtag/js?id=${GA_ID ?? ADS_ID}`;

  return (
    <>
      {/* Tags alleen laden bij toestemming */}
      {consent === "granted" && (
        <>
          <Script src={gtagSrc} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${GA_ID ? `gtag('config', '${GA_ID}', { anonymize_ip: true });` : ""}
              ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
            `}
          </Script>
        </>
      )}

      {/* Banner alleen bij nog geen keuze */}
      {consent === null && (
        <div
          role="dialog"
          aria-labelledby="consent-titel"
          aria-describedby="consent-tekst"
          className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-2xl rounded-lg border border-line bg-paper p-6 shadow-card"
        >
          <h2 id="consent-titel" className="text-h3 font-display text-navy">
            Cookies voor analyse
          </h2>
          <p id="consent-tekst" className="mt-2 text-ui leading-relaxed text-slate-600">
            We gebruiken analytische cookies (Google) om te zien hoe de site
            wordt gebruikt en om onze advertenties te meten. Alleen met jouw
            toestemming. Lees meer in onze{" "}
            <Link href="/privacy" className="font-medium text-navy underline hover:text-teal">
              privacyverklaring
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => decide("granted")}
              className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-teal px-4 text-ui font-medium text-navy transition-colors hover:bg-[#00B597]"
            >
              Accepteren
            </button>
            <button
              type="button"
              onClick={() => decide("denied")}
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-line px-4 text-ui font-medium text-navy transition-colors hover:bg-slate-50"
            >
              Weigeren
            </button>
          </div>
        </div>
      )}
    </>
  );
}
