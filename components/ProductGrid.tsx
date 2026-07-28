import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";

type ProductItem = { image: string; title: string; size: string };

const COLS: Record<number, string> = {
  4: "grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4",
  3: "grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3",
  1: "grid-cols-1 max-w-[320px]",
};

export function ProductGrid({
  items,
  cols,
  href,
  linkLabel = "Enquire",
}: {
  items: readonly ProductItem[];
  cols: 4 | 3 | 1;
  href: string;
  linkLabel?: string;
}) {
  return (
    <div className={`grid gap-7 ${COLS[cols]}`}>
      {items.map((item) => (
        <div key={item.image} className="reveal border border-[#f0eeec] bg-white p-6 pb-5 text-center transition-shadow hover:shadow-[0_6px_28px_rgba(0,0,0,0.09)]">
          <Image
            src={`/img/legacy/${item.image}`}
            alt={item.title}
            width={218}
            height={262}
            className="mx-auto mb-5 max-h-[220px] w-full object-contain"
            loading="lazy"
          />
          <div className="mb-1 text-base font-semibold text-ink">{item.title}</div>
          <div className="mb-[18px] text-xs uppercase tracking-[0.09em] text-mist">{item.size}</div>
          <Link href={href} className="inline-flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.09em] text-gold transition-all hover:gap-3.5">
            {linkLabel} <Icon name="arrow-small" className="h-2.5 w-3.5 shrink-0" />
          </Link>
        </div>
      ))}
    </div>
  );
}
