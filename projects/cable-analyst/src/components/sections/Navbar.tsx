"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Mark from "@/components/ui/Mark";
import { site } from "../../../site.config";

const links = [
  { href: "#about", label: "About" },
  { href: "#edge", label: "The Edge" },
  { href: "#process", label: "Process" },
  { href: "#content", label: "Analysis" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <nav
        aria-label="Primary"
        className={cn(
          "flex w-full max-w-5xl items-center justify-between gap-4 rounded-full py-2 pr-2 pl-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "glass shadow-[0_16px_48px_-16px_rgb(0_0_0/0.7)]"
            : "border border-transparent",
        )}
      >
        <a href="#top" className="flex items-center gap-3">
          <Mark className="size-8" />
          <span className="text-[0.9375rem] font-semibold tracking-tight">
            Cable&nbsp;Analyst
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative rounded-full px-3.5 py-2 text-[0.875rem] text-muted transition-colors duration-300 hover:text-fg"
              >
                {l.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3.5 -bottom-px h-px origin-left scale-x-0 bg-blue-bright transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.links.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center rounded-full bg-blue px-5 text-[0.875rem] font-medium text-[#f4f7ff] shadow-[0_8px_28px_-8px_rgb(78_128_238/0.6)] transition-all duration-300 hover:bg-blue-bright hover:-translate-y-px"
        >
          Join community
        </a>
      </nav>
    </header>
  );
}
