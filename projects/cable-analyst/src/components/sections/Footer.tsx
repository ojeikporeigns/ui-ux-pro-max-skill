import Mark from "@/components/ui/Mark";
import { site } from "../../../site.config";

const socials = [
  { label: "X", href: site.links.x },
  { label: "Telegram", href: site.links.telegram },
  { label: "Linktree", href: site.links.linktree },
  { label: "YouTube", href: site.links.youtube },
  { label: "Discord", href: site.links.discord },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className="relative border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-12 sm:flex-row">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-3">
              <Mark className="size-8" />
              <span className="text-[0.9375rem] font-semibold tracking-tight">
                Cable&nbsp;Analyst
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="flex gap-16">
            <div>
              <p className="font-mono text-[0.6875rem] tracking-[0.2em] uppercase text-faint">
                Site
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  ["#about", "About"],
                  ["#edge", "The Edge"],
                  ["#process", "Process"],
                  ["#content", "Analysis"],
                  ["#faq", "FAQ"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="text-muted transition-colors hover:text-fg">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[0.6875rem] tracking-[0.2em] uppercase text-faint">
                Elsewhere
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-fg"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-16 border-t border-hairline pt-8">
          <p className="max-w-3xl font-mono text-xs leading-relaxed text-faint">
            Risk disclosure: trading foreign exchange on margin carries a high
            level of risk and may not be suitable for all investors. Past
            performance is not indicative of future results. All content on
            this site is market commentary and education. It is not
            investment advice, and no outcome is promised or implied.
          </p>
          <p className="mt-6 font-mono text-xs text-faint">
            © {new Date().getFullYear()} Cable Analyst. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
