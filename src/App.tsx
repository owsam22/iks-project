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

export default function App() {
  const [doorDone, setDoorDone] = useState(false);
  const [mainVisible, setMainVisible] = useState(false);

  const handleDoorComplete = () => {
    setDoorDone(true);
    setTimeout(() => setMainVisible(true), 100);
  };

  // Lock scroll during door animation
  useEffect(() => {
    if (!doorDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [doorDone]);

  return (
    <>
      {!doorDone && <DoorIntro onComplete={handleDoorComplete} />}

      <div
        style={{
          opacity: mainVisible ? 1 : 0,
          transition: "opacity 0.8s ease",
          minHeight: "100vh"
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
    const handle = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, [visible]);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #C8A951, #8B6914)",
        border: "none",
        cursor: "pointer",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 24px rgba(200,169,81,0.4)",
        zIndex: 5000,
        transition: "transform 0.2s ease",
        animation: "fadeIn 0.3s ease"
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      title="Back to top"
    >
      ↑
    </button>
  );
}
