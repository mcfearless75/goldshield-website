import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="h-1.5 bg-gold" />
      <footer className="bg-[#2d2d2d] px-6 py-10 md:px-20">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <Link href="/">
            <Logo variant="light" height={42} />
          </Link>
          <nav className="flex flex-wrap gap-6" aria-label="Footer">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/55 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
      <div className="bg-[#222] px-6 py-4 text-center text-xs text-white/40 md:px-20">
        &copy; {year} {site.name}. All rights reserved. Distributed by {site.distributor}.
      </div>
    </>
  );
}
