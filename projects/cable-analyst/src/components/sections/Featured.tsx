import { ArrowUpRight } from "lucide-react";
import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Mark from "@/components/ui/Mark";
import { site } from "../../../site.config";

const kindColor: Record<string, string> = {
  Analysis: "text-blue-bright bg-blue/15",
  Education: "text-gold bg-gold/10",
  "Trade idea": "text-green bg-green/10",
  Psychology: "text-fg/80 bg-surface",
};

export default function Featured() {
  return (
    <section id="content" className="relative scroll-mt-24 py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured"
            title={
              <>
                The latest from <Em>the desk</Em>.
              </>
            }
          />
          <Reveal delay={0.2}>
            <a
              href={site.links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-fg"
            >
              All posts on X
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>

      {/* Snap carousel — edge-bleeds on wide screens */}
      <Reveal delay={0.1}>
        <div className="mask-x mt-12 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="mx-auto flex w-max snap-x snap-mandatory gap-4 px-6 lg:px-[max(1.5rem,calc((100vw-72rem)/2))]">
            {site.featured.map((post) => (
              <li key={post.title} className="snap-start">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group flex h-full w-[19rem] flex-col rounded-2xl p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-hairline-strong sm:w-[22rem]"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-[0.6875rem] tracking-[0.1em] ${kindColor[post.kind] ?? "text-muted bg-surface"}`}
                    >
                      {post.kind}
                    </span>
                    <Mark className="size-6 opacity-60" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{post.title}</h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-1.5 font-mono text-[0.8125rem] text-blue-bright/90">
                    Read on X
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
