"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/fx/Magnetic";
import { ParallaxGroup, ParallaxLayer } from "@/components/fx/Parallax";
import { site } from "../../../site.config";

const HeroCanvas = dynamic(() => import("@/components/fx/HeroCanvas"));

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 28, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  const reduced = useReducedMotion();
  const anim = (delay: number) => (reduced ? {} : enter(delay));

  return (
    <ParallaxGroup className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden pt-32 pb-24">
      {/* Layer 0 — canvas chart + ambient ground */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,#0d1322_0%,#07080c_46%,#050506_100%)]"
      />
      <div className="absolute inset-0 opacity-90">
        <HeroCanvas />
      </div>
      {/* Scrim: keeps the price path from fighting the headline */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgb(5_5_6/0.82)_0%,rgb(5_5_6/0.5)_38%,rgb(5_5_6/0.08)_62%,transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="noise absolute inset-0"
      />
      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-deep"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <motion.p
            {...anim(0.05)}
            className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-surface px-4 py-2 font-mono text-[0.75rem] tracking-[0.18em] uppercase text-muted"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-1.5 rounded-full bg-green" />
            </span>
            <span>
              GBP/USD · <span className="hidden sm:inline">Independent market analysis</span>
              <span className="sm:hidden">Market analysis</span>
            </span>
          </motion.p>

          <motion.h1
            {...anim(0.15)}
            className="mt-8 text-balance text-[clamp(3.25rem,9vw,6.5rem)] leading-[0.98] font-semibold tracking-[-0.03em]"
          >
            Clarity on{" "}
            <em className="font-display font-normal italic tracking-[-0.01em] text-blue-bright">
              Cable
            </em>
            .
          </motion.h1>

          <motion.p
            {...anim(0.28)}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            Independent GBP/USD analysis, risk-first trade ideas, and a
            community of traders who care more about process than prediction.
          </motion.p>

          <motion.div {...anim(0.4)} className="mt-12 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Button href={site.links.telegram} external>
                Join community
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button href={site.links.x} variant="ghost" external>
                Explore analysis
                <ArrowUpRight className="size-4 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Floating market cards — desktop only, parallax layers */}
      <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden="true">
        <ParallaxLayer depth={26} className="absolute top-[24%] right-[7%]">
          <motion.div
            {...anim(0.55)}
            className="glass w-64 rounded-2xl p-5"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-xs tracking-[0.14em] text-muted">GBP/USD</span>
              <span className="rounded-full bg-green/15 px-2 py-0.5 font-mono text-[0.6875rem] text-green">London</span>
            </div>
            <p className="tabular mt-3 font-mono text-3xl text-fg">1.2847</p>
            <div className="mt-4 flex items-end gap-1">
              {[14, 22, 12, 26, 18, 30, 24, 36, 28, 40].map((v, i) => (
                <span
                  key={i}
                  style={{ height: v }}
                  className={`w-2 rounded-sm ${i > 6 ? "bg-blue-bright/80" : "bg-blue/30"}`}
                />
              ))}
            </div>
            <p className="mt-3 font-mono text-[0.625rem] tracking-[0.14em] text-faint uppercase">Illustrative data</p>
          </motion.div>
        </ParallaxLayer>

        <ParallaxLayer depth={14} className="absolute bottom-[22%] right-[16%]">
          <motion.div
            {...anim(0.7)}
            className="glass w-56 rounded-2xl p-5"
          >
            <span className="font-mono text-xs tracking-[0.14em] text-muted">Risk plan</span>
            <ul className="mt-3 space-y-2.5">
              {[
                ["Bias", "Set pre-session"],
                ["Invalidation", "Set first"],
                ["Size", "Fixed fraction"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline justify-between gap-4 font-mono text-[0.75rem]">
                  <span className="shrink-0 text-faint">{k}</span>
                  <span className="text-right text-fg/85">{v}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </ParallaxLayer>
      </div>
    </ParallaxGroup>
  );
}
