"use client";

import * as RadixAccordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

export type FaqItem = { q: string; a: string };

export default function Accordion({ items }: { items: FaqItem[] }) {
  return (
    <RadixAccordion.Root
      type="single"
      collapsible
      className="glass noise relative divide-y divide-hairline overflow-hidden rounded-2xl"
    >
      {items.map((item, i) => (
        <RadixAccordion.Item key={i} value={`item-${i}`} className="group/item">
          <RadixAccordion.Header>
            <RadixAccordion.Trigger className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8 [&[data-state=open]>span>svg]:rotate-45">
              <span className="text-[1.0625rem] font-medium text-fg/95">
                {item.q}
              </span>
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-hairline bg-surface transition-colors group-hover/item:border-hairline-strong">
                <Plus
                  className="size-4 text-muted transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  aria-hidden="true"
                />
              </span>
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.3s_cubic-bezier(0.16,1,0.3,1)] data-[state=open]:animate-[accordion-down_0.36s_cubic-bezier(0.16,1,0.3,1)]">
            <p className="px-6 pb-7 text-[0.9688rem] leading-relaxed text-muted sm:px-8 sm:max-w-[85%]">
              {item.a}
            </p>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}
