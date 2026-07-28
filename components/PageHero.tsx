import type { ReactNode } from "react";

export function PageHero({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-cream px-6 pb-[72px] pt-20 md:px-20">
      <div
        className="pointer-events-none absolute -right-[60px] -top-[60px] h-[380px] w-[380px] bg-contain bg-center bg-no-repeat opacity-[0.07]"
        style={{ backgroundImage: "url(/img/legacy/shapre1.png)" }}
      />
      <span className="relative mb-3.5 block text-[13px] font-semibold uppercase tracking-[0.22em] text-cyan">{label}</span>
      <h1 className="relative text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.1] text-ink">{children}</h1>
    </section>
  );
}
