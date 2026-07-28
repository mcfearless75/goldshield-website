import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const origin = process.env.NEXT_PUBLIC_SITE_URL || `https://${site.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1.0 },
    { path: "/about.html", priority: 0.8 },
    { path: "/products.html", priority: 0.9 },
    { path: "/markets.html", priority: 0.7 },
    { path: "/contact.html", priority: 0.6 },
  ];

  return pages.map((p) => ({
    url: `${origin}${p.path}`,
    priority: p.priority,
  }));
}
