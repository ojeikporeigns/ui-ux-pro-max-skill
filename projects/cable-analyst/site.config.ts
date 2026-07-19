/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE CONFIG — single source of truth for every real-world fact on the page.
 *
 * Values marked PLACEHOLDER could not be verified against the live X profile
 * or Linktree at build time. Replace them with real values before launch.
 * Nothing here is fabricated: placeholder stats render as design-complete
 * blocks but are labelled in code and must be swapped for verified numbers.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Cable Analyst",
  tagline: "GBP/USD market analysis, trade ideas and a community built on process.",
  url: "https://cableanalyst.com", // PLACEHOLDER — final production domain
  locale: "en_GB",

  links: {
    x: "https://x.com/Cable_Analyst",
    linktree: "https://linktr.ee/cableanalyst",
    telegram: "https://linktr.ee/cableanalyst", // PLACEHOLDER — direct t.me link when confirmed
    youtube: "", // PLACEHOLDER — leave empty to hide
    discord: "", // PLACEHOLDER — leave empty to hide
    email: "", // PLACEHOLDER — contact address; leave empty to hide
  },

  /**
   * Social-proof stats. `verified: false` keeps the number qualified in the UI
   * (rendered with a soft label, never as a hard claim). Set real values and
   * flip `verified` to true before launch.
   */
  stats: [
    { value: "–", label: "Followers on X", verified: false }, // PLACEHOLDER
    { value: "–", label: "Community members", verified: false }, // PLACEHOLDER
    { value: "–", label: "Charts published", verified: false }, // PLACEHOLDER
  ],

  /** Newsletter/email capture endpoint. Empty string disables the form post. */
  newsletterEndpoint: "", // PLACEHOLDER — e.g. Buttondown/ConvertKit action URL

  /**
   * Testimonials ship disabled. Only enable with real, attributable quotes.
   * The section will not render while `enabled` is false or the list is empty.
   */
  testimonials: {
    enabled: false,
    items: [] as { quote: string; name: string; role: string }[],
  },

  /**
   * Featured content cards. These are structural slots styled like X posts —
   * replace with links + excerpts from real posts before launch.
   */
  featured: [
    {
      kind: "Analysis",
      title: "Weekly Cable outlook",
      excerpt:
        "Where the week's liquidity sits, which levels matter, and the scenarios worth planning for before London opens.",
      href: "https://x.com/Cable_Analyst", // PLACEHOLDER — link the actual post
    },
    {
      kind: "Education",
      title: "How I frame a session",
      excerpt:
        "The pre-market routine: higher-timeframe bias, session levels, and the one question every setup has to answer.",
      href: "https://x.com/Cable_Analyst", // PLACEHOLDER
    },
    {
      kind: "Trade idea",
      title: "A setup, start to finish",
      excerpt:
        "Entry logic, invalidation, and management on a recent GBP/USD idea — including what would have made it a pass.",
      href: "https://x.com/Cable_Analyst", // PLACEHOLDER
    },
    {
      kind: "Psychology",
      title: "Sitting on your hands",
      excerpt:
        "Why the hardest part of trading Cable is the hours you spend doing nothing, and how to make patience a system.",
      href: "https://x.com/Cable_Analyst", // PLACEHOLDER
    },
  ],
} as const;

export type Site = typeof site;
