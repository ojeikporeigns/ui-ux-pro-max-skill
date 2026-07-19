import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Newsreader, Schibsted_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/fx/SmoothScroll";
import { site } from "../../site.config";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const title = "Cable Analyst — GBP/USD Analysis & Trading Community";
const description =
  "Independent GBP/USD market analysis, risk-first trade ideas and trading education from Cable Analyst. Process over prediction, every session.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "GBP/USD",
    "Cable",
    "forex analysis",
    "trading community",
    "market analysis",
    "trading education",
    "risk management",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Cable Analyst" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@Cable_Analyst",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.name,
      url: site.url,
      sameAs: [site.links.x, site.links.linktree],
      jobTitle: "Independent Market Analyst",
      knowsAbout: ["GBP/USD", "Foreign exchange", "Risk management", "Trading education"],
    },
    {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      description,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${schibsted.variable} ${newsreader.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
