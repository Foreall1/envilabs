/**
 * Centrale siteconfiguratie — bron van waarheid voor SEO-metadata,
 * gestructureerde data (JSON-LD) en contactgegevens.
 */
export const siteConfig = {
  name: "EnviLabs",
  legalName: "EnviLabs B.V.",
  url: "https://envilabs.dev",
  locale: "nl_NL",
  description:
    "EnviLabs ontwikkelt, adviseert en leidt op voor gemeenten, provincies, waterschappen en andere publieke organisaties in het fysieke domein.",
  email: "hallo@envilabs.dev",
  kvk: "82922306",
  address: {
    street: "Zwedenlaan 12",
    postalCode: "9403 DE",
    city: "Assen",
    country: "NL",
  },
  areaServed: "Nederland",
} as const;
