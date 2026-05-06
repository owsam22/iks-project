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
  Sparkles
} from "lucide-react";

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
      padding: "100px clamp(20px, 6vw, 96px)",
      background: "#F2E8CF",
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
          <div className="unit-badge">
            <Sparkles size={16} color="var(--primary)" />
            <span>Unit III · Applied Knowledge</span>
          </div>
          <h2 className="font-serif section-title" style={{ marginBottom: "20px" }}>
            Shastras — The Applied Sciences
          </h2>
          <div className="accent-bar" style={{ margin: "0 auto 24px", width: "80px" }} />
          <p className="section-subtitle" style={{ maxWidth: "650px", margin: "0 auto", fontSize: "1.2rem" }}>
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
          {shastraData.map((s) => (
            <div
              key={s.name}
              onClick={() => setActiveShastra(activeShatra === s.name ? null : s.name)}
              style={{
                background: "white",
                borderRadius: "24px",
                border: activeShatra === s.name ? `2px solid var(--accent)` : "1px solid var(--border)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: activeShatra === s.name ? `0 20px 60px rgba(0,0,0,0.15)` : "0 4px 24px rgba(0,0,0,0.03)",
                transform: activeShatra === s.name ? "translateY(-8px)" : "translateY(0)"
              }}
            >
              {/* Card header */}
              <div style={{
                background: s.gradient,
                padding: "32px 32px 24px",
                position: "relative", overflow: "hidden"
              }}>
                {/* Large watermark icon */}
                <div style={{
                  position: "absolute", top: "-20px", right: "-20px",
                  fontSize: "120px", opacity: 0.12, pointerEvents: "none",
                  color: "white"
                }}>{IconMap[s.icon]}</div>

                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <div style={{
                    width: "64px", height: "64px", borderRadius: "16px",
                    background: "rgba(255,255,255,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", flexShrink: 0,
                    border: "1px solid rgba(255,255,255,0.3)",
                    backdropFilter: "blur(4px)"
                  }}>{IconMap[s.icon]}</div>
                  <div style={{ flex: 1 }}>
                    <h3 className="font-serif" style={{
                      fontSize: "24px", fontWeight: 700, color: "white",
                      marginBottom: "4px"
                    }}>{s.name}</h3>
                    <div className="font-ancient" style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.desc}</div>
                  </div>
                  <div style={{
                    color: "rgba(255,255,255,0.8)",
                    transition: "transform 0.4s ease",
                    transform: activeShatra === s.name ? "rotate(180deg)" : "rotate(0)"
                  }}>
                    <ChevronDown size={24} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "32px" }}>
                <p style={{
                  fontSize: "15px", lineHeight: 1.85, color: "var(--text)",
                  marginBottom: activeShatra === s.name ? "24px" : "0",
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
                      background: "rgba(0,0,0,0.03)",
                      borderLeft: `5px solid ${s.color}`,
                      borderRadius: "4px 12px 12px 4px", padding: "20px 24px",
                      marginBottom: "24px"
                    }}>
                      <div style={{
                        fontSize: "12px", color: s.color, fontWeight: 700,
                        textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "8px"
                      }}>
                        🏺 Historical Evidence
                      </div>
                      <p style={{ fontSize: "14px", color: "var(--text)", lineHeight: 1.7, fontStyle: "italic" }}>{s.example}</p>
                    </div>

                    {/* Modern link */}
                    <div style={{
                      display: "flex", alignItems: "flex-start", gap: "16px",
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                      borderRadius: "16px", padding: "20px"
                    }}>
                      <Globe size={20} color="var(--primary)" style={{ marginTop: "4px", flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: "11px", color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "6px" }}>
                          Modern Relevance
                        </div>
                        <p style={{ fontSize: "13px", color: "var(--text-light)", lineHeight: 1.65 }}>{s.modernLink}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
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
