import { site } from "@/lib/site";

const origin = process.env.NEXT_PUBLIC_SITE_URL || `https://${site.domain}`;

export function OrganizationJsonLd() {
  const { address, email, phone } = site.contact;
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: `${origin}/`,
    logo: `${origin}/img/legacy/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.line1}, ${address.line2}`,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postcode,
      addressCountry: "GB",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "customer service",
      email,
    },
  };
  // eslint-disable-next-line react/no-danger
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${origin}${item.path}`,
    })),
  };
  // eslint-disable-next-line react/no-danger
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export function ProductsJsonLd() {
  const products = [
    { name: "Goldshield 24 Hour Hand Sanitiser & Protectant", category: "Hand Sanitiser", description: "Alcohol-free, water-based hand sanitiser that kills 99.99% of disease-causing germs and bacteria for up to 24 hours from a single application.", path: "/products.html#hands", image: "/img/legacy/Hand-Sanitiser-500ml-Pump-Action-Foamer.png" },
    { name: "Goldshield 14-Day Surface Disinfectant & Protector", category: "Surface Disinfectant", description: "Water-based surface disinfectant that bonds to surfaces at a molecular level, providing up to 14 days of protection per application.", path: "/products.html#surfaces", image: "/img/legacy/Surface-Protector-750ml-Trigger-Spray.png" },
    { name: "Goldshield Laundry Protector", category: "Laundry Protector", description: "Water-based laundry protector that bonds to fabric fibres, giving wash-to-wash protection against odour, staining and mildew.", path: "/products.html#laundry", image: "/img/legacy/Laundry-Protector-1L-Bottle.png" },
    { name: "Goldshield FFP3 Antiviral Medical Mask (G036S)", category: "Protective Mask", description: "FFP3-rated face mask with built-in antimicrobial treatment for superior protection against airborne pathogens.", path: "/products.html#masks", image: "/img/legacy/mask-outer.png" },
  ];
  const json = {
    "@context": "https://schema.org",
    "@graph": products.map((p) => ({
      "@type": "Product",
      name: p.name,
      brand: { "@type": "Brand", name: site.name },
      category: p.category,
      description: p.description,
      image: `${origin}${p.image}`,
      url: `${origin}${p.path}`,
    })),
  };
  // eslint-disable-next-line react/no-danger
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
