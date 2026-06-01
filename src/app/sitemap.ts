import type { MetadataRoute } from "next";

const baseUrl = "https://www.envilabs.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/toepassingen", "/trainingen", "/over-ons", "/contact"];
  // Vaste datum; werk bij bij grote inhoudswijzigingen.
  const lastModified = new Date("2026-05-29");

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
