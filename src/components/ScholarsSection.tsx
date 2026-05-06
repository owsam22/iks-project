import { useState } from "react";
import { allScholars } from "../data/iksData";

type Scholar = typeof allScholars[0];

function ScholarModal({ scholar, onClose }: { scholar: Scholar; onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          background: `linear-gradient(135deg, ${scholar.color}, ${scholar.color}99)`,
          padding: "40px 40px 32px",
          position: "relative"
        }}>
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: "16px", right: "16px",
              width: "36px", height: "36px", borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              border: "none", cursor: "pointer",
              color: "white", fontSize: "18px",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}
          >✕</button>

          <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
            {/* Image or emoji avatar */}
            <div style={{
              width: "100px", height: "100px", borderRadius: "16px",
              overflow: "hidden", flexShrink: 0,
              border: "3px solid rgba(255,255,255,0.25)",
              background: "rgba(0,0,0,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              {scholar.image ? (
                <img src={scholar.image} alt={scholar.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              ) : (
                <span style={{ fontSize: "48px" }}>{scholar.emoji}</span>
              )}
            </div>

            <div>
              <div style={{
                fontSize: "12px", color: "rgba(255,255,255,0.6)",
                textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "6px"
              }}>
                {scholar.field}
              </div>
              <h2 className="font-serif" style={{
                fontSize: "28px", fontWeight: 700,
                color: "white", marginBottom: "6px"
              }}>{scholar.name}</h2>
              <div style={{
                display: "inline-flex", alignItems: "center",
                background: "rgba(255,255,255,0.15)",
                borderRadius: "50px", padding: "4px 14px",
                fontSize: "13px", color: "rgba(255,255,255,0.85)"
              }}>
                📅 {scholar.era}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "32px 40px" }}>
          {/* Short desc */}
          <div style={{
            background: `${scholar.color}10`,
            border: `1px solid ${scholar.color}30`,
            borderRadius: "12px", padding: "16px 20px",
            marginBottom: "24px"
          }}>
            <p style={{ fontSize: "16px", fontWeight: 500, color: "var(--primary)", lineHeight: 1.6 }}>
              {scholar.shortDesc}
            </p>
          </div>

          {/* Contribution */}
          <h3 className="font-serif" style={{ fontSize: "18px", color: scholar.color, marginBottom: "10px" }}>
            📖 Major Contributions
          </h3>
          <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--text)", marginBottom: "24px" }}>
            {scholar.contribution}
          </p>

          {/* Key Works */}
          <h3 className="font-serif" style={{ fontSize: "18px", color: scholar.color, marginBottom: "10px" }}>
            📚 Key Works
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
            {scholar.keyWorks.map((w) => (
              <span key={w} style={{
                background: `${scholar.color}15`,
                border: `1px solid ${scholar.color}30`,
                borderRadius: "50px", padding: "6px 16px",
                fontSize: "13px", color: scholar.color, fontWeight: 500
              }}>{w}</span>
            ))}
          </div>

          {/* Legacy */}
          <h3 className="font-serif" style={{ fontSize: "18px", color: scholar.color, marginBottom: "10px" }}>
            🌟 Legacy & Modern Impact
          </h3>
          <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--text)", marginBottom: "24px" }}>
            {scholar.legacy}
          </p>

          {/* Key Facts */}
          <h3 className="font-serif" style={{ fontSize: "18px", color: scholar.color, marginBottom: "12px" }}>
            ⚡ Quick Facts
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {scholar.facts.map((f, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "8px",
                background: "var(--bg)", borderRadius: "10px",
                padding: "10px 14px"
              }}>
                <span style={{ color: scholar.color, fontSize: "14px", marginTop: "1px" }}>◆</span>
                <span style={{ fontSize: "13px", color: "var(--text)", lineHeight: 1.5 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const FILTER_TABS = [
  { key: "all", label: "All Scholars", icon: "🏛️" },
  { key: "philosophy", label: "Philosophy & Literature", icon: "📜" },
  { key: "mathematics", label: "Mathematics & Astronomy", icon: "📐" },
  { key: "medicine", label: "Medicine & Yoga", icon: "🌿" },
];

export default function ScholarsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedScholar, setSelectedScholar] = useState<Scholar | null>(null);

  const filtered = activeFilter === "all"
    ? allScholars
    : allScholars.filter((s) => s.category === activeFilter);

  return (
    <section id="scholars" style={{
      padding: "100px clamp(20px, 6vw, 96px)",
      background: "#F0ECE4",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/images/scholars-bg.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.06
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1300px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(31,58,95,0.08)",
            borderRadius: "50px", padding: "6px 20px",
            border: "1px solid rgba(31,58,95,0.15)",
            marginBottom: "16px"
          }}>
            <span style={{ fontSize: "13px", color: "var(--primary)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Unit II · Scholar Gallery
            </span>
          </div>
          <h2 className="font-serif section-title" style={{ marginBottom: "16px" }}>
            Giants of Indian Knowledge
          </h2>
          <div className="accent-bar" style={{ margin: "0 auto 20px" }} />
          <p className="section-subtitle" style={{ maxWidth: "580px", margin: "0 auto" }}>
            These scholars built civilisational knowledge across philosophy, mathematics, medicine, and language — centuries or millennia before the West.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: "flex", gap: "10px", justifyContent: "center",
          flexWrap: "wrap", marginBottom: "48px"
        }}>
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`tab-btn ${activeFilter === tab.key ? "active" : ""}`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "24px"
        }}>
          {filtered.map((scholar) => (
            <div
              key={scholar.id}
              className="scholar-card"
              onClick={() => setSelectedScholar(scholar)}
            >
              {/* Image / color block */}
              <div style={{
                height: "200px", overflow: "hidden", position: "relative",
                background: `linear-gradient(135deg, ${scholar.color}, ${scholar.color}88)`,
              }}>
                {scholar.image ? (
                  <img
                    src={scholar.image}
                    alt={scholar.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                ) : (
                  <div style={{
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    height: "100%",
                    background: `linear-gradient(135deg, ${scholar.color}dd, ${scholar.color}66)`
                  }}>
                    <div style={{ fontSize: "70px", opacity: 0.9 }}>{scholar.emoji}</div>
                  </div>
                )}
                {/* Overlay gradient */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: "80px",
                  background: `linear-gradient(transparent, ${scholar.color}99)`
                }} />
                {/* Era badge */}
                <div style={{
                  position: "absolute", top: "12px", right: "12px",
                  background: "rgba(0,0,0,0.45)",
                  borderRadius: "50px", padding: "4px 12px",
                  fontSize: "11px", color: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(8px)"
                }}>
                  📅 {scholar.era}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "20px 22px 24px" }}>
                <div style={{
                  fontSize: "11px", color: scholar.color, fontWeight: 600,
                  textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "6px"
                }}>
                  {scholar.field}
                </div>
                <h3 className="font-serif" style={{
                  fontSize: "20px", fontWeight: 700,
                  color: "var(--primary)", marginBottom: "8px"
                }}>
                  {scholar.name}
                </h3>
                <p style={{
                  fontSize: "13px", color: "var(--text-light)",
                  lineHeight: 1.65, marginBottom: "16px"
                }}>
                  {scholar.shortDesc}
                </p>
                <div style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  color: scholar.color, fontSize: "13px", fontWeight: 500
                }}>
                  <span>View Profile</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          textAlign: "center", marginTop: "56px",
          padding: "24px 32px",
          background: "rgba(31,58,95,0.06)",
          borderRadius: "16px",
          border: "1px solid rgba(31,58,95,0.1)"
        }}>
          <p style={{ fontSize: "14px", color: "var(--text-light)" }}>
            💡 <strong>Did you know?</strong> When European mathematicians were still struggling with Roman numerals, Indian scholars had already solved quadratic equations, calculated π to multiple decimal places, and designed an atomic theory — all before 600 CE.
          </p>
        </div>
      </div>

      {selectedScholar && (
        <ScholarModal scholar={selectedScholar} onClose={() => setSelectedScholar(null)} />
      )}
    </section>
  );
}
