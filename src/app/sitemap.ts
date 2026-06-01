import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  // Vaste datum; werk bij bij grote inhoudswijzigingen.
  const lastModified = new Date("2026-06-01");

  // Belangrijke pagina's (hoge prioriteit) en juridische pagina's (lager).
  const primary = ["", "/toepassingen", "/trainingen", "/over-ons", "/contact"];
  const secondary = ["/privacy", "/verwerkersovereenkomst", "/toegankelijkheid"];

  return [
    ...primary.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...secondary.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
