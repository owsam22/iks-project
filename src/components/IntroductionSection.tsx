import {
  BookOpen,
  Lightbulb,
  Globe,
  History,
  Target,
  Compass
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function IntroductionSection() {
  const pillars = [
    {
      icon: <Target size={24} />,
      title: "Holistic Vision",
      desc: "Unlike fragmented modern science, IKS views knowledge as an interconnected whole where physics, ethics, and spirituality coexist."
    },
    {
      icon: <Compass size={24} />,
      title: "Oral Tradition",
      desc: "The world's most sophisticated memory system allowed precise transmission of complex texts over millennia without a single syllable's change."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Impact",
      desc: "From the decimal system to surgical methods, Indian discoveries provided the bedrock for the global scientific revolution."
    },
  ];

  return (
    <section id="introduction" style={{
      padding: "120px clamp(20px, 6vw, 96px)",
      background: "var(--bg)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative background image */}
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "40%",
        backgroundImage: "url('/images/unit1-bg.png')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.4, pointerEvents: "none"
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* Left: Text Content */}
          <div>
            <ScrollReveal animation="slide-left">
              <div className="unit-badge">
                <BookOpen size={16} color="var(--accent-dark)" />
                <span>Unit I · Foundations</span>
              </div>

              <h2 className="font-serif section-title" style={{ marginBottom: "32px" }}>
                What is Indian Knowledge System?
              </h2>

              <div style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text)", marginBottom: "40px" }}>
                <p style={{ marginBottom: "24px" }}>
                  The <strong style={{ color: "var(--primary)" }}>Indian Knowledge System (IKS)</strong> is a comprehensive ecosystem of knowledge, encompassing both the ancient and the modern, the scientific and the spiritual. It represents a 5,000-year continuous intellectual tradition that has profoundly influenced human civilization.
                </p>
                <p>
                  From the abstract heights of Vedic philosophy to the practical depths of metallurgy, agriculture, and medicine, IKS is characterized by its empirical foundation, logical rigour, and a uniquely holistic worldview that seeks harmony between the individual, society, and the cosmos.
                </p>
              </div>
            </ScrollReveal>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {pillars.map((p, i) => (
                <ScrollReveal key={i} animation="slide-up" delay={i * 100}>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div style={{
                      width: "56px", height: "56px", borderRadius: "16px",
                      background: "white", display: "flex", alignItems: "center",
                      justifyContent: "center", color: "var(--accent-dark)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.05)", flexShrink: 0,
                      border: "1px solid var(--border)"
                    }}>
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="font-serif" style={{ fontSize: "20px", color: "var(--primary)", marginBottom: "6px" }}>{p.title}</h4>
                      <p style={{ fontSize: "15px", color: "var(--text-light)", lineHeight: 1.6 }}>{p.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Feature Image/Card */}
          <ScrollReveal animation="slide-right" className="relative">
            <div className="parchment-texture" style={{
              borderRadius: "32px", padding: "40px",
              boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
              border: "1px solid var(--border)",
              position: "relative", zIndex: 2
            }}>
              <div style={{
                width: "60px", height: "60px", borderRadius: "50%",
                background: "var(--primary)", display: "flex",
                alignItems: "center", justifyContent: "center",
                marginBottom: "24px", color: "white"
              }}>
                <History size={32} />
              </div>
              <h3 className="font-serif" style={{ fontSize: "28px", color: "var(--primary)", marginBottom: "20px" }}>
                A Living Heritage
              </h3>
              <p style={{ fontSize: "16px", color: "var(--text-light)", lineHeight: 1.7, marginBottom: "32px" }}>
                IKS is not a museum piece. It is a living tradition that continues to offer sustainable solutions for modern challenges — from climate change and mental health to data science and linguistics.
              </p>

              <div style={{
                padding: "20px", background: "rgba(255,255,255,0.5)",
                borderRadius: "16px", border: "1px dashed var(--accent)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <Lightbulb size={20} color="var(--accent-dark)" />
                  <span style={{ fontWeight: 700, color: "var(--accent-dark)", fontSize: "14px", textTransform: "uppercase" }}>Core Principle</span>
                </div>
                <p style={{ fontSize: "14px", color: "var(--text)", fontWeight: 500, fontStyle: "italic" }}>
                  "Dharma" — the principle of cosmic order and righteousness that sustains all life and knowledge.
                </p>
              </div>
            </div>

            {/* Decorative dots */}
            <div style={{
              position: "absolute", bottom: "-30px", left: "-30px",
              width: "160px", height: "160px",
              backgroundImage: "radial-gradient(var(--accent) 2px, transparent 2px)",
              backgroundSize: "20px 20px", opacity: 0.2, zIndex: 1
            }} />
          </ScrollReveal>

        </div>
      </div>
      <style>{`
        @media (max-width: 991px) {
          .intro-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          #introduction .decorative-bg {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
