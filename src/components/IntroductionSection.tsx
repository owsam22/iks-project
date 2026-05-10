import {
  BookOpen,
  Lightbulb,
  Globe,
  History,
  Target,
  Compass,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function IntroductionSection() {
  const pillars = [
    {
      icon: <Target size={22} />,
      title: "Holistic Vision",
      desc: "Unlike fragmented modern science, IKS views knowledge as an interconnected whole — where physics, ethics, and spirituality are woven into a single coherent fabric.",
    },
    {
      icon: <Compass size={22} />,
      title: "Oral Tradition",
      desc: "The world's most sophisticated memory system — the Guru-Shishya Parampara — transmitted complex texts without error across millennia.",
    },
    {
      icon: <Globe size={22} />,
      title: "Global Impact",
      desc: "From the decimal system and trigonometry to surgical procedures, Indian discoveries formed the bedrock for the global scientific revolution.",
    },
  ];

  return (
    <section
      id="introduction"
      style={{
        padding: "120px clamp(20px, 6vw, 96px)",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle decorative BG shape */}
      <div
        style={{
          position: "absolute",
          right: "-120px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative top border */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "3px",
          background:
            "linear-gradient(90deg, transparent, var(--saffron), var(--accent), var(--saffron), transparent)",
        }}
      />

      <div
        style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}
      >
        <div className="intro-grid">

          {/* LEFT: text content */}
          <div>
            <ScrollReveal animation="slide-left">
              <div className="unit-badge" style={{ marginBottom: "24px" }}>
                <BookOpen size={14} color="var(--accent-dark)" />
                <span>Unit I · Foundations</span>
              </div>

              <h2
                className="font-serif section-title"
                style={{ marginBottom: "12px", lineHeight: 1.18 }}
              >
                What is Indian
                <br />
                Knowledge System?
              </h2>

              <div className="accent-bar" style={{ marginBottom: "28px" }} />

              <div
                style={{
                  fontFamily: "Lora, serif",
                  fontSize: "clamp(15px, 1.4vw, 17.5px)",
                  lineHeight: 1.9,
                  color: "var(--text)",
                  marginBottom: "40px",
                }}
              >
                <p style={{ marginBottom: "20px" }}>
                  The{" "}
                  <strong style={{ color: "var(--primary)", fontWeight: 600 }}>
                    Indian Knowledge System (IKS)
                  </strong>{" "}
                  is a comprehensive ecosystem of knowledge encompassing
                  both the ancient and the modern, the scientific and the
                  spiritual. It represents a 5,000-year continuous
                  intellectual tradition that has profoundly shaped human
                  civilization.
                </p>
                <p style={{ color: "var(--text-muted)" }}>
                  From the abstract heights of Vedic philosophy to the
                  practical depths of metallurgy, agriculture, and medicine,
                  IKS is characterized by its empirical foundation, logical
                  rigour, and a uniquely holistic worldview that seeks
                  harmony between the individual, society, and cosmos.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillars */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {pillars.map((p, i) => (
                <ScrollReveal key={i} animation="slide-up" delay={i * 100}>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "flex-start",
                      padding: "20px 24px",
                      background: "var(--card-bg)",
                      borderRadius: "14px",
                      border: "1px solid var(--border-soft)",
                      boxShadow: "var(--shadow-sm)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-gold)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border-soft)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: "linear-gradient(135deg, rgba(232,137,12,0.12), rgba(201,168,76,0.12))",
                        border: "1px solid rgba(201,168,76,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--saffron)",
                        flexShrink: 0,
                      }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <h4
                        className="font-serif"
                        style={{
                          fontSize: "17px",
                          color: "var(--primary)",
                          marginBottom: "6px",
                          fontWeight: 700,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {p.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "var(--text-muted)",
                          lineHeight: 1.7,
                          fontFamily: "Lora, serif",
                        }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* RIGHT: Feature card */}
          <ScrollReveal animation="slide-right">
            <div
              className="parchment-texture"
              style={{
                borderRadius: "28px",
                padding: "44px 40px",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid var(--border)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Corner ornament */}
              <div
                style={{
                  position: "absolute",
                  top: "20px", right: "20px",
                  fontSize: "36px",
                  color: "var(--accent)",
                  opacity: 0.18,
                  fontFamily: "Noto Serif Devanagari, serif",
                }}
              >
                ॐ
              </div>

              {/* Icon */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "18px",
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "28px",
                  color: "var(--accent-light)",
                  boxShadow: "0 8px 24px rgba(13,27,42,0.25)",
                }}
              >
                <History size={30} />
              </div>

              <h3
                className="font-serif"
                style={{
                  fontSize: "clamp(22px, 2.5vw, 30px)",
                  color: "var(--primary)",
                  marginBottom: "16px",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                }}
              >
                A Living Heritage
              </h3>

              <div
                style={{
                  width: "40px", height: "2px",
                  background: "linear-gradient(90deg, var(--saffron), var(--accent))",
                  marginBottom: "20px", borderRadius: "1px",
                }}
              />

              <p
                style={{
                  fontFamily: "Lora, serif",
                  fontSize: "15px",
                  color: "var(--text-muted)",
                  lineHeight: 1.9,
                  marginBottom: "32px",
                }}
              >
                IKS is not a museum piece. It is a living tradition that
                continues to offer sustainable solutions for modern challenges
                — from climate science and mental health to data science and
                computational linguistics.
              </p>

              {/* Quote block */}
              <div
                style={{
                  padding: "20px 24px",
                  background: "rgba(255,255,255,0.55)",
                  borderRadius: "14px",
                  border: "1px solid var(--border-soft)",
                  borderLeft: "4px solid var(--saffron)",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <Lightbulb size={16} color="var(--saffron)" />
                  <span
                    className="font-ancient"
                    style={{
                      fontWeight: 700,
                      color: "var(--saffron)",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    Core Principle
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text)",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                    fontFamily: "Lora, serif",
                  }}
                >
                  "Dharma" — the principle of cosmic order and righteousness
                  that sustains all life, knowledge, and creation.
                </p>
              </div>

              {/* Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                {[
                  { num: "5,000+", label: "Years of tradition" },
                  { num: "1,000+", label: "Ancient texts" },
                  { num: "6", label: "Schools of thought" },
                  { num: "108", label: "Upanishads" },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      textAlign: "center",
                      padding: "16px 12px",
                      background: "rgba(255,255,255,0.5)",
                      borderRadius: "12px",
                      border: "1px solid var(--border-soft)",
                    }}
                  >
                    <div
                      className="font-serif"
                      style={{
                        fontSize: "22px",
                        fontWeight: 900,
                        color: "var(--primary)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "var(--text-light)",
                        fontFamily: "Marcellus, serif",
                        letterSpacing: "0.05em",
                        marginTop: "4px",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .intro-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .intro-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
