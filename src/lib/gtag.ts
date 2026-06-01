/**
 * Google-tags (GA4 + Google Ads) via env-variabelen.
 * Niets wordt geladen zonder ID's én toestemming (zie CookieConsent).
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
export const ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

/** Zijn er Google-tags geconfigureerd? Zo niet, dan geen banner en geen tracking. */
export const hasGoogleTags = Boolean(GA_ID || ADS_ID);

export const CONSENT_KEY = "envilabs-consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Registreer een lead-conversie (contactformulier verstuurd) in GA4 en Google Ads.
 * Doet niets als er geen toestemming/tags zijn — dan bestaat window.gtag niet.
 */
export function trackContactConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "generate_lead", { method: "contactformulier" });

  if (ADS_ID && ADS_CONVERSION_LABEL) {
    window.gtag("event", "conversion", {
      send_to: `${ADS_ID}/${ADS_CONVERSION_LABEL}`,
    });
  }
}
