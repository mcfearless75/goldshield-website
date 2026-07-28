import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Accreditations } from "@/components/Accreditations";
import { ContactCards } from "@/components/ContactCards";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { about, featureBoxes } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Goldshield® antimicrobial technology — our philosophy, story, and the science behind the world's most advanced residual surface protection.",
  alternates: { canonical: "/about.html" },
  openGraph: {
    title: "About Us | Goldshield® Technology",
    description: "Learn about Goldshield® antimicrobial technology — our philosophy, story, and the science behind the world's most advanced residual surface protection.",
    url: "/about.html",
  },
};

export default function About() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about.html" }]} />

      <PageHero label="About Us">
        Goldshield<span className="text-gold">®</span> Technology
      </PageHero>

      {/* PHILOSOPHY */}
      <section className="flex flex-col gap-10 bg-cream px-6 py-16 md:px-20 lg:flex-row lg:items-start lg:gap-[clamp(40px,6vw,100px)] lg:py-20">
        <div className="relative min-h-[280px] lg:max-w-[42%] lg:flex-[0_0_42%]">
          <Image src="/img/legacy/world-map.webp" alt="" width={1920} height={842} loading="lazy" className="w-full rounded-lg opacity-35" />
          <Image
            src="/img/legacy/shapre1.webp"
            alt="Goldshield Molecule"
            width={473}
            height={290}
            loading="lazy"
            className="absolute left-1/2 top-1/2 w-[clamp(180px,22vw,340px)] -translate-x-1/2 -translate-y-1/2 animate-float"
          />
        </div>
        <div className="lg:flex-1">
          <span className="section-label">Our Philosophy</span>
          <h2 className="mb-[22px] text-[clamp(1.6rem,2.5vw,2.3rem)] font-extrabold leading-[1.2] text-ink">Trust Goldshield to Protect What Matters.</h2>
          {about.philosophy.map((p) => (
            <p key={p.slice(0, 24)} className="mb-4 text-[0.97rem] leading-[1.82] text-ink">{p}</p>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="flex flex-col gap-10 bg-white px-6 py-16 md:px-20 lg:flex-row-reverse lg:items-start lg:gap-[clamp(40px,6vw,100px)] lg:py-20">
        <div className="lg:max-w-[42%] lg:flex-[0_0_42%]">
          <Image src="/img/legacy/Gold-Shield-products.webp" alt="Goldshield Products" width={450} height={633} loading="lazy" className="mx-auto block max-h-[480px] w-auto object-contain" />
        </div>
        <div className="lg:flex-1">
          <span className="section-label">Our Story</span>
          <h2 className="mb-[22px] text-[clamp(1.6rem,2.5vw,2.3rem)] font-extrabold leading-[1.2] text-ink">How Goldshield Was Born</h2>
          {about.story.map((p) => (
            <p key={p.slice(0, 24)} className="mb-4 text-[0.97rem] leading-[1.82] text-ink">{p}</p>
          ))}
          <p className="text-[0.82rem] italic text-mist">{about.storyCaption}</p>
        </div>
      </section>

      {/* SCIENCE */}
      <section id="science" className="flex flex-col gap-10 bg-cream px-6 py-16 md:px-20 lg:flex-row lg:items-start lg:gap-[clamp(40px,6vw,100px)] lg:py-20">
        <div className="lg:max-w-[42%] lg:flex-[0_0_42%]">
          <span className="section-label">The Science</span>
          <h2 className="mb-[22px] text-[clamp(1.6rem,2.5vw,2.3rem)] font-extrabold leading-[1.2] text-ink">How Goldshield Works</h2>
          {about.science.map((p) => (
            <p key={p.slice(0, 24)} className="mb-4 text-[0.97rem] leading-[1.82] text-ink">{p}</p>
          ))}
        </div>
        <div className="flex items-center justify-center lg:flex-1">
          <Image
            src="/img/legacy/the-science-img.webp"
            alt="How Goldshield works: bonds to surfaces, charges the surface, attracts and kills germs, continues to protect"
            width={1200}
            height={842}
            loading="lazy"
            className="mx-auto block w-full max-w-[460px]"
          />
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="flex flex-col gap-10 bg-white px-6 py-16 md:px-20 lg:flex-row lg:items-start lg:gap-[clamp(40px,6vw,100px)] lg:py-20">
        <div className="lg:max-w-[42%] lg:flex-[0_0_42%]">
          <Image
            src="/img/legacy/shapre1.webp"
            alt="Goldshield Molecule"
            width={473}
            height={290}
            loading="lazy"
            className="mx-auto block w-full max-w-[380px] animate-float"
          />
        </div>
        <div className="lg:flex-1">
          <span className="section-label">The Difference</span>
          <h2 className="mb-[22px] text-[clamp(1.6rem,2.5vw,2.3rem)] font-extrabold leading-[1.2] text-ink">World-Leading Antimicrobial Protection</h2>
          <p className="mb-4 text-[0.97rem] leading-[1.82] text-ink">{about.difference}</p>
          <div className="mt-[30px] rounded-md bg-gold px-8 py-10 md:px-14">
            <p className="text-[1.05rem] leading-[1.78] text-white">{about.differenceHighlight}</p>
          </div>
        </div>
      </section>

      {/* FEATURE BOXES */}
      <section className="bg-cream px-6 py-16 md:px-20">
        <span className="section-label block text-center">Why Goldshield</span>
        <h2 className="mt-1.5 text-center text-[clamp(1.6rem,2.4vw,2.2rem)] font-extrabold text-ink">Built on Science. Trusted Worldwide.</h2>
        <div className="mt-10 grid grid-cols-1 gap-7 min-[600px]:grid-cols-2 lg:grid-cols-4">
          {featureBoxes.map((box) => (
            <div key={box.title} className="reveal border-t-4 border-gold bg-white p-7 pb-6">
              <h3 className="mb-4 text-[1.05rem] font-extrabold uppercase tracking-[0.07em] text-gold">{box.title}</h3>
              <ul className="list-none">
                {box.items.map((item) => (
                  <li key={item} className="relative border-b border-[#f0eeec] py-1 pl-4 text-[0.88rem] leading-[1.7] text-ink last:border-none">
                    <span className="absolute left-0 text-[0.8rem] text-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Accreditations withTable introText={about.approvalsIntro} />
      <ContactCards />
    </>
  );
}
