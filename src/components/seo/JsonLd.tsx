import { siteConfig } from "@/lib/site";

/**
 * Gestructureerde data (schema.org) voor betere vindbaarheid en rich results.
 * - ProfessionalService/Organization: bedrijf, locatie (Assen), contact.
 * - WebSite: de site zelf, in het Nederlands.
 */
export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    logo: `${siteConfig.url}/icon.svg`,
    image: `${siteConfig.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    areaServed: {
      "@type": "Country",
      name: siteConfig.areaServed,
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "KvK",
      value: siteConfig.kvk,
    },
    knowsLanguage: "nl-NL",
    slogan: "Digitale toepassingen, advies en trainingen voor het publieke domein",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "nl-NL",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
