export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const pillars = [
    { icon: "📐", label: "Mathematics", sub: "Aryabhata · Brahmagupta", id: "scholars" },
    { icon: "🌿", label: "Medicine", sub: "Charaka · Sushruta", id: "scholars" },
    { icon: "🔤", label: "Literature", sub: "Vedas · Upanishads", id: "literature" },
    { icon: "🧘", label: "Philosophy", sub: "6 Darshanas · Yoga", id: "literature" },
    { icon: "🏛️", label: "Architecture", sub: "Vastu · Shilpa", id: "shastra" },
    { icon: "🌱", label: "Conservation", sub: "IKS Preservation", id: "conservation" },
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(8,18,35,0.88) 0%, rgba(31,58,95,0.75) 50%, rgba(60,30,10,0.70) 100%)"
      }} />

      {/* Mandala watermark */}
      <div style={{
        position: "absolute", right: "-5%", top: "50%",
        transform: "translateY(-50%)",
        fontSize: "50vw", opacity: 0.03, pointerEvents: "none",
        userSelect: "none", lineHeight: 1
      }}>☸️</div>

      <div style={{
        position: "relative", zIndex: 2,
        padding: "120px clamp(20px, 6vw, 96px) 60px",
        maxWidth: "1400px", margin: "0 auto", width: "100%"
      }}>

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(200,169,81,0.12)",
          border: "1px solid rgba(200,169,81,0.35)",
          borderRadius: "50px", padding: "6px 18px",
          marginBottom: "28px"
        }}>
          <span style={{ fontSize: "12px" }}>🎓</span>
          <span style={{ fontSize: "12px", color: "#C8A951", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500 }}>
            Digital Museum · Academic Project
          </span>
        </div>

        {/* Hero content in 2 col */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>

          {/* Left: Text */}
          <div>
            <div className="font-devanagari" style={{
              fontSize: "clamp(16px, 2vw, 22px)",
              color: "rgba(200,169,81,0.85)",
              marginBottom: "12px",
              letterSpacing: "0.08em"
            }}>
              सा विद्या या विमुक्तये
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "24px", fontStyle: "italic" }}>
              "True knowledge is that which liberates"
            </div>

            <h1 className="font-serif" style={{
              fontSize: "clamp(36px, 5.5vw, 72px)",
              fontWeight: 900, color: "#F8F5F0",
              lineHeight: 1.1, marginBottom: "24px"
            }}>
              Indian<br />
              <span className="gold-shimmer">Knowledge</span><br />
              System
            </h1>

            <p style={{
              fontSize: "clamp(15px, 1.4vw, 18px)",
              color: "rgba(248,245,240,0.75)",
              lineHeight: 1.8, maxWidth: "480px",
              marginBottom: "40px"
            }}>
              A structured, immersive exploration of India's 5,000-year intellectual heritage — from Vedic mathematics and Ayurvedic medicine to Sanskrit grammar and philosophical traditions that shaped the modern world.
            </p>

            {/* Stats row */}
            <div style={{ display: "flex", gap: "32px", marginBottom: "40px" }}>
              {[
                { num: "5000+", label: "Years of Knowledge" },
                { num: "20+", label: "Ancient Scholars" },
                { num: "6", label: "Philosophy Schools" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif" style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#C8A951" }}>
                    {s.num}
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button
                onClick={() => scrollTo("scholars")}
                style={{
                  padding: "14px 32px", borderRadius: "50px",
                  background: "linear-gradient(135deg, #C8A951, #A07830)",
                  color: "#0a0f1a", fontWeight: 700,
                  fontSize: "15px", border: "none", cursor: "pointer",
                  letterSpacing: "0.03em",
                  boxShadow: "0 8px 32px rgba(200,169,81,0.35)",
                  transition: "all 0.3s ease",
                  fontFamily: "inherit"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                🏛️ Explore Scholars
              </button>
              <button
                onClick={() => scrollTo("introduction")}
                style={{
                  padding: "14px 32px", borderRadius: "50px",
                  background: "transparent",
                  color: "rgba(248,245,240,0.9)", fontWeight: 500,
                  fontSize: "15px",
                  border: "1.5px solid rgba(248,245,240,0.3)",
                  cursor: "pointer", letterSpacing: "0.03em",
                  transition: "all 0.3s ease",
                  fontFamily: "inherit"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#C8A951";
                  (e.currentTarget as HTMLElement).style.color = "#C8A951";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(248,245,240,0.3)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(248,245,240,0.9)";
                }}
              >
                📖 Start Learning
              </button>
            </div>
          </div>

          {/* Right: Pillar cards */}
          <div>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "16px"
            }}>
              {pillars.map((p) => (
                <button
                  key={p.label}
                  onClick={() => scrollTo(p.id)}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(200,169,81,0.2)",
                    borderRadius: "16px",
                    padding: "20px 16px",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontFamily: "inherit"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(200,169,81,0.1)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,81,0.5)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,81,0.2)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ fontSize: "28px", marginBottom: "8px" }}>{p.icon}</div>
                  <div style={{ color: "#F8F5F0", fontWeight: 600, fontSize: "15px", marginBottom: "4px" }}>{p.label}</div>
                  <div style={{ color: "rgba(200,169,81,0.7)", fontSize: "12px" }}>{p.sub}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="scroll-indicator"
          onClick={() => scrollTo("introduction")}
          style={{
            marginTop: "60px", textAlign: "center", cursor: "pointer",
            color: "rgba(255,255,255,0.4)", fontSize: "13px", letterSpacing: "0.15em"
          }}
        >
          <div style={{ marginBottom: "8px", textTransform: "uppercase" }}>Scroll to Explore</div>
          <div style={{ fontSize: "20px" }}>⌄</div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero > div > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
          #hero > div > div:nth-child(3) > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
