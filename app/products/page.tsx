import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductGrid";
import { ContactCards } from "@/components/ContactCards";
import { BreadcrumbJsonLd, ProductsJsonLd } from "@/components/JsonLd";
import { productCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse the full Goldshield® product range — 24 Hour Hand Sanitiser, Surface Disinfectant, Laundry Protector and FFP3 Masks.",
  alternates: { canonical: "/products.html" },
  openGraph: {
    title: "Products | Disinfectant, Protectors and Sanitisers | Goldshield®",
    description: "Browse the full Goldshield® product range — 24 Hour Hand Sanitiser, Surface Disinfectant, Laundry Protector and FFP3 Masks.",
    url: "/products.html",
  },
};

export default function Products() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products.html" }]} />
      <ProductsJsonLd />

      <PageHero label="Products">
        Goldshield<span className="text-gold">®</span> Technology
      </PageHero>

      {productCategories.map((cat, i) => (
        <section key={cat.id} id={cat.id} className={`border-b border-[#f0eeec] px-6 py-14 md:px-20 md:py-[72px] ${i % 2 === 0 ? "bg-white" : "bg-cream"}`}>
          <span className="section-label">{cat.slug}</span>
          <h2 className="mb-2 text-[clamp(1.5rem,2.4vw,2.1rem)] font-extrabold text-ink">{cat.title}</h2>
          <p className="mb-10 max-w-[640px] text-[0.95rem] leading-[1.7] text-mist">{cat.desc}</p>
          <ProductGrid items={cat.items} cols={cat.cols} href="/contact" linkLabel="Enquire" />
        </section>
      ))}

      <section className="bg-gold px-6 py-14 text-center md:px-20">
        <h2 className="mb-4 text-[clamp(1.4rem,2.4vw,2rem)] font-extrabold text-white">Need help choosing the right product?</h2>
        <p className="mx-auto mb-7 max-w-[560px] text-[0.97rem] leading-[1.7] text-white/90">
          Our team is on hand to advise on the best Goldshield solution for your sector, application volume and surface type.
        </p>
        <Link href="/contact" className="btn-white">Get in Touch</Link>
      </section>

      <ContactCards />
    </>
  );
}
