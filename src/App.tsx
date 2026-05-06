import { useState, useEffect } from "react";
import DoorIntro from "./components/DoorIntro";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IntroductionSection from "./components/IntroductionSection";
import ScholarsSection from "./components/ScholarsSection";
import LiteratureSection from "./components/LiteratureSection";
import ShastraSection from "./components/ShastraSection";
import TimelineSection from "./components/TimelineSection";
import ConservationSection from "./components/ConservationSection";
import Footer from "./components/Footer";
import { ChevronUp } from "lucide-react";

export default function App() {
  const [doorDone, setDoorDone] = useState(false);
  const [mainVisible, setMainVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleDoorComplete = () => {
    setDoorDone(true);
    setTimeout(() => setMainVisible(true), 100);
  };

  // Lock scroll during door animation and track scroll progress
  useEffect(() => {
    if (!doorDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      
      const handleScroll = () => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [doorDone]);

  return (
    <>
      {/* Scroll Progress Bar */}
      {mainVisible && (
        <div style={{
          position: "fixed", top: 0, left: 0, height: "3px",
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, var(--accent), #F8F5F0)",
          zIndex: 9999, transition: "width 0.1s ease"
        }} />
      )}

      {!doorDone && <DoorIntro onComplete={handleDoorComplete} />}

      <div
        style={{
          opacity: mainVisible ? 1 : 0,
          transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          minHeight: "100vh",
          background: "var(--bg)"
        }}
      >
        <Navbar />
        <main>
          <HeroSection />
          <IntroductionSection />
          <ScholarsSection />
          <LiteratureSection />
          <ShastraSection />
          <TimelineSection />
          <ConservationSection />
        </main>
        <Footer />
      </div>

      {/* Back to top */}
      <BackToTop visible={mainVisible} />
    </>
  );
}

function BackToTop({ visible }: { visible: boolean }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const handle = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, [visible]);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        width: "56px",
        height: "56px",
        borderRadius: "16px",
        background: "rgba(13, 27, 42, 0.8)",
        backdropFilter: "blur(8px)",
        border: "1px solid var(--accent)",
        cursor: "pointer",
        color: "var(--accent)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3), 0 0 15px rgba(212, 175, 55, 0.2)",
        zIndex: 5000,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        animation: "fadeIn 0.5s ease"
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--accent)";
        (e.currentTarget as HTMLElement).style.color = "#0D1B2A";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-8px) scale(1.05)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(13, 27, 42, 0.8)";
        (e.currentTarget as HTMLElement).style.color = "var(--accent)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
      }}
      title="Return to peak"
    >
      <ChevronUp size={28} />
    </button>
  );
}
