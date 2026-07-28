import { NextResponse } from "next/server";
export async function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: ${process.env.SITE_URL || "https://example.com"}/sitemap.xml
`;
  return new NextResponse(body, {
    headers: { "content-type": "text/plain" },
  });
}
