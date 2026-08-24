import Image from "next/image";
import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { TrustStrip } from "@/components/TrustStrip";
import { Accreditations } from "@/components/Accreditations";
import { ProductTabs } from "@/components/ProductTabs";
import { MarketsGrid } from "@/components/MarketsGrid";
import { ContactCards } from "@/components/ContactCards";
import { Icon } from "@/components/Icon";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-cream">
        <div className="relative">
          <HeroSlider />

          <Image
            src="/img/legacy/banner-spray-bottle.webp"
            alt=""
            width={887}
            height={931}
            priority
            className="pointer-events-none absolute left-6 top-0 z-10 hidden h-[clamp(200px,55vw,400px)] w-auto lg:left-20 lg:block lg:h-[clamp(280px,46vw,740px)]"
          />
          <Image
            src="/img/legacy/bubbles-up.webp"
            alt=""
            width={190}
            height={437}
            loading="lazy"
            className="pointer-events-none absolute z-[5] hidden w-[clamp(60px,8vw,120px)] opacity-55 lg:block lg:bottom-[clamp(150px,18vw,360px)] lg:right-[clamp(200px,38%,750px)]"
          />

          <div className="relative mx-6 -mt-4 rounded-2xl bg-white p-7 pb-6 shadow-[0_20px_50px_-16px_rgba(58,58,58,0.18)] md:mx-20 lg:absolute lg:right-0 lg:top-[clamp(180px,27vw,450px)] lg:mx-0 lg:mt-0 lg:w-[clamp(320px,52%,800px)] lg:p-[clamp(28px,4vw,62px)] lg:pb-[clamp(24px,3.5vw,52px)]">
            <h1 className="mb-4 text-[clamp(1.5rem,2.9vw,2.75rem)] font-extrabold leading-[1.2] text-gold">
              The Simple Way to Protect What Matters
            </h1>
            <p className="text-[clamp(0.9rem,1.05vw,1rem)] leading-[1.75] text-ink">
              The world&apos;s first antimicrobial products that fully harness the power of water and are revolutionising long-lasting protection – without all the harsh chemicals.
            </p>
          </div>
        </div>

        <TrustStrip />

        {/* TECHNOLOGY */}
        <div className="flex flex-col gap-10 px-6 py-10 md:px-20 lg:flex-row lg:items-start lg:gap-[60px] lg:py-20">
          <div className="relative min-h-[240px] lg:max-w-[38%] lg:flex-[0_0_38%]">
            <span className="section-label">Our Technology</span>
            <h2 className="text-[clamp(1.6rem,2.6vw,2.4rem)] font-extrabold leading-[1.15] text-ink">Goldshield® Technology</h2>
            <Image
              src="/img/legacy/shapre1.webp"
              alt="Goldshield molecule"
              width={473}
              height={290}
              loading="lazy"
              className="mt-5 block w-[clamp(240px,32vw,480px)] animate-float"
            />
          </div>
          <div className="pt-2 lg:flex-1">
            <p className="mb-5 leading-[1.8] text-ink">
              Goldshield® uses a technology that not only cleans and disinfects any surface but also protects it from microbes that land on the treated surface once it is dry.
            </p>
            <p className="mb-5 leading-[1.8] text-ink">
              Extensive clinical trials have shown the product will remain active depending on the product and surface treated &amp; protects between uses. For many years cleaning and disinfection has relied upon old technologies that have failed to evolve and keep pace with microorganisms that are becoming ever more difficult to treat.
            </p>
            <Link href="/about" className="read-more-link">
              Read More <Icon name="arrow" className="h-3.5 w-[22px] shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      <Accreditations />

      {/* PRODUCTS */}
      <section className="px-6 pb-16 pt-16 md:px-20">
        <div className="mb-10 text-center">
          <span className="section-label">Our Products</span>
          <h2 className="text-[clamp(1.8rem,2.8vw,2.7rem)] font-extrabold text-ink">Goldshield® Product Range</h2>
        </div>

        <ProductTabs />

        <div className="mt-16 text-center">
          <span className="section-label">Markets</span>
          <h2 className="text-[clamp(1.5rem,2.4vw,2.2rem)] font-extrabold text-ink">Goldshield is used across a wide range of Industry Sectors</h2>
        </div>
      </section>

      <section aria-label="Industry sectors">
        <MarketsGrid hrefPrefix="/markets" />
      </section>

      {/* BELOW MARKETS */}
      <section className="relative overflow-hidden bg-cream">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.12]"
          style={{ backgroundImage: "url(/img/legacy/below_markets.webp)" }}
        />
        <div className="relative z-[2] flex flex-col items-center gap-10 px-6 py-16 md:px-20 lg:flex-row lg:py-20">
          <div className="flex-1">
            <h2 className="mb-5 max-w-[480px] text-[clamp(1.3rem,2.2vw,2rem)] font-extrabold leading-[1.3] text-gold">
              Unique molecular bonding technology to protect against harmful bacteria and viruses
            </h2>
            <p className="mb-5.5 max-w-[500px] text-[0.95rem] leading-[1.78] text-ink">
              Unlike other protective disinfectant products being offered on the market, Goldshield has been continuously developed over the past 12 years, it is a patented formula, truly stabilised in water and does not contain any methanol.
            </p>
            <Link href="/about" className="btn-outline">Read More</Link>
          </div>
          <div className="flex items-end justify-center gap-4 lg:flex-[0_0_44%] lg:justify-center">
            <Image
              src="/img/legacy/banner-spray-bottle.webp"
              alt="Goldshield 14 Day Disinfectant & Surface Protector spray bottle"
              width={887}
              height={931}
              loading="lazy"
              className="block w-[58%] max-w-[380px] transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105"
            />
            <Image
              src="/img/legacy/Surface-Protector-5L-Jerry-Can.webp"
              alt="Goldshield 14 Day Disinfectant & Surface Protector 5L container"
              width={218}
              height={262}
              loading="lazy"
              className="block w-[30%] max-w-[190px] transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <ContactCards />
    </>
  );
}
