import {
  Book,
  Leaf,
  Calculator,
  Users,
  Building2,
  ShieldCheck,
  ChevronDown,
  GraduationCap,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const pillars = [
    { icon: <Calculator size={22} />, label: "Mathematics", sub: "Aryabhata · Brahmagupta", id: "scholars" },
    { icon: <Leaf size={22} />, label: "Ayurveda", sub: "Charaka · Sushruta", id: "scholars" },
    { icon: <Book size={22} />, label: "Literature", sub: "Vedas · Upanishads", id: "literature" },
    { icon: <Users size={22} />, label: "Philosophy", sub: "Shad Darshanas · Yoga", id: "literature" },
    { icon: <Building2 size={22} />, label: "Architecture", sub: "Vastu · Shilpa Shastra", id: "shastra" },
    { icon: <ShieldCheck size={22} />, label: "Preservation", sub: "IKS Conservation", id: "conservation" },
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
      {/* Rich dark overlay with warm tones */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(150deg, rgba(8,14,28,0.82) 0%, rgba(13,27,42,0.75) 45%, rgba(22,12,4,0.72) 100%)",
        }}
      />

      {/* Subtle horizontal line separators */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.18), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Paper texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/natural-paper.png')",
          opacity: 0.06,
        }}
      />

      {/* Decorative OM watermark */}
      <div
        style={{
          position: "absolute",
          right: "2%",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "clamp(300px, 42vw, 560px)",
          opacity: 0.035,
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
          fontFamily: "Noto Serif Devanagari, serif",
          color: "#C9A84C",
          filter: "blur(1px)",
        }}
      >
        ॐ
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "130px clamp(20px, 6vw, 96px) 80px",
          maxWidth: "1440px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Top badge */}
        <ScrollReveal animation="slide-up">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "50px",
              padding: "8px 22px",
              marginBottom: "40px",
              backdropFilter: "blur(6px)",
            }}
          >
            <GraduationCap size={15} color="#C9A84C" />
            <span
              className="font-ancient"
              style={{
                fontSize: "11px",
                color: "#C9A84C",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Digital Museum · IKS Heritage
            </span>
          </div>
        </ScrollReveal>

        {/* 2-column content grid */}
        <div className="hero-grid">
          {/* Left: text */}
          <div>
            <ScrollReveal animation="slide-left" delay={100}>
              {/* Sanskrit verse */}
              <div
                className="font-devanagari"
                style={{
                  fontSize: "clamp(16px, 2vw, 22px)",
                  color: "rgba(201,168,76,0.85)",
                  marginBottom: "8px",
                  letterSpacing: "0.08em",
                }}
              >
                सा विद्या या विमुक्तये
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "rgba(247,241,227,0.42)",
                  marginBottom: "32px",
                  fontStyle: "italic",
                  letterSpacing: "0.06em",
                  fontFamily: "Lora, serif",
                }}
              >
                "True knowledge is that which liberates"
              </div>

              {/* Main heading */}
              <h1
                className="font-serif"
                style={{
                  fontSize: "clamp(38px, 6vw, 82px)",
                  fontWeight: 900,
                  color: "#F7F1E3",
                  lineHeight: 1.08,
                  marginBottom: "28px",
                  letterSpacing: "0.04em",
                  textShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                Indian
                <br />
                <span className="gold-shimmer">Knowledge</span>
                <br />
                System
              </h1>

              {/* Description */}
              <p
                style={{
                  fontFamily: "Lora, serif",
                  fontSize: "clamp(15px, 1.4vw, 18px)",
                  color: "rgba(247,241,227,0.72)",
                  lineHeight: 1.9,
                  maxWidth: "500px",
                  marginBottom: "48px",
                }}
              >
                Journey through the profound intellectual landscape of ancient
                India. Explore the systems of philosophy, science, and art that
                have guided human civilization for five millennia.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal animation="slide-up" delay={200}>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button className="btn-primary" onClick={() => scrollTo("scholars")}>
                  <Book size={16} /> Explore Scholars
                </button>
                <button className="btn-secondary" onClick={() => scrollTo("introduction")}>
                  Start Learning
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: pillar grid */}
          <div>
            <div className="pillar-grid">
              {pillars.map((p, i) => (
                <ScrollReveal key={p.label} animation="scale" delay={300 + i * 80}>
                  <button
                    onClick={() => scrollTo(p.id)}
                    style={{
                      width: "100%",
                      background: "rgba(247,241,227,0.04)",
                      border: "1px solid rgba(201,168,76,0.18)",
                      borderRadius: "18px",
                      padding: "24px 20px",
                      textAlign: "left",
                      cursor: "pointer",
                      transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                      fontFamily: "inherit",
                      backdropFilter: "blur(6px)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(201,168,76,0.1)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(201,168,76,0.5)";
                      (e.currentTarget as HTMLElement).style.transform =
                        "translateY(-5px)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 12px 32px rgba(0,0,0,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(247,241,227,0.04)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(201,168,76,0.18)";
                      (e.currentTarget as HTMLElement).style.transform =
                        "translateY(0)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Saffron top accent line */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0, left: 0, right: 0,
                        height: "2px",
                        background:
                          "linear-gradient(90deg, var(--saffron), var(--accent))",
                        opacity: 0,
                        transition: "opacity 0.3s",
                      }}
                    />
                    <div style={{ color: "#C9A84C", marginBottom: "14px" }}>
                      {p.icon}
                    </div>
                    <div
                      className="font-serif"
                      style={{
                        color: "#F7F1E3",
                        fontWeight: 700,
                        fontSize: "16px",
                        marginBottom: "5px",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {p.label}
                    </div>
                    <div
                      style={{
                        color: "rgba(247,241,227,0.45)",
                        fontSize: "12px",
                        fontFamily: "Marcellus, serif",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {p.sub}
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="scroll-indicator"
          onClick={() => scrollTo("introduction")}
          style={{
            marginTop: "72px",
            textAlign: "center",
            cursor: "pointer",
            color: "rgba(247,241,227,0.38)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            className="font-ancient"
            style={{
              fontSize: "10px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
            }}
          >
            Scroll to Explore
          </span>
          <ChevronDown size={22} />
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 64px;
          align-items: center;
        }
        .pillar-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        @media (max-width: 1100px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .hero-grid > div:first-child {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-grid > div:first-child p {
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 560px) {
          .pillar-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </section>
  );
}
