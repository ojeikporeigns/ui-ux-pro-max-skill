import {
  Brain,
  Crosshair,
  GraduationCap,
  LineChart,
  ShieldCheck,
  Users,
} from "lucide-react";
import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";

const features = [
  {
    icon: LineChart,
    title: "Market analysis",
    body: "Daily reads on Cable and the dollar picture around it: levels, liquidity and the macro that actually moves price.",
  },
  {
    icon: Crosshair,
    title: "Trade ideas",
    body: "Ideas published with entry logic, invalidation and management. Reasoning included, so you learn the why, not just the where.",
  },
  {
    icon: ShieldCheck,
    title: "Risk management",
    body: "Position sizing, invalidation discipline and drawdown control: the unglamorous work that keeps accounts alive.",
  },
  {
    icon: Brain,
    title: "Trading psychology",
    body: "The battle between the plan and the person executing it. Honest writing on tilt, patience and consistency.",
  },
  {
    icon: Users,
    title: "Community",
    body: "A room of traders comparing notes on the same sessions. Accountability without the noise of a signal chat.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    body: "From framing a session to journalling like it matters. Built for traders who want a durable skill, not shortcuts.",
  },
];

export default function WhyFollow() {
  return (
    <section id="edge" className="relative scroll-mt-24 py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          align="center"
          eyebrow="The Edge"
          title={
            <>
              Why traders <Em>follow</Em>.
            </>
          }
          lead="No mystique, no black box. Six things, done properly and in public, every market day."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <GlassCard className="h-full p-8">
                <div className="grid size-12 place-items-center rounded-xl border border-hairline bg-gradient-to-b from-blue/20 to-blue/5 text-blue-bright transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                  <f.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{f.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
