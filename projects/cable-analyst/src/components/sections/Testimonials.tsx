import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { site } from "../../../site.config";

/**
 * Renders only when real, attributable testimonials exist in site.config.ts.
 * Ships disabled — never fabricate social proof.
 */
export default function Testimonials() {
  if (!site.testimonials.enabled || site.testimonials.items.length === 0) {
    return null;
  }

  return (
    <section aria-label="Testimonials" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Traders' words"
          title={
            <>
              In their <Em>own words</Em>.
            </>
          }
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <GlassCard className="h-full p-8">
                <p className="font-display text-lg italic leading-relaxed text-fg/90">
                  “{t.quote}”
                </p>
                <p className="mt-6 text-sm font-medium">{t.name}</p>
                <p className="mt-1 text-sm text-faint">{t.role}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
