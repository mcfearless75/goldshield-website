import Image from "next/image";
import { accreditationLogos, approvalTable } from "@/lib/site";

export function Accreditations({ withTable = false, introText }: { withTable?: boolean; introText?: string }) {
  const logos = withTable ? accreditationLogos : accreditationLogos.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 text-center md:px-20">
      <Image
        src="/img/legacy/shapre1.webp"
        alt=""
        width={473}
        height={290}
        loading="lazy"
        className="pointer-events-none absolute -left-5 -top-10 w-[340px] opacity-[0.07]"
      />
      <span className="section-label">Accreditations</span>
      <h2 className="mb-[50px] text-[clamp(1.8rem,2.8vw,2.7rem)] font-extrabold text-ink">Global Approvals</h2>
      {introText && <p className="mx-auto mb-[50px] max-w-[560px] text-[0.97rem] text-mist">{introText}</p>}

      <div className="flex flex-wrap items-center justify-center gap-[clamp(30px,5vw,90px)]">
        {logos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={logo.w}
            height={logo.h}
            loading="lazy"
            className="reveal h-[clamp(46px,5.5vw,95px)] w-auto"
          />
        ))}
      </div>

      {withTable && (
        <div className="mx-auto mt-[60px] max-w-[900px] overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b-2 border-[#f0eeec] px-4 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-mist">Product</th>
                <th className="border-b-2 border-[#f0eeec] px-4 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-mist">Registration / Approval</th>
              </tr>
            </thead>
            <tbody>
              {approvalTable.map((row) => (
                <tr key={row.product} className="hover:bg-[#fafaf8]">
                  <td className="border-b border-[#f5f5f5] px-4 py-3 text-[0.88rem] leading-[1.6] text-ink">{row.product}</td>
                  <td className="border-b border-[#f5f5f5] px-4 py-3 text-[0.88rem] leading-[1.6] text-ink">{row.approval}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
