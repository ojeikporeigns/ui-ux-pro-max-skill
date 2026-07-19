import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import About from "@/components/sections/About";
import WhyFollow from "@/components/sections/WhyFollow";
import Process from "@/components/sections/Process";
import Featured from "@/components/sections/Featured";
import Testimonials from "@/components/sections/Testimonials";
import CommunityCTA from "@/components/sections/CommunityCTA";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-blue focus:px-5 focus:py-2.5 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustedBy />
        <About />
        <WhyFollow />
        <Process />
        <Featured />
        <Testimonials />
        <CommunityCTA />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
