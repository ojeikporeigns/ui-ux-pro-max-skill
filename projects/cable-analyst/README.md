# Cable Analyst — Landing Page

A premium dark-mode landing page for [Cable Analyst](https://x.com/Cable_Analyst): independent GBP/USD ("Cable") market analysis, trade ideas and a trading community. Built as a production-ready Next.js app with a cinematic, luxury-fintech design language (Apple / Stripe / Linear register).

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static production build
npm run start    # serve the production build
```

## Before launch: replace the placeholders

Every real-world fact lives in **`site.config.ts`** and is marked `PLACEHOLDER`. Nothing on the page fabricates numbers or testimonials; blank stats render as an en dash with a "figure added at launch" caption until verified values are supplied.

1. `links.telegram` — direct `t.me/...` invite (currently points at the Linktree)
2. `links.youtube` / `links.discord` / `links.email` — fill in, or leave empty to hide
3. `stats[]` — real follower / community / chart counts; set `verified: true`
4. `newsletterEndpoint` — Buttondown/ConvertKit/etc. form action (empty hides the form)
5. `testimonials` — real, attributable quotes only; the section stays hidden until `enabled: true`
6. `featured[]` — swap the structural card slots for links + excerpts of real X posts
7. `url` — the production domain (also drives canonical/OG metadata)
8. Portrait — drop an editorial duotone portrait into the About card slot (`src/components/sections/About.tsx`)

## Architecture

```
site.config.ts               Single source of truth for all real-world facts
src/app/
  layout.tsx                 Fonts (next/font), SEO, OpenGraph, JSON-LD, Lenis provider
  page.tsx                   Section composition
  globals.css                Tailwind v4 @theme tokens + utilities (glass, noise, mask-x)
src/components/
  sections/                  Navbar, Hero, TrustedBy, About, WhyFollow, Process,
                             Featured, Testimonials (gated), CommunityCTA, Faq, Footer
  ui/                        Button, GlassCard, SectionHeading, Reveal, Marquee,
                             Accordion (Radix), Mark (brand SVG)
  fx/                        HeroCanvas (2D canvas chart + particles), Parallax,
                             Magnetic, Aurora, SmoothScroll (Lenis)
```

## Design system

**Color tokens** (`globals.css` `@theme`, never pure black/white):

| Token | Value | Role |
|---|---|---|
| `deep` / `base` / `night` / `elev` | `#050506` `#0a0a0d` `#0a0e19` `#101219` | grounds |
| `fg` / `muted` / `faint` | `#ededef` `#9297a1` `#5c6068` | text |
| `blue` / `blue-bright` | `#4e80ee` `#7fa7ff` | electric accent |
| `green` | `#2ebd85` | market-up semantics only |
| `gold` | `#d4b26a` | rare luxury highlights |
| `hairline` / `surface` | `white/8%` `white/4%` | glass borders & fills |

**Typography** — Schibsted Grotesk (UI/body/display sans), Newsreader italic (editorial serif accents), IBM Plex Mono (market data, eyebrows, all numerals tabular). Hero scales `clamp(3.25rem → 6.5rem)`; spacing on an 8pt system; section rhythm 96–144px.

**Motion spec** — easing `cubic-bezier(0.16,1,0.3,1)`; reveals: fade + 24px rise + blur-clear over 0.7s, 60–80ms stagger; hover lifts 300–500ms; marquees 42s/60s linear. All animation is transform/opacity only, and every decorative effect (canvas, parallax, aurora, marquee, smooth scroll) is disabled under `prefers-reduced-motion`.

**Hero chart** — hand-written 2D `<canvas>` (draw-on price path, glow pass, drifting particles, live pulse), DPR-capped at 2, pauses off-tab. Chosen over Three.js deliberately: identical cinematic effect for ~3KB with no WebGL payload, keeping Lighthouse performance intact.

## Performance & SEO

- Fully static prerender (`○` routes), ~163KB first-load JS, zero third-party scripts
- Fonts self-hosted via `next/font` with `display: swap`
- GSAP is lazy-loaded only when the About timeline mounts
- Metadata API: canonical, OpenGraph + Twitter card (`public/og.png`), JSON-LD `Person` + `WebSite`
- Semantic landmarks, skip link, focus-visible rings, aria-hidden decorative layers

## Honesty constraints (do not undo)

- Market quotes shown in UI are labelled **Illustrative data**; wire real feeds before removing the label.
- No P&L claims, win rates, or fabricated social proof anywhere. The Process section deliberately replaces "performance" with an inspectable workflow.
- The footer risk disclosure is a trust feature, not boilerplate; keep it.
