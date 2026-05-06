export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{
      background: "#080f1c",
      padding: "60px clamp(20px, 6vw, 96px) 32px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 0%, rgba(200,169,81,0.06) 0%, transparent 60%)"
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1300px", margin: "0 auto" }}>
        {/* Top grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "48px",
          marginBottom: "48px"
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{
                width: "42px", height: "42px", borderRadius: "10px",
                background: "linear-gradient(135deg, rgba(200,169,81,0.25), rgba(200,169,81,0.1))",
                border: "1px solid rgba(200,169,81,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px"
              }}>🕉️</div>
              <div>
                <div className="font-serif" style={{ fontSize: "20px", fontWeight: 700, color: "white" }}>
                  Indian Knowledge System
                </div>
                <div style={{ fontSize: "12px", color: "rgba(200,169,81,0.6)" }}>Digital Museum</div>
              </div>
            </div>
            <p style={{
              fontSize: "14px", color: "rgba(255,255,255,0.45)",
              lineHeight: 1.8, maxWidth: "320px", marginBottom: "24px"
            }}>
              An academic project exploring 5,000 years of Indian intellectual heritage — from Vedic mathematics to modern Ayurveda, mapped through interactive storytelling.
            </p>
            <div className="font-devanagari" style={{
              fontSize: "18px", color: "rgba(200,169,81,0.6)",
              marginBottom: "4px"
            }}>
              ज्ञानं परमं बलम्
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>
              "Knowledge is the supreme power"
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{
              fontSize: "12px", color: "#C8A951", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px"
            }}>
              Sections
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Introduction", id: "introduction" },
                { label: "Scholar Gallery", id: "scholars" },
                { label: "Literature & Vedas", id: "literature" },
                { label: "Shastra Sciences", id: "shastra" },
                { label: "Historical Timeline", id: "timeline" },
                { label: "Conservation", id: "conservation" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "rgba(255,255,255,0.45)", fontSize: "14px",
                    textAlign: "left", padding: 0, fontFamily: "inherit",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A951")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >
                  → {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Creator */}
          <div>
            <div style={{
              fontSize: "12px", color: "#C8A951", fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px"
            }}>
              Creator
            </div>

            <div style={{
              display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px"
            }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "50%",
                background: "linear-gradient(135deg, #C8A951, #8B6914)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px"
              }}>🎓</div>
              <div>
                <div style={{ color: "white", fontWeight: 600, fontSize: "16px" }}>Owsam22</div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>IKS Project Author</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[
                { icon: "🐙", label: "GitHub" },
                { icon: "💼", label: "LinkedIn" },
                { icon: "🌐", label: "Portfolio" },
                { icon: "📧", label: "Email" }
              ].map((s) => (
                <button
                  key={s.label}
                  title={s.label}
                  style={{
                    width: "38px", height: "38px", borderRadius: "10px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    cursor: "pointer", fontSize: "16px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.2s ease", fontFamily: "inherit"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(200,169,81,0.15)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,81,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(200,169,81,0.2), transparent)",
          marginBottom: "24px"
        }} />

        {/* Bottom row */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "12px"
        }}>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
            © 2025 Owsam22 · Indian Knowledge System Digital Museum · Academic Project
          </div>
          <div style={{
            display: "flex", gap: "16px", alignItems: "center"
          }}>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>Subject: Indian Knowledge System</span>
            <div style={{
              background: "rgba(200,169,81,0.12)",
              border: "1px solid rgba(200,169,81,0.25)",
              borderRadius: "50px", padding: "4px 14px",
              fontSize: "12px", color: "#C8A951"
            }}>
              🕉️ ज्ञानम् एव शक्तिः
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer [style*="gridTemplateColumns: 2fr 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
