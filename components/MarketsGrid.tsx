import Image from "next/image";
import Link from "next/link";
import { markets } from "@/lib/site";

export function MarketsGrid({ hrefPrefix = "" }: { hrefPrefix?: string }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5">
      {markets.map((m) => (
        <Link key={m.id} href={`${hrefPrefix}#${m.id}`} className="group relative block h-[clamp(200px,22vw,380px)] overflow-hidden">
          <Image
            src={`/img/legacy/${m.image}`}
            alt={m.name}
            fill
            loading="lazy"
            sizes="(min-width: 60rem) 20vw, 50vw"
            className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 bg-linear-to-b from-gold/30 to-[rgba(180,130,10,0.88)] p-4">
            <div className="text-center text-[clamp(0.78rem,1.1vw,1rem)] font-bold uppercase tracking-[0.07em] text-white">{m.name}</div>
            <div className="flex flex-wrap justify-center gap-1">
              {m.subs.map((sub) => (
                <span key={sub} className="whitespace-nowrap rounded-full border border-white/55 bg-white/18 px-2.5 py-0.5 text-[0.62rem] uppercase tracking-[0.04em] text-white">
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
