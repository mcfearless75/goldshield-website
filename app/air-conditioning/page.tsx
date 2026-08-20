import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactCards } from "@/components/ContactCards";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { acServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Air Conditioning",
  description: "Goldshield-treated air conditioning — filters, coils and other removable AC components are dip-treated in Goldshield's antimicrobial solution to protect the entire airflow path.",
  alternates: { canonical: "/air-conditioning" },
  openGraph: {
    title: "Air Conditioning | Goldshield® Antimicrobial Technology",
    description: "Goldshield-treated air conditioning — filters, coils and other removable AC components are dip-treated in Goldshield's antimicrobial solution to protect the entire airflow path.",
    url: "/air-conditioning",
  },
};

export default function AirConditioning() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Air Conditioning", path: "/air-conditioning" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-cream px-6 pb-[72px] pt-16 md:px-20">
        <div className="relative h-[clamp(280px,42vw,480px)] overflow-hidden rounded-[20px] shadow-[0_20px_50px_-16px_rgba(58,58,58,0.25)]">
          <Image
            src="/img/air-conditioning-hero.webp"
            alt="Rows of air conditioning units mounted on a building's balconies"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:max-w-[640px]">
            <span className="mb-3 block text-[13px] font-semibold uppercase tracking-[0.22em] text-gold">Air Conditioning</span>
            <h1 className="text-[clamp(1.8rem,3.8vw,3.1rem)] font-extrabold leading-[1.12] text-white">
              Protecting the <span className="text-gold">Air</span> You Breathe
            </h1>
          </div>
        </div>

        <Image
          src="/img/legacy/banner-spray-bottle.webp"
          alt=""
          width={887}
          height={931}
          priority
          aria-hidden
          className="pointer-events-none absolute -right-4 top-4 z-10 hidden h-[clamp(190px,26vw,360px)] w-auto rotate-[12deg] drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)] md:right-6 lg:block lg:top-8"
        />
      </section>

      <div className="px-6 py-10 text-center md:px-20 lg:py-16">
        <span className="section-label">Air Handled, Air Protected</span>
        <h2 className="mx-auto mb-4 max-w-[700px] text-[clamp(1.5rem,2.4vw,2.2rem)] font-extrabold text-ink">
          Air handled by an AC system passes directly over filters, coils and ducting
        </h2>
        <p className="mx-auto max-w-[640px] text-[0.97rem] leading-[1.75] text-mist">
          Any of these can become a source of microbial growth. Goldshield&apos;s covalently-bonded antimicrobial technology — already proven across surfaces and packaging — is applied by fully dip-treating removable AC components before they&apos;re reinstalled, protecting the air your system moves through the space.
        </p>
      </div>

      <section className="bg-cream px-6 py-16 md:px-20">
        <span className="section-label">Services</span>
        <h2 className="mb-10 max-w-[620px] text-[clamp(1.5rem,2.2vw,2rem)] font-extrabold text-ink">How Goldshield Treats Your AC System</h2>
        <div className="grid grid-cols-1 gap-7 min-[600px]:grid-cols-2 lg:grid-cols-3">
          {acServices.map((s) => (
            <div key={s.title} className="reveal border-t-4 border-gold bg-white p-7 pb-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold">
                <Icon name={s.icon} className="h-[22px] w-[22px] stroke-white" />
              </div>
              <h3 className="mb-2.5 text-[1.02rem] font-extrabold text-ink">{s.title}</h3>
              <p className="text-[0.9rem] leading-[1.72] text-mist">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gold px-6 py-14 text-center md:px-20">
        <h2 className="mb-4 text-[clamp(1.4rem,2.4vw,2rem)] font-extrabold text-white">Ready to protect your airflow?</h2>
        <p className="mx-auto mb-7 max-w-[560px] text-[0.97rem] leading-[1.7] text-white/90">
          Talk to our team about Goldshield-treated air conditioning for your building.
        </p>
        <Link href="/contact" className="btn-white">Contact Goldshield</Link>
      </section>

      <ContactCards />
    </>
  );
}
