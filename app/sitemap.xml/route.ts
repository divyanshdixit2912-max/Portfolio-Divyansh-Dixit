import { NextResponse } from "next/server";
import portfolioData from "@/data/portfolioData";

export async function GET() {
  const baseUrl = process.env.SITE_URL || portfolioData.siteMetadata.url || "https://example.com";
  const staticPages = ["", "about", "projects"];
  const urls = staticPages.map((p) => `${baseUrl}/${p}`);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `<url>
        <loc>${url}</loc>
        <changefreq>monthly</changefreq>
      </url>`
      )
      .join("\n")}
  </urlset>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
