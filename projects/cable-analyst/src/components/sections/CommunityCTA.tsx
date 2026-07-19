import { ArrowRight, Send } from "lucide-react";
import Aurora from "@/components/fx/Aurora";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { site } from "../../../site.config";

export default function CommunityCTA() {
  return (
    <section aria-label="Join the community" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass noise relative overflow-hidden rounded-[2rem] px-6 py-20 text-center sm:px-16 sm:py-28">
          <Aurora />
          <div className="relative">
            <Reveal>
              <p className="font-mono text-[0.8125rem] tracking-[0.22em] uppercase text-blue-bright/90">
                The community
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl leading-[1.04] font-semibold tracking-[-0.02em] sm:text-6xl">
                Trade alongside people who{" "}
                <em className="font-display font-normal italic text-blue-bright">
                  take it seriously
                </em>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted">
                Session prep, live market notes and honest reviews, shared
                with traders working on the same craft. No hype, no signals to
                blindly copy, no promises of easy money.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                <Button href={site.links.telegram} external>
                  <Send className="size-4" aria-hidden="true" />
                  Join on Telegram
                </Button>
                <Button href={site.links.x} variant="ghost" external>
                  Follow on X
                  <ArrowRight className="size-4 text-muted" aria-hidden="true" />
                </Button>
              </div>
            </Reveal>
            {site.newsletterEndpoint ? (
              <Reveal delay={0.3}>
                <form
                  action={site.newsletterEndpoint}
                  method="post"
                  className="mx-auto mt-10 flex max-w-md gap-2"
                >
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="h-12 flex-1 rounded-full border border-hairline bg-deep/60 px-5 text-[0.9375rem] text-fg placeholder:text-faint focus:border-blue focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="h-12 rounded-full bg-blue px-6 text-[0.9375rem] font-medium text-[#f4f7ff] transition-colors hover:bg-blue-bright"
                  >
                    Subscribe
                  </button>
                </form>
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
