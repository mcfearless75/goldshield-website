import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { MarketsGrid } from "@/components/MarketsGrid";
import { ContactCards } from "@/components/ContactCards";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { markets } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Markets",
  description: "Goldshield® antimicrobial protection serves 20+ industry sectors — from healthcare and hospitality to schools, sports, retail, agriculture and more.",
  alternates: { canonical: "/markets.html" },
  openGraph: {
    title: "Our Markets | Sanitisers and Surface Protectors | Goldshield®",
    description: "Goldshield® antimicrobial protection serves 20+ industry sectors — from healthcare and hospitality to schools, sports, retail, agriculture and more.",
    url: "/markets.html",
  },
};

export default function Markets() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Markets", path: "/markets.html" }]} />

      <PageHero label="Markets">
        Goldshield<span className="text-gold">®</span> Technology
      </PageHero>

      <div className="px-6 py-10 text-center md:px-20 lg:py-16">
        <span className="section-label">Industries We Serve</span>
        <h2 className="mx-auto mb-4 max-w-[700px] text-[clamp(1.5rem,2.4vw,2.2rem)] font-extrabold text-ink">
          Goldshield is used across a wide range of industry sectors
        </h2>
        <p className="mx-auto max-w-[620px] text-[0.97rem] leading-[1.75] text-mist">
          Goldshield can cover just about anything. Below is a quick guide to the industries and many uses within each of them — this does not cover all potential uses.
        </p>
      </div>

      <section aria-label="Industry sectors">
        <MarketsGrid />
      </section>

      <section className="bg-cream px-6 py-16 md:px-20">
        <span className="section-label">All Sectors</span>
        <h2 className="mb-2.5 text-[clamp(1.5rem,2.2vw,2rem)] font-extrabold text-ink">Industries We Serve</h2>
        <p className="mb-[46px] max-w-[620px] text-[0.97rem] leading-[1.7] text-mist">
          Goldshield&apos;s patented antimicrobial technology is approved and trusted across a wide range of commercial, industrial, and domestic settings.
        </p>
        <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {markets.map((m) => (
            <div key={m.id} id={m.id} className="scroll-mt-[110px] border-l-[3px] border-gold bg-white p-6">
              <h3 className="mb-2 text-[0.95rem] font-bold uppercase tracking-[0.05em] text-ink">{m.name}</h3>
              <p className="text-[0.82rem] leading-[1.65] text-mist">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gold px-6 py-14 text-center md:px-20">
        <h2 className="mb-4 text-[clamp(1.4rem,2.4vw,2rem)] font-extrabold text-white">Protecting your sector starts here</h2>
        <p className="mx-auto mb-7 max-w-[560px] text-[0.97rem] leading-[1.7] text-white/90">
          Talk to our team about the right Goldshield product for your industry, volume and application requirements.
        </p>
        <Link href="/contact" className="btn-white">Get in Touch</Link>
      </section>

      <ContactCards />
    </>
  );
}
