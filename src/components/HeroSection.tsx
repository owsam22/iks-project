import { 
  Book, 
  Leaf, 
  Calculator, 
  Users, 
  Building2, 
  ShieldCheck, 
  ChevronDown,
  GraduationCap
} from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const pillars = [
    { icon: <Calculator size={24} />, label: "Mathematics", sub: "Aryabhata · Brahmagupta", id: "scholars" },
    { icon: <Leaf size={24} />, label: "Medicine", sub: "Charaka · Sushruta", id: "scholars" },
    { icon: <Book size={24} />, label: "Literature", sub: "Vedas · Upanishads", id: "literature" },
    { icon: <Users size={24} />, label: "Philosophy", sub: "6 Darshanas · Yoga", id: "literature" },
    { icon: <Building2 size={24} />, label: "Architecture", sub: "Vastu · Shilpa", id: "shastra" },
    { icon: <ShieldCheck size={24} />, label: "Conservation", sub: "IKS Preservation", id: "conservation" },
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
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}></div>
      
      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(27, 38, 59, 0.8) 50%, rgba(45, 36, 30, 0.75) 100%)"
      }} />

      {/* Mandala watermark */}
      <div style={{
        position: "absolute", right: "-5%", top: "50%",
        transform: "translateY(-50%)",
        fontSize: "50vw", opacity: 0.04, pointerEvents: "none",
        userSelect: "none", lineHeight: 1,
        color: "var(--accent)"
      }}>☸️</div>

      <div style={{
        position: "relative", zIndex: 2,
        padding: "120px clamp(20px, 6vw, 96px) 60px",
        maxWidth: "1400px", margin: "0 auto", width: "100%"
      }}>

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          background: "rgba(212, 175, 55, 0.15)",
          border: "1px solid rgba(212, 175, 55, 0.4)",
          borderRadius: "50px", padding: "8px 20px",
          marginBottom: "32px",
          backdropFilter: "blur(4px)"
        }}>
          <GraduationCap size={16} color="var(--accent)" />
          <span className="font-ancient" style={{ fontSize: "13px", color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>
            Digital Museum · IKS Heritage
          </span>
        </div>

        {/* Hero content in 2 col */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>

          {/* Left: Text */}
          <div>
            <div className="font-devanagari" style={{
              fontSize: "clamp(18px, 2.5vw, 24px)",
              color: "rgba(212, 175, 55, 0.9)",
              marginBottom: "12px",
              letterSpacing: "0.1em"
            }}>
              सा विद्या या विमुक्तये
            </div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "28px", fontStyle: "italic", letterSpacing: "0.05em" }}>
              "True knowledge is that which liberates"
            </div>

            <h1 className="font-serif" style={{
              fontSize: "clamp(40px, 6vw, 80px)",
              fontWeight: 900, color: "#F8F5F0",
              lineHeight: 1.05, marginBottom: "28px",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)"
            }}>
              Indian<br />
              <span className="gold-shimmer">Knowledge</span><br />
              System
            </h1>

            <p style={{
              fontSize: "clamp(16px, 1.5vw, 19px)",
              color: "rgba(248,245,240,0.8)",
              lineHeight: 1.8, maxWidth: "520px",
              marginBottom: "48px"
            }}>
              Journey through the profound intellectual landscape of ancient India. Explore the systems of philosophy, science, and art that have guided human civilization for millennia.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <button
                onClick={() => scrollTo("scholars")}
                style={{
                  padding: "16px 36px", borderRadius: "50px",
                  background: "linear-gradient(135deg, var(--accent), #A67C00)",
                  color: "#0a0f1a", fontWeight: 700,
                  fontSize: "16px", border: "none", cursor: "pointer",
                  letterSpacing: "0.05em",
                  boxShadow: "0 10px 40px rgba(212, 175, 55, 0.4)",
                  transition: "all 0.3s ease",
                  fontFamily: "Cinzel, serif",
                  display: "flex", alignItems: "center", gap: "10px"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <Book size={18} /> Explore Scholars
              </button>
              <button
                onClick={() => scrollTo("introduction")}
                style={{
                  padding: "16px 36px", borderRadius: "50px",
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(248,245,240,0.95)", fontWeight: 600,
                  fontSize: "16px",
                  border: "1.5px solid rgba(212, 175, 55, 0.3)",
                  cursor: "pointer", letterSpacing: "0.05em",
                  transition: "all 0.3s ease",
                  fontFamily: "Cinzel, serif",
                  backdropFilter: "blur(8px)"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(212, 175, 55, 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212, 175, 55, 0.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                }}
              >
                Start Learning
              </button>
            </div>
          </div>

          {/* Right: Pillar cards */}
          <div>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "20px"
            }}>
              {pillars.map((p) => (
                <button
                  key={p.label}
                  onClick={() => scrollTo(p.id)}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    borderRadius: "20px",
                    padding: "24px 20px",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    fontFamily: "inherit",
                    backdropFilter: "blur(4px)"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(212, 175, 55, 0.12)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212, 175, 55, 0.2)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ color: "var(--accent)", marginBottom: "16px" }}>{p.icon}</div>
                  <div className="font-serif" style={{ color: "#F8F5F0", fontWeight: 700, fontSize: "17px", marginBottom: "6px" }}>{p.label}</div>
                  <div style={{ color: "rgba(248,245,240,0.5)", fontSize: "13px", lineHeight: 1.4 }}>{p.sub}</div>
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
            marginTop: "80px", textAlign: "center", cursor: "pointer",
            color: "rgba(255,255,255,0.4)", fontSize: "14px", letterSpacing: "0.2em",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"
          }}
        >
          <div style={{ textTransform: "uppercase", fontWeight: 500 }}>Scroll to Explore</div>
          <ChevronDown size={24} className="animate-bounce" />
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
