import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    title: "Macro context",
    body: "Rates, data, positioning. What the pound should care about this week, written down before the charts open.",
  },
  {
    title: "Levels & liquidity",
    body: "A small map of levels that matter: prior highs and lows, session ranges, the places stops accumulate.",
  },
  {
    title: "Scenario planning",
    body: "If price does X at the level, the idea is on. If it does Y, stand down. Both outcomes written in advance.",
  },
  {
    title: "Risk plan & review",
    body: "Invalidation set first, size derived from it, and every outcome journalled. The review loop is the edge.",
  },
];

/** Annotated analysis chart — illustrative SVG, no live data claims. */
function AnalysisCard() {
  return (
    <GlassCard className="noise p-6 sm:p-8" spotlight={false}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm tracking-[0.12em] text-fg/90">GBP/USD</span>
          <span className="font-mono text-[0.6875rem] text-faint">H4 · Illustrative</span>
        </div>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-hairline-strong" />
          <span className="size-2 rounded-full bg-hairline-strong" />
          <span className="size-2 rounded-full bg-blue-bright/70" />
        </div>
      </div>

      <svg
        viewBox="0 0 480 260"
        className="mt-6 w-full"
        role="img"
        aria-label="Illustrative annotated chart showing marked levels and a planned scenario"
      >
        {/* grid */}
        {[52, 104, 156, 208].map((y) => (
          <line key={y} x1="0" x2="480" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" />
        ))}
        {/* resistance zone */}
        <rect x="0" y="40" width="480" height="26" fill="rgba(212,178,106,0.07)" />
        <line x1="0" x2="480" y1="66" y2="66" stroke="rgba(212,178,106,0.45)" strokeDasharray="5 5" />
        <text x="10" y="58" fill="#d4b26a" fontSize="11" fontFamily="var(--font-mono)">
          supply · prior weekly high
        </text>
        {/* support */}
        <line x1="0" x2="480" y1="196" y2="196" stroke="rgba(46,189,133,0.5)" strokeDasharray="5 5" />
        <text x="10" y="216" fill="#2ebd85" fontSize="11" fontFamily="var(--font-mono)">
          demand · session low sweep
        </text>
        {/* price path */}
        <path
          d="M0 150 L36 138 L62 160 L92 128 L120 142 L150 108 L176 124 L204 92 L232 118 L258 178 L282 192 L308 168 L336 150 L364 122 L392 132 L420 96 L450 108 L480 84"
          fill="none"
          stroke="url(#pl)"
          strokeWidth="2.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* entry marker */}
        <circle cx="282" cy="192" r="5" fill="rgba(46,189,133,0.25)" />
        <circle cx="282" cy="192" r="2.4" fill="#2ebd85" />
        <text
          x="282"
          y="244"
          textAnchor="middle"
          fill="#9297a1"
          fontSize="11"
          fontFamily="var(--font-mono)"
        >
          plan triggers here, not before
        </text>
        <line x1="282" y1="196" x2="282" y2="226" stroke="rgba(146,151,161,0.35)" />
        <defs>
          <linearGradient id="pl" x1="0" y1="0" x2="480" y2="0">
            <stop stopColor="#4e80ee" />
            <stop offset="1" stopColor="#7fa7ff" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline">
        {[
          ["Bias", "Neutral → long"],
          ["Invalidation", "Below sweep"],
          ["R multiple", "Defined pre-entry"],
        ].map(([k, v]) => (
          <div key={k} className="bg-base px-4 py-3.5">
            <p className="font-mono text-[0.625rem] tracking-[0.16em] uppercase text-faint">{k}</p>
            <p className="mt-1 font-mono text-[0.8125rem] text-fg/90">{v}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-24 sm:py-36">
      {/* Section ground: faint midnight wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_40%,#0a101f_0%,transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              No performance theatre. <Em>Just the work.</Em>
            </>
          }
          lead="No cherry-picked P&L screenshots here. What you can inspect is the thing that actually compounds: a research process, run the same way every session."
        />

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <ol className="space-y-2">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <li className="group relative rounded-2xl border border-transparent p-6 pl-8 transition-colors duration-300 hover:border-hairline hover:bg-surface">
                  <span
                    aria-hidden="true"
                    className="absolute top-7 bottom-7 left-0 w-0.5 rounded-full bg-hairline transition-colors duration-300 group-hover:bg-blue-bright/70"
                  />
                  <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.15} className="lg:sticky lg:top-32">
            <AnalysisCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
