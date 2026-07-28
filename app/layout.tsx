import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const origin = process.env.NEXT_PUBLIC_SITE_URL || `https://${site.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: "Goldshield | High Level Disinfectant And Surface Protector",
    template: "%s | Goldshield® Technology",
  },
  description: site.tagline,
  keywords: [
    "Goldshield",
    "antimicrobial technology",
    "surface disinfectant",
    "hand sanitiser",
    "laundry protector",
    "FFP3 mask",
    "residual protection",
    "EPA registered disinfectant",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Goldshield",
    locale: "en_GB",
    title: "Goldshield | High Level Disinfectant And Surface Protector",
    description: site.tagline,
    url: origin,
    images: [{ url: "/img/og-image.jpg", width: 1200, height: 630, alt: "Goldshield antimicrobial technology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goldshield | High Level Disinfectant And Surface Protector",
    description: "Patented, water-stabilised antimicrobial technology that protects surfaces, hands, laundry and masks between uses.",
    images: ["/img/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/img/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/img/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#daab28",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <OrganizationJsonLd />
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <ScrollReveal />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
