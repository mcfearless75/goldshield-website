/**
 * Static-export config so the site can be served from GitHub Pages
 * (and any static host / CDN).
 *
 * PAGES_BASE_PATH is injected by the deploy workflow:
 *   - project page  → "/goldshield-website"
 *   - custom domain → "" (when public/CNAME is present)
 */
const basePath = process.env.PAGES_BASE_PATH || "";

const siteUrl = basePath
  ? `https://mcfearless75.github.io${basePath}`
  : "https://goldshieldtech.co.uk";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
