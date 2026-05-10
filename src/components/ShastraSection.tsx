import { useState } from "react";
import { shastraData } from "../data/iksData";
import { 
  Scale, 
  Languages, 
  Sprout, 
  Palette, 
  Building2, 
  Music,
  ChevronDown,
  Globe,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const IconMap: Record<string, any> = {
  Scale: <Scale size={28} />,
  Languages: <Languages size={28} />,
  Sprout: <Sprout size={28} />,
  Palette: <Palette size={28} />,
  Building2: <Building2 size={28} />,
  Music: <Music size={28} />
};

export default function ShastraSection() {
  const [activeShatra, setActiveShastra] = useState<string | null>(null);

  return (
    <section id="shastra" style={{
      padding: "120px clamp(20px, 6vw, 96px)",
      background: "var(--bg-alt)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/images/unit3-bg.png')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.35, pointerEvents: "none"
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1300px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-badge">
            <span className="font-serif" style={{ fontSize: "14px", color: "var(--accent-dark)" }}>ॐ</span>
            <span>Unit III · Applied Knowledge</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Shastras — The Applied Sciences
          </h2>
          <div className="accent-bar" style={{ margin: "0 auto 24px" }} />
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            Beyond philosophy — India systematised every domain of human application into formal Shastras (sciences), from linguistics and music to architecture and agriculture.
          </p>
        </div>

        {/* Shastra cards - 2×3 grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
          gap: "32px",
          marginBottom: "100px"
        }}>
          {shastraData.map((s, i) => (
            <ScrollReveal key={s.name} animation="slide-up" delay={(i % 3) * 100}>
              <div
                onClick={() => setActiveShastra(activeShatra === s.name ? null : s.name)}
                style={{
                  background: "var(--card-bg)",
                  borderRadius: "24px",
                  border: activeShatra === s.name ? `2px solid var(--accent)` : "1px solid var(--border-soft)",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: activeShatra === s.name ? `var(--shadow-lg)` : "var(--shadow-sm)",
                  transform: activeShatra === s.name ? "translateY(-8px)" : "translateY(0)"
                }}
              >
                {/* Card header */}
                <div style={{
                  background: s.gradient,
                  padding: "36px 32px 28px",
                  position: "relative", overflow: "hidden"
                }}>
                  {/* Background Image Overlay */}
                  <img 
                    src={s.image} 
                    alt="" 
                    style={{
                      position: "absolute", inset: 0, 
                      width: "100%", height: "100%", 
                      objectFit: "cover", opacity: 0.18,
                      mixBlendMode: "overlay"
                    }}
                  />
                  
                  <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: "20px" }}>
                    <div style={{
                      width: "60px", height: "60px", borderRadius: "14px",
                      background: "rgba(255,255,255,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "white", flexShrink: 0,
                      border: "1px solid rgba(255,255,255,0.25)",
                      backdropFilter: "blur(8px)"
                    }}>{IconMap[s.icon]}</div>
                    <div style={{ flex: 1 }}>
                      <h3 className="font-serif" style={{
                        fontSize: "24px", fontWeight: 700, color: "white",
                        marginBottom: "4px", letterSpacing: "0.02em"
                      }}>{s.name}</h3>
                      <div className="font-ancient" style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>{s.desc}</div>
                    </div>
                    <div style={{
                      color: "white",
                      transition: "transform 0.4s ease",
                      transform: activeShatra === s.name ? "rotate(180deg)" : "rotate(0)",
                      opacity: 0.8
                    }}>
                      <ChevronDown size={22} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "32px" }}>
                  <p style={{
                    fontSize: "15px", lineHeight: 1.85, color: "var(--text-muted)",
                    fontFamily: "Lora, serif",
                    marginBottom: activeShatra === s.name ? "28px" : "0",
                    display: "-webkit-box",
                    WebkitLineClamp: activeShatra === s.name ? "none" : 3,
                    WebkitBoxOrient: "vertical",
                    overflow: activeShatra === s.name ? "visible" : "hidden"
                  }}>
                    {s.detail}
                  </p>

                  {activeShatra === s.name && (
                    <div style={{ animation: "fadeIn 0.5s ease" }}>
                      {/* Indian example */}
                      <div style={{
                        background: "rgba(201,168,76,0.06)",
                        borderLeft: `4px solid ${s.color}`,
                        borderRadius: "0 12px 12px 0", padding: "20px 24px",
                        marginBottom: "28px",
                        border: "1px solid rgba(201,168,76,0.15)",
                        borderLeftWidth: "4px"
                      }}>
                        <div style={{
                          fontSize: "11px", color: "var(--accent-dark)", fontWeight: 700,
                          textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "10px"
                        }}>
                          🏺 Historical Heritage
                        </div>
                        <p style={{ fontSize: "14px", color: "var(--text)", lineHeight: 1.75, fontStyle: "italic", fontFamily: "Lora, serif" }}>{s.example}</p>
                      </div>

                      {/* Modern link */}
                      <div style={{
                        display: "flex", alignItems: "flex-start", gap: "16px",
                        background: "var(--bg)",
                        border: "1px solid var(--border-soft)",
                        borderRadius: "16px", padding: "20px",
                        boxShadow: "inset 0 2px 8px rgba(0,0,0,0.02)"
                      }}>
                        <Globe size={18} color="var(--primary)" style={{ marginTop: "2px", flexShrink: 0, opacity: 0.7 }} />
                        <div>
                          <div className="font-ancient" style={{ fontSize: "11px", color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "6px" }}>
                            Global Impact
                          </div>
                          <p style={{ fontSize: "13px", color: "var(--text-light)", lineHeight: 1.65, fontFamily: "Lora, serif" }}>{s.modernLink}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 64 Kala visual */}
        <div className="parchment-texture" style={{
          borderRadius: "40px",
          padding: "80px clamp(24px, 4vw, 64px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          border: "1px solid var(--border)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.1)"
        }}>
          <div style={{
            position: "absolute", top: "-40px", right: "-40px",
            fontSize: "300px", opacity: 0.04, pointerEvents: "none"
          }}>🎭</div>

          <h3 className="font-serif" style={{
            fontSize: "clamp(28px, 4vw, 44px)", color: "var(--primary)",
            marginBottom: "16px", fontWeight: 700
          }}>
            चतुःषष्टि कलाः
          </h3>
          <div className="font-ancient" style={{ fontSize: "14px", color: "var(--accent-dark)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "32px" }}>
            The 64 Classical Arts & Disciplines
          </div>
          <p style={{ fontSize: "16px", color: "var(--text-light)", marginBottom: "48px", maxWidth: "800px", margin: "0 auto 48px", lineHeight: 1.8 }}>
            Ancient India's holistic curriculum recognized 64 distinct disciplines of learning, ranging from mathematics and alchemy to poetry, textile arts, and animal training.
          </p>

          <div style={{
            display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center",
            maxWidth: "1000px", margin: "0 auto"
          }}>
            {[
              "Sangeet (Music)", "Nritya (Dance)", "Natya (Drama)", "Sahitya (Literature)",
              "Dhanurvidya (Archery)", "Vriksha Ayurveda (Botany)", "Pottery", "Gem Cutting",
              "Cookery", "Textile Art", "Architecture", "Martial Arts",
              "Mathematics", "Astronomy", "Board Games", "Flower Arrangement",
              "Animal Training", "Alchemy", "Weaving", "Oratory",
              "Painting", "Calligraphy", "Illusion Arts", "Mensuration"
            ].map((art) => (
              <div key={art} style={{
                background: "white",
                border: "1px solid var(--border)",
                borderRadius: "50px",
                padding: "10px 24px",
                fontSize: "14px", color: "var(--text)",
                transition: "all 0.3s ease",
                cursor: "default",
                fontWeight: 600,
                fontFamily: "Marcellus, serif"
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--accent-light)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "white";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                {art}
              </div>
            ))}
            <div style={{
              background: "var(--primary)",
              border: "1px solid var(--primary)",
              borderRadius: "50px",
              padding: "10px 24px",
              fontSize: "14px", color: "white",
              fontWeight: 700,
              fontFamily: "Cinzel, serif"
            }}>
              + 40 More
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 991px) {
          #shastra > div > div:nth-of-type(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
