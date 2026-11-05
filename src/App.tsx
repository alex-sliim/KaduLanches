import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Differentials from "@/components/Differentials";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Steps from "@/components/Steps";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SocialProof from "@/components/SocialProof";
import { useRevealOnScroll } from "@/hooks/useMotion";

function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cheddar-400 via-tomato-500 to-wa-500 transition-[width] duration-150 ease-out"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}

export default function App() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-cream-100">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Differentials />
        <Menu />
        <Gallery />
        <Steps />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <SocialProof />
    </div>
  );
}
