import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Seamless marquee: content duplicated once, track translates -50%. */
export default function Marquee({
  children,
  className,
  speed = "slow",
}: {
  children: ReactNode;
  className?: string;
  speed?: "slow" | "ticker";
}) {
  return (
    <div className={cn("mask-x overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max items-center gap-0 motion-reduce:animate-none",
          speed === "slow" ? "animate-marquee" : "animate-ticker",
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
