import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";
import type { ReactNode } from "react";

/**
 * Standard section opener: mono eyebrow, display title, optional lead.
 * Pass serif-italic accent words inside the title via <Em>.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        <p className="font-mono text-[0.8125rem] tracking-[0.22em] uppercase text-blue-bright/90">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-balance text-4xl leading-[1.06] font-semibold tracking-[-0.02em] sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={0.16}>
          <p className="mt-6 text-lg leading-relaxed text-muted">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Em({ children }: { children: ReactNode }) {
  return (
    <em className="font-display font-normal italic tracking-normal text-blue-bright">
      {children}
    </em>
  );
}
