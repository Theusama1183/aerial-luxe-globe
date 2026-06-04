import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { CITIES } from "@/data/cities";

const BASE_URL = "https://aerial-luxe-globe.lovable.app";

const STATIC_PATHS = [
  "/",
  "/services",
  "/services/website-redesign",
  "/services/seo-geo-aio",
  "/services/lead-generation",
  "/services/ppc-ads",
  "/industries",
  "/industries/3pl-warehousing",
  "/industries/freight-brokers",
  "/industries/trucking-fleets",
  "/industries/freight-forwarders",
  "/tech-integrations",
  "/case-studies",
  "/blog",
  "/contact",
  "/locations",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = [
          ...STATIC_PATHS.map((p) => `${BASE_URL}${p}`),
          ...CITIES.map((c) => `${BASE_URL}/locations/${c.slug}`),
        ];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc><changefreq>weekly</changefreq></url>`).join("\n")}
</urlset>`;
        return new Response(body, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
