"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_6px_rgba(0,0,0,0.07)]">
      <div className="container-hdr">
        <Link href="/" className="shrink-0" aria-label="Goldshield home">
          <Logo />
        </Link>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex list-none">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="block px-[18px] text-[15px] leading-[92px] text-black transition-colors hover:text-gold aria-[current=page]:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3.5 lg:flex">
          <a href={site.contact.phoneHref} className="btn-phone">{site.contact.phone}</a>
          <Link href="/contact" className="btn-enquiry">Make an Enquiry</Link>
        </div>

        <button
          className="flex flex-col gap-[5px] border-none bg-none p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Toggle menu"}
          aria-expanded={open}
          aria-controls="mobileNav"
        >
          <span className={`block h-0.5 w-[26px] bg-black transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-[26px] bg-black transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-[26px] bg-black transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav
          id="mobileNav"
          aria-label="Mobile"
          className="fixed inset-x-0 top-[92px] bottom-0 z-[999] overflow-y-auto bg-white p-6 lg:hidden"
        >
          <ul className="grid list-none gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="block border-b border-[#f0eeec] py-4 text-[1.1rem] text-black aria-[current=page]:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={site.contact.phoneHref} className="btn-phone mt-2.5 block justify-center text-center">
            {site.contact.phone}
          </a>
          <Link href="/contact" className="btn-enquiry mt-4 flex justify-center text-center">
            Make an Enquiry
          </Link>
        </nav>
      )}
    </header>
  );
}
