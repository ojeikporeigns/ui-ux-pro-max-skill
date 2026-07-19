"use client";

import { useEffect, useRef } from "react";
import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Mark from "@/components/ui/Mark";

const routine = [
  {
    time: "6:30",
    title: "Macro first",
    body: "Overnight flows, the data calendar, central-bank speakers. Context before charts, always.",
  },
  {
    time: "7:30",
    title: "Levels & liquidity",
    body: "Mark the levels that matter and the liquidity around them. If it isn't on the map, it doesn't get traded.",
  },
  {
    time: "8:00",
    title: "London open",
    body: "The session Cable was named for. Watch how price treats the pre-marked levels. Confirmation, not hope.",
  },
  {
    time: "13:30",
    title: "New York overlap",
    body: "The day's second act. US data hits, correlations shift, and plans either hold or get shelved.",
  },
  {
    time: "17:00",
    title: "Review",
    body: "Every idea graded against the plan, win or lose. The journal is the strategy.",
  },
];

const pillars = [
  {
    title: "Process over prediction",
    body: "Nobody knows where Cable closes on Friday. A repeatable process doesn't need to know.",
  },
  {
    title: "Risk before reward",
    body: "The first question on any idea is where it's wrong. Position size follows from the answer.",
  },
  {
    title: "Patience is a position",
    body: "Most sessions offer nothing worth taking. Flat is a trade, and often the best one available.",
  },
];

export default function About() {
  const lineRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);

  /* GSAP scroll-scrubbed progress line alongside the routine timeline */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (lineRef.current) lineRef.current.style.height = "100%";
      return;
    }
    let ctx: { revert: () => void } | undefined;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          lineRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: trackRef.current,
              start: "top 70%",
              end: "bottom 45%",
              scrub: 0.6,
            },
          },
        );
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Named for the wire that moved <Em>sterling</Em> first.
            </>
          }
          lead={
            <>
              In 1858 the first transatlantic cable linked London to New York,
              and the pound–dollar rate was among the first prices to cross it.
              Traders have called GBP/USD <em className="text-fg/80 not-italic">“Cable”</em> ever
              since. This desk keeps the old name and the old standard: read the
              market carefully, publish the reasoning, respect the risk.
            </>
          }
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Portrait / identity card */}
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <GlassCard className="noise p-8 sm:p-10" spotlight={false}>
              <div className="flex aspect-[4/5] items-center justify-center rounded-xl border border-hairline bg-[radial-gradient(80%_70%_at_50%_30%,#101a30_0%,#0a0d14_100%)]">
                {/* PLACEHOLDER portrait slot — swap for an editorial duotone
                    portrait of Cable Analyst before launch */}
                <div className="text-center">
                  <Mark className="mx-auto size-20 opacity-90" />
                  <p className="mt-6 font-mono text-[0.6875rem] tracking-[0.2em] uppercase text-faint">
                    Portrait · supplied at launch
                  </p>
                </div>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">Cable Analyst</h3>
              <p className="mt-3 leading-relaxed text-muted">
                An independent analyst focused on the pound: GBP/USD first, the
                crosses and the dollar picture around it. Charts, ideas and the
                thinking behind them, published in public.
              </p>
              <p className="mt-6 border-t border-hairline pt-6 font-mono text-[0.8125rem] leading-relaxed text-faint">
                Analysis and education only. Nothing published here is
                financial advice.
              </p>
            </GlassCard>
          </Reveal>

          {/* Session routine timeline */}
          <div>
            <Reveal>
              <h3 className="font-mono text-[0.8125rem] tracking-[0.22em] uppercase text-blue-bright/90">
                A session, in order
              </h3>
            </Reveal>
            <ol ref={trackRef} className="relative mt-10 space-y-12">
              {/* Track + scrubbed progress line */}
              <div aria-hidden="true" className="absolute top-1 bottom-1 left-[7px] w-px bg-hairline" />
              <div
                aria-hidden="true"
                ref={lineRef}
                className="absolute top-1 left-[7px] w-px bg-gradient-to-b from-blue to-blue-bright"
                style={{ height: "0%" }}
              />
              {routine.map((step, i) => (
                <Reveal key={step.time} delay={i * 0.05}>
                  <li className="relative pl-12">
                    <span
                      aria-hidden="true"
                      className="absolute top-1 left-0 grid size-[15px] place-items-center rounded-full border border-hairline-strong bg-base"
                    >
                      <span className="size-[5px] rounded-full bg-blue-bright" />
                    </span>
                    <p className="tabular font-mono text-[0.8125rem] tracking-[0.14em] text-blue-bright/80">
                      {step.time} <span className="text-faint">GMT</span>
                    </p>
                    <h4 className="mt-2 text-xl font-semibold tracking-tight">{step.title}</h4>
                    <p className="mt-2 max-w-md leading-relaxed text-muted">{step.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {/* Philosophy pillars */}
        <div className="mt-24 grid gap-4 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <GlassCard className="h-full p-8">
                <p className="font-display text-2xl italic text-fg/95">{p.title}</p>
                <p className="mt-4 leading-relaxed text-muted">{p.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
