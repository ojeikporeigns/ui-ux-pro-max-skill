import SectionHeading, { Em } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Accordion, { type FaqItem } from "@/components/ui/Accordion";

export const faqItems: FaqItem[] = [
  {
    q: "Is any of this financial advice?",
    a: "No. Everything published here, from analysis and trade ideas to education, is market commentary and opinion shared for learning. You are responsible for your own decisions, and you should never risk money you can't afford to lose.",
  },
  {
    q: "What markets do you cover?",
    a: "The pound is home turf: GBP/USD first, with the crosses (EUR/GBP, GBP/JPY) and the broader dollar picture around it. The macro that drives sterling, from the Bank of England to UK and US data, is part of every read.",
  },
  {
    q: "Do you sell trading signals?",
    a: "No. Ideas are published with their reasoning: the context, the level, the invalidation. The goal is that you eventually don't need anyone's ideas; copying entries without understanding them is how accounts end.",
  },
  {
    q: "I'm new to trading. Is this for me?",
    a: "Yes, if you're patient. The education content starts from process fundamentals: risk, journalling, session structure. The community is friendly to people asking honest beginner questions.",
  },
  {
    q: "Where does the community live?",
    a: "Public analysis is on X. The community discussion happens on Telegram; the link in the navigation takes you to the current home, and everything official is always listed on the Linktree.",
  },
  {
    q: "How often is analysis published?",
    a: "Around the market's rhythm: session prep when London wakes up, updates when price does something worth writing about, and reviews when the week closes. Frequency follows the market, not a content calendar.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title={
            <>
              Fair <Em>questions</Em>.
            </>
          }
        />
        <Reveal delay={0.15} className="mt-14">
          <Accordion items={faqItems} />
        </Reveal>
      </div>
    </section>
  );
}
