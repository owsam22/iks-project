import { useState } from "react";
import { shastraData } from "../data/iksData";

export default function ShastraSection() {
  const [activeShatra, setActiveShastra] = useState<string | null>(null);

  return (
    <section id="shastra" style={{
      padding: "100px clamp(20px, 6vw, 96px)",
      background: "#F0ECE4",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative */}
      <div style={{
        position: "absolute", bottom: 0, right: 0,
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(200,169,81,0.08) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1300px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(31,58,95,0.07)",
            borderRadius: "50px", padding: "6px 20px",
            border: "1px solid rgba(31,58,95,0.15)",
            marginBottom: "16px"
          }}>
            <span style={{ fontSize: "13px", color: "var(--primary)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Unit II · Applied Knowledge
            </span>
          </div>
          <h2 className="font-serif section-title" style={{ marginBottom: "16px" }}>
            Shastra — Sciences of Application
          </h2>
          <div className="accent-bar" style={{ margin: "0 auto 20px" }} />
          <p className="section-subtitle" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Beyond philosophy — India systematised every domain of human application into formal Shastras (sciences), from grammar and music to architecture and agriculture.
          </p>
        </div>

        {/* Shastra cards - 2×3 grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "24px",
          marginBottom: "80px"
        }}>
          {shastraData.map((s) => (
            <div
              key={s.name}
              onClick={() => setActiveShastra(activeShatra === s.name ? null : s.name)}
              style={{
                background: "var(--card-bg)",
                borderRadius: "20px",
                border: activeShatra === s.name ? `2px solid ${s.color}` : "1px solid var(--border)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: activeShatra === s.name ? `0 16px 48px ${s.color}20` : "0 2px 16px rgba(0,0,0,0.04)",
                transform: activeShatra === s.name ? "translateY(-4px)" : "translateY(0)"
              }}
            >
              {/* Card header */}
              <div style={{
                background: s.gradient,
                padding: "28px 24px 20px",
                position: "relative", overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute", top: "-20px", right: "-20px",
                  fontSize: "100px", opacity: 0.1, pointerEvents: "none"
                }}>{s.emoji}</div>

                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "14px",
                    background: "rgba(255,255,255,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "28px", flexShrink: 0,
                    border: "1px solid rgba(255,255,255,0.2)"
                  }}>{s.emoji}</div>
                  <div>
                    <h3 className="font-serif" style={{
                      fontSize: "20px", fontWeight: 700, color: "white",
                      marginBottom: "4px"
                    }}>{s.name}</h3>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>{s.desc}</div>
                  </div>
                  <div style={{
                    marginLeft: "auto",
                    color: "rgba(255,255,255,0.7)", fontSize: "20px",
                    transition: "transform 0.3s ease",
                    transform: activeShatra === s.name ? "rotate(180deg)" : "rotate(0)"
                  }}>⌄</div>
                </div>
              </div>

              {/* Expanded content */}
              <div style={{ padding: "20px 24px 24px" }}>
                <p style={{
                  fontSize: "13px", lineHeight: 1.75, color: "var(--text)",
                  marginBottom: activeShatra === s.name ? "16px" : "0",
                  display: "-webkit-box",
                  WebkitLineClamp: activeShatra === s.name ? "none" : 3,
                  WebkitBoxOrient: "vertical",
                  overflow: activeShatra === s.name ? "visible" : "hidden"
                }}>
                  {s.detail}
                </p>

                {activeShatra === s.name && (
                  <div style={{ animation: "fadeIn 0.3s ease" }}>
                    {/* Indian example */}
                    <div style={{
                      background: `${s.color}0D`,
                      border: `1px solid ${s.color}25`,
                      borderRadius: "12px", padding: "14px 18px",
                      marginBottom: "14px"
                    }}>
                      <div style={{
                        fontSize: "11px", color: s.color, fontWeight: 600,
                        textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px"
                      }}>
                        🏺 Indian Example
                      </div>
                      <p style={{ fontSize: "13px", color: "var(--text)", lineHeight: 1.6 }}>{s.example}</p>
                    </div>

                    {/* Modern link */}
                    <div style={{
                      display: "flex", alignItems: "center", gap: "8px",
                      background: "rgba(31,58,95,0.05)",
                      border: "1px solid rgba(31,58,95,0.1)",
                      borderRadius: "12px", padding: "14px 18px"
                    }}>
                      <span style={{ fontSize: "16px" }}>🌐</span>
                      <div>
                        <div style={{ fontSize: "11px", color: "var(--primary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "3px" }}>
                          Modern Relevance
                        </div>
                        <p style={{ fontSize: "12px", color: "var(--text-light)", lineHeight: 1.5 }}>{s.modernLink}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 64 Kala visual */}
        <div style={{
          background: "linear-gradient(135deg, var(--primary), #0d2442)",
          borderRadius: "24px",
          padding: "48px clamp(24px, 4vw, 64px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", top: "-40px", right: "-40px",
            fontSize: "300px", opacity: 0.03, pointerEvents: "none"
          }}>🎭</div>

          <h3 className="font-serif" style={{
            fontSize: "clamp(22px, 3vw, 32px)", color: "white",
            marginBottom: "12px", fontWeight: 700
          }}>
            चतुःषष्टि कलाः — The 64 Classical Arts
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginBottom: "32px", fontStyle: "italic" }}>
            "Chatuhshashthi Kala" — Ancient India's comprehensive curriculum of 64 disciplines
          </p>

          <div style={{
            display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center",
            maxWidth: "900px", margin: "0 auto"
          }}>
            {[
              "🎵 Sangeet (Music)", "💃 Nritya (Dance)", "🎭 Natya (Drama)", "📚 Sahitya (Literature)",
              "🏹 Dhanurvidya (Archery)", "🌿 Vriksha Ayurveda (Botany)", "🏺 Pottery", "💎 Gem Cutting",
              "🔥 Cookery", "🧵 Textile Art", "🏛️ Architecture", "⚔️ Martial Arts",
              "🔢 Mathematics", "🌌 Astronomy", "🎲 Board Games", "🌸 Flower Arrangement",
              "🐘 Animal Training", "⚗️ Alchemy", "🪡 Weaving", "🗣️ Oratory",
              "🎨 Painting", "✍️ Calligraphy", "🔮 Magic & Illusion", "📏 Mensuration"
            ].map((art) => (
              <div key={art} style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(200,169,81,0.2)",
                borderRadius: "50px",
                padding: "6px 16px",
                fontSize: "12px", color: "rgba(255,255,255,0.8)",
                transition: "all 0.2s ease",
                cursor: "default"
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(200,169,81,0.15)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,81,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,81,0.2)";
                }}
              >
                {art}
              </div>
            ))}
            <div style={{
              background: "rgba(200,169,81,0.12)",
              border: "1px solid rgba(200,169,81,0.3)",
              borderRadius: "50px",
              padding: "6px 16px",
              fontSize: "12px", color: "#C8A951"
            }}>
              + 40 more disciplines
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
