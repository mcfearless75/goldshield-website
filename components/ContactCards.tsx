import Link from "next/link";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

export function ContactCards() {
  const { address, email, phone, phoneHref } = site.contact;

  return (
    <section className="bg-cream px-6 py-16 md:px-20">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="reveal px-5 py-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold">
            <Icon name="mail" className="h-7 w-7 stroke-white" />
          </div>
          <h3 className="mb-2.5 text-lg font-bold uppercase tracking-[0.06em] text-ink">Email Us</h3>
          <a href={`mailto:${email}`} className="block text-[0.95rem] leading-[1.7] text-mist hover:text-gold">{email}</a>
          <Link href="/contact" className="btn-contact-gold">Make an Enquiry</Link>
        </div>
        <div className="reveal px-5 py-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold">
            <Icon name="phone" className="h-7 w-7 stroke-white" />
          </div>
          <h3 className="mb-2.5 text-lg font-bold uppercase tracking-[0.06em] text-ink">Call Us</h3>
          <a href={phoneHref} className="block text-[0.95rem] leading-[1.7] text-mist hover:text-gold">{phone}</a>
        </div>
        <div className="reveal px-5 py-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold">
            <Icon name="pin" className="h-7 w-7 stroke-white" />
          </div>
          <h3 className="mb-2.5 text-lg font-bold uppercase tracking-[0.06em] text-ink">Find Us</h3>
          <p className="text-[0.95rem] leading-[1.7] text-mist">
            {address.line1},<br />{address.city}, {address.regionShort}, {address.postcode}
          </p>
        </div>
      </div>
    </section>
  );
}
