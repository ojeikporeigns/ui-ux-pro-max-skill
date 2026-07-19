import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import { site } from "../../../site.config";

const coverage = [
  "GBP/USD",
  "EUR/GBP",
  "GBP/JPY",
  "DXY",
  "Bank of England",
  "UK CPI",
  "NFP",
  "FOMC",
  "London Session",
  "New York Session",
  "Gilt Yields",
  "Rate Decisions",
];

export default function TrustedBy() {
  return (
    <section aria-label="Coverage and community" className="relative py-16 sm:py-20">
      <Reveal>
        <p className="mx-auto max-w-6xl px-6 text-center font-mono text-[0.75rem] tracking-[0.22em] uppercase text-faint">
          Covered every session
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <Marquee className="mt-8" speed="ticker">
          {coverage.map((c) => (
            <span
              key={c}
              className="mx-5 flex items-center gap-5 whitespace-nowrap font-mono text-sm tracking-[0.12em] text-muted/80"
            >
              {c}
              <span aria-hidden="true" className="size-1 rounded-full bg-blue/50" />
            </span>
          ))}
        </Marquee>
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
        {site.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="bg-base">
            <div className="px-8 py-8 text-center">
              <p className="tabular font-mono text-4xl text-fg/95">{s.value}</p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
              {!s.verified && (
                <p className="mt-1 font-mono text-[0.625rem] tracking-[0.14em] uppercase text-faint">
                  figure added at launch
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
