import { Icon } from "./Icon";
import { trustItems } from "@/lib/site";

export function TrustStrip() {
  return (
    <div className="flex flex-col items-center gap-6 px-6 py-10 md:px-20 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-[clamp(24px,5vw,90px)] lg:py-[56px] lg:pb-[50px]">
      {trustItems.map((item) => (
        <div key={item.title} className="reveal flex w-full max-w-[340px] items-start gap-4 lg:w-auto lg:max-w-none">
          <div className="h-[50px] w-[50px] shrink-0 text-gold">
            <Icon name={item.icon as "safe" | "clock" | "document" | "molecule"} className="h-full w-full" />
          </div>
          <div>
            <span className="mb-1 block text-base font-bold uppercase tracking-[0.05em] text-gold">{item.title}</span>
            <span className="block text-[12.5px] uppercase tracking-[0.03em] leading-[1.65] text-mist">{item.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
