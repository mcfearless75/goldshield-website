import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { site, sectorOptions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact the Goldshield® team — make an enquiry, find our address, or call us. Distributed in the UK by Evotek Innovations.",
  alternates: { canonical: "/contact.html" },
  openGraph: {
    title: "Contact Us | Goldshield® Antimicrobial Technology",
    description: "Contact the Goldshield® team — make an enquiry, find our address, or call us.",
    url: "/contact.html",
  },
};

export default function Contact() {
  const { address, email, phone, phoneHref } = site.contact;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact.html" }]} />

      <PageHero label="Contact Us">
        We love to hear from<br />our <span className="text-gold">customers</span>
      </PageHero>

      <section className="flex flex-col gap-10 px-6 py-16 md:px-20 lg:flex-row lg:items-start lg:gap-[clamp(40px,7vw,100px)] lg:py-20">
        {/* LEFT: Info */}
        <div className="lg:max-w-[38%] lg:flex-[0_0_38%]">
          <span className="section-label">Get In Touch</span>
          <h2 className="mb-6 text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold leading-[1.2] text-ink">Talk to the Goldshield Team</h2>

          <div className="mb-8 flex items-start gap-4.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold">
              <Icon name="mail" className="h-[22px] w-[22px] stroke-white" />
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold uppercase tracking-[0.08em] text-ink">Email</h3>
              <a href={`mailto:${email}`} className="text-[0.95rem] text-mist hover:text-gold">{email}</a>
            </div>
          </div>

          <div className="mb-8 flex items-start gap-4.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold">
              <Icon name="phone" className="h-[22px] w-[22px] stroke-white" />
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold uppercase tracking-[0.08em] text-ink">Phone</h3>
              <a href={phoneHref} className="text-[0.95rem] text-mist hover:text-gold">{phone}</a>
            </div>
          </div>

          <div className="mb-8 flex items-start gap-4.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold">
              <Icon name="pin" className="h-[22px] w-[22px] stroke-white" />
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold uppercase tracking-[0.08em] text-ink">Address</h3>
              <p className="text-[0.95rem] leading-[1.7] text-mist">
                {site.name} / {site.distributor}<br />
                {address.line1}<br />
                {address.line2}<br />
                {address.city}, {address.region}<br />
                {address.postcode}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="lg:flex-1">
          <h2 className="mb-2 text-[clamp(1.3rem,2vw,1.7rem)] font-extrabold text-ink">Make an Enquiry</h2>
          <p className="mb-8 text-[0.95rem] leading-[1.7] text-mist">Fill in the form below and a member of our team will get back to you as soon as possible.</p>

          <form className="grid grid-cols-1 gap-5 md:grid-cols-2" action="https://formspree.io/f/xpwzgkqb" method="POST">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fname" className="text-[0.8rem] font-semibold uppercase tracking-[0.07em] text-ink">First Name *</label>
              <input className="form-field-input" type="text" id="fname" name="first_name" placeholder="John" required />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lname" className="text-[0.8rem] font-semibold uppercase tracking-[0.07em] text-ink">Last Name *</label>
              <input className="form-field-input" type="text" id="lname" name="last_name" placeholder="Smith" required />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[0.8rem] font-semibold uppercase tracking-[0.07em] text-ink">Email Address *</label>
              <input className="form-field-input" type="email" id="email" name="email" placeholder="john@company.com" required />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-[0.8rem] font-semibold uppercase tracking-[0.07em] text-ink">Phone Number</label>
              <input className="form-field-input" type="tel" id="phone" name="phone" placeholder="+44 (0)..." />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="company" className="text-[0.8rem] font-semibold uppercase tracking-[0.07em] text-ink">Company / Organisation</label>
              <input className="form-field-input" type="text" id="company" name="company" placeholder="Your Company Ltd" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="sector" className="text-[0.8rem] font-semibold uppercase tracking-[0.07em] text-ink">Industry Sector</label>
              <select className="form-field-input select-chevron" id="sector" name="sector" defaultValue="">
                <option value="">Select a sector...</option>
                {sectorOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label htmlFor="message" className="text-[0.8rem] font-semibold uppercase tracking-[0.07em] text-ink">Message *</label>
              <textarea className="form-field-input min-h-[130px] resize-y" id="message" name="message" placeholder="Tell us about your requirements..." required />
            </div>
            <div className="mt-1.5 md:col-span-2">
              <button type="submit" className="btn-submit">Send Enquiry</button>
              <p className="mt-2.5 text-xs text-mist">* Required fields. We will never share your details with third parties.</p>
            </div>
          </form>
        </div>
      </section>

      {/* MAP */}
      <div className="relative flex h-80 items-center justify-center overflow-hidden bg-[#f5f3ef]">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url(/img/legacy/world-map.webp)" }}
        />
        <div className="relative z-[2] text-center">
          <div className="inline-block bg-white px-10 py-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <h3 className="mb-3 text-[1.05rem] font-extrabold uppercase tracking-[0.06em] text-gold">Visit Us</h3>
            <p className="text-[0.92rem] leading-[1.75] text-ink">
              {address.line1}<br />{address.line2}<br />{address.city}, {address.region} {address.postcode}
            </p>
            <a
              href="https://maps.google.com/?q=Unit+2C+Churnet+Park+Leek+ST13+8YH"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3.5 inline-block text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-gold hover:underline"
            >
              Open in Google Maps &rarr;
            </a>
          </div>
        </div>
      </div>

      <div className="h-1.5 bg-gold" />
    </>
  );
}
