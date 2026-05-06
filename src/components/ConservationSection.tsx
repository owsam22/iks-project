import { useState } from "react";
import { conservationData } from "../data/iksData";

export default function ConservationSection() {
  const [activeTab, setActiveTab] = useState<"documentation" | "conservation" | "strategies">("documentation");

  const tabs = [
    { key: "documentation" as const, label: "Documentation", icon: "📜", color: "#8B4513" },
    { key: "conservation" as const, label: "Nature Conservation", icon: "🌿", color: "#1E8449" },
    { key: "strategies" as const, label: "Protection & Policy", icon: "🛡️", color: "#1F3A5F" },
  ];

  const active = conservationData[activeTab];

  return (
    <section id="conservation" style={{
      padding: "100px clamp(20px, 6vw, 96px)",
      background: "var(--bg)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/images/conservation-bg.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.07
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1300px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(200,169,81,0.1)",
            borderRadius: "50px", padding: "6px 20px",
            border: "1px solid rgba(200,169,81,0.25)",
            marginBottom: "16px"
          }}>
            <span style={{ fontSize: "13px", color: "#C8A951", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Unit III · Preservation & Conservation
            </span>
          </div>
          <h2 className="font-serif section-title" style={{ marginBottom: "16px" }}>
            Protecting India's Knowledge Heritage
          </h2>
          <div className="accent-bar" style={{ margin: "0 auto 20px" }} />
          <p className="section-subtitle" style={{ maxWidth: "620px", margin: "0 auto" }}>
            IKS is not just preserved in books — it lives in communities, ecosystems, and practices. Learn how India is protecting, digitising, and reviving its vast knowledge inheritance.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex", gap: "12px", justifyContent: "center",
          flexWrap: "wrap", marginBottom: "56px"
        }}>
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`tab-btn ${activeTab === t.key ? "active" : ""}`}
              style={activeTab === t.key ? { background: t.color, borderColor: t.color } : {}}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "40px",
          alignItems: "start",
          marginBottom: "80px"
        }}>
          {/* Left: section intro */}
          <div style={{
            position: "sticky", top: "84px"
          }}>
            <div style={{
              background: `linear-gradient(135deg, ${tabs.find(t => t.key === activeTab)?.color}20, ${tabs.find(t => t.key === activeTab)?.color}08)`,
              border: `1px solid ${tabs.find(t => t.key === activeTab)?.color}30`,
              borderRadius: "20px",
              padding: "32px 28px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "64px", marginBottom: "16px" }}>
                {tabs.find(t => t.key === activeTab)?.icon}
              </div>
              <h3 className="font-serif" style={{
                fontSize: "22px", fontWeight: 700,
                color: tabs.find(t => t.key === activeTab)?.color,
                marginBottom: "12px"
              }}>
                {active.title}
              </h3>

              {/* Key numbers */}
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {activeTab === "documentation" && [
                  { num: "10M+", label: "Manuscripts in India" },
                  { num: "5M+", label: "Pages Digitised" },
                  { num: "30+", label: "Scripts Preserved" },
                  { num: "0.3M", label: "TKDL Formulations" }
                ].map((s) => (
                  <div key={s.label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "8px 14px",
                    background: "rgba(255,255,255,0.5)",
                    borderRadius: "10px"
                  }}>
                    <span style={{ fontSize: "12px", color: "var(--text-light)" }}>{s.label}</span>
                    <span className="font-serif" style={{ fontWeight: 700, color: "#8B4513", fontSize: "18px" }}>{s.num}</span>
                  </div>
                ))}
                {activeTab === "conservation" && [
                  { num: "1L+", label: "Sacred Groves in India" },
                  { num: "700+", label: "Medicinal Plants (Charaka)" },
                  { num: "1000s", label: "Ancient Water Systems" },
                  { num: "2002", label: "Biodiversity Act Passed" }
                ].map((s) => (
                  <div key={s.label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "8px 14px",
                    background: "rgba(255,255,255,0.5)",
                    borderRadius: "10px"
                  }}>
                    <span style={{ fontSize: "12px", color: "var(--text-light)" }}>{s.label}</span>
                    <span className="font-serif" style={{ fontWeight: 700, color: "#1E8449", fontSize: "18px" }}>{s.num}</span>
                  </div>
                ))}
                {activeTab === "strategies" && [
                  { num: "200+", label: "Patents Defended via TKDL" },
                  { num: "19", label: "IKS Chairs at IITs" },
                  { num: "177", label: "Nations on Yoga Day" },
                  { num: "4000+", label: "Active Gurukulas in India" }
                ].map((s) => (
                  <div key={s.label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "8px 14px",
                    background: "rgba(255,255,255,0.5)",
                    borderRadius: "10px"
                  }}>
                    <span style={{ fontSize: "12px", color: "var(--text-light)" }}>{s.label}</span>
                    <span className="font-serif" style={{ fontWeight: 700, color: "#1F3A5F", fontSize: "18px" }}>{s.num}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {active.points.map((point, i) => {
              const color = tabs.find(t => t.key === activeTab)?.color || "#1F3A5F";
              return (
                <div
                  key={i}
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "18px",
                    padding: "28px 32px",
                    borderLeft: `5px solid ${color}`,
                    transition: "all 0.3s ease",
                    animation: `fadeIn 0.4s ease ${i * 0.1}s both`
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${color}15`;
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  }}
                >
                  <div style={{
                    display: "flex", alignItems: "flex-start", gap: "16px"
                  }}>
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "10px",
                      background: `${color}15`,
                      border: `1px solid ${color}25`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "18px", flexShrink: 0
                    }}>
                      {i === 0 ? "📋" : i === 1 ? "🔍" : i === 2 ? "🛡️" : "🌱"}
                    </div>
                    <div>
                      <h4 className="font-serif" style={{
                        fontSize: "18px", fontWeight: 700,
                        color: color, marginBottom: "8px"
                      }}>
                        {point.title}
                      </h4>
                      <p style={{
                        fontSize: "14px", lineHeight: 1.8,
                        color: "var(--text)"
                      }}>
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* NEP 2020 Highlight */}
        <div style={{
          background: "linear-gradient(135deg, #1E8449, #145A32)",
          borderRadius: "24px",
          padding: "48px clamp(24px, 4vw, 64px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center"
        }}>
          <div>
            <div style={{
              fontSize: "12px", color: "rgba(200,255,200,0.7)",
              textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "12px"
            }}>
              Modern Initiative
            </div>
            <h3 className="font-serif" style={{
              fontSize: "clamp(22px, 3vw, 32px)", color: "white",
              fontWeight: 700, marginBottom: "16px"
            }}>
              NEP 2020 & IKS Revival
            </h3>
            <p style={{
              fontSize: "15px", color: "rgba(255,255,255,0.8)",
              lineHeight: 1.8, marginBottom: "24px"
            }}>
              The National Education Policy 2020 mandates integration of Indian Knowledge Systems across all levels of education. It recognises the need to bridge the gap between traditional wisdom and modern science.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {["IKS Chairs at IITs", "Skill-based Gurukulas", "Sanskrit Digitisation", "Ayurveda Research"].map((tag) => (
                <span key={tag} style={{
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: "50px", padding: "6px 16px",
                  fontSize: "13px", color: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { icon: "📖", title: "Curriculum Integration", desc: "IKS topics in school and university curricula from 2024" },
              { icon: "🏛️", title: "19 IKS Chairs", desc: "Established at IITs and central universities" },
              { icon: "🌍", title: "177 Nations", desc: "Celebrate International Yoga Day on June 21" },
              { icon: "💊", title: "AYUSH Growth", desc: "₹18,000 crore Ayurveda industry and growing globally" }
            ].map((card) => (
              <div key={card.title} style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                padding: "20px 16px"
              }}>
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>{card.icon}</div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "white", marginBottom: "4px" }}>{card.title}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            [style*="gridTemplateColumns: 1fr 2fr"] {
              grid-template-columns: 1fr !important;
            }
            [style*="gridTemplateColumns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
