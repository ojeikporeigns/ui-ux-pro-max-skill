import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "gold";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none " +
  "text-[0.9375rem] h-12 px-7";

const variants: Record<Variant, string> = {
  primary:
    "bg-blue text-[#f4f7ff] shadow-[0_0_0_1px_rgb(255_255_255/0.08)_inset,0_8px_32px_-8px_rgb(78_128_238/0.55)] " +
    "hover:bg-blue-bright hover:shadow-[0_0_0_1px_rgb(255_255_255/0.14)_inset,0_12px_44px_-8px_rgb(78_128_238/0.75)] " +
    "hover:-translate-y-px active:translate-y-0",
  ghost:
    "glass text-fg/90 hover:text-fg hover:border-hairline-strong hover:-translate-y-px active:translate-y-0",
  gold:
    "bg-gradient-to-b from-[#e3c987] to-[#c3a057] text-[#141005] " +
    "shadow-[0_8px_32px_-10px_rgb(212_178_106/0.5)] hover:shadow-[0_12px_40px_-10px_rgb(212_178_106/0.7)] " +
    "hover:-translate-y-px active:translate-y-0",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className,
  external,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = cn(base, variants[variant], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
