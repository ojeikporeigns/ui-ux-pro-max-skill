"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Glass surface with a cursor-tracking light. The spotlight is a radial
 * gradient driven by CSS custom properties — no re-render per mousemove.
 */
export default function GlassCard({
  children,
  className,
  spotlight = true,
}: {
  children: ReactNode;
  className?: string;
  spotlight?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onPointerMove={
        spotlight
          ? (e) => {
              const r = ref.current?.getBoundingClientRect();
              if (!r || !ref.current) return;
              ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
              ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
            }
          : undefined
      }
      className={cn(
        "glass group relative overflow-hidden rounded-2xl",
        spotlight &&
          "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 " +
            "before:bg-[radial-gradient(360px_circle_at_var(--mx,50%)_var(--my,50%),rgb(127_167_255/0.10),transparent_65%)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
