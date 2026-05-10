import { useState } from "react";
import { allScholars } from "../data/iksData";
import { 
  Scroll, 
  Scale, 
  Atom, 
  Binary, 
  FlaskConical as Flask, 
  Type, 
  Telescope, 
  Compass, 
  Stars, 
  Infinity as InfinityIcon, 
  Ruler, 
  Leaf, 
  Microscope, 
  Activity, 
  FlaskRound, 
  PenTool, 
  Sprout,
  X,
  Calendar,
  ChevronRight,
  BookOpen,
  Languages,
  Gavel
} from "lucide-react";

const IconMap: Record<string, any> = {
  Scroll,
  Scale,
  Atom,
  Binary,
  FlaskConical: Flask,
  Type,
  Telescope,
  Compass,
  Stars,
  Infinity: InfinityIcon,
  Ruler,
  Leaf,
  Microscope,
  Activity,
  FlaskRound,
  PenTool,
  Sprout,
  BookOpen,
  Languages,
  Gavel,
  MilkyWay: Stars
};

type Scholar = typeof allScholars[0];

function ScholarAvatar({ scholar }: { scholar: Scholar }) {
  const Icon = IconMap[scholar.icon as string] || Scroll;
  
  if (scholar.image) {
    return (
      <div className="w-full h-full relative group overflow-hidden">
        <img 
          src={scholar.image} 
          alt={scholar.name} 
          className="w-full h-full transition-transform duration-700 group-hover:scale-105"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
          <div className="text-white">
            <div className="text-[10px] font-ancient tracking-[0.3em] uppercase opacity-70 mb-1">
              {scholar.field}
            </div>
            <div className="text-lg font-serif font-bold" style={{ color: "var(--accent-light)" }}>
              {scholar.name}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center" style={{ background: `linear-gradient(135deg, ${scholar.color}22, ${scholar.color}44)` }}>
      <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
        <Icon size={48} color={scholar.color} className="opacity-80" />
      </div>
      <div className="font-ancient text-[10px] tracking-[0.3em] uppercase opacity-50 font-bold" style={{ color: scholar.color }}>
        {scholar.field}
      </div>
    </div>
  );
}

function ScholarModal({ scholar, onClose }: { scholar: Scholar; onClose: () => void }) {
  const Icon = IconMap[scholar.icon as string] || Scroll;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box parchment-texture" onClick={(e) => e.stopPropagation()} style={{ border: `2px solid var(--accent)` }}>
        {/* Header */}
        <div style={{
          background: `linear-gradient(135deg, ${scholar.color}, ${scholar.color}CC)`,
          padding: "40px 40px 32px",
          position: "relative"
        }}>
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: "16px", right: "16px",
              width: "40px", height: "40px", borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              border: "none", cursor: "pointer",
              color: "white", fontSize: "18px",
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(4px)"
            }}
          ><X size={20} /></button>

          <div className="scholar-modal-header">
            <div className="scholar-modal-avatar">
              {scholar.image ? (
                <img src={scholar.image} alt={scholar.name} className="w-full h-full object-cover object-top" />
              ) : (
                <Icon size={60} color="white" />
              )}
            </div>

            <div>
              <div className="font-ancient" style={{
                fontSize: "13px", color: "rgba(255,255,255,0.8)",
                textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "8px"
              }}>
                {scholar.field}
              </div>
              <h2 className="font-serif scholar-modal-title" style={{
                fontWeight: 700,
                color: "white", marginBottom: "8px"
              }}>{scholar.name}</h2>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "50px", padding: "6px 16px",
                fontSize: "13px", color: "rgba(255,255,255,0.95)",
                fontWeight: 500
              }}>
                <Calendar size={14} /> {scholar.era}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "40px" }}>
          <div style={{
            background: `${scholar.color}10`,
            borderLeft: `5px solid ${scholar.color}`,
            padding: "20px 24px",
            marginBottom: "32px"
          }}>
            <p className="scholar-modal-short-desc" style={{ fontWeight: 500, color: "var(--text)", lineHeight: 1.6, fontStyle: "italic" }}>
              "{scholar.shortDesc}"
            </p>
          </div>

          <div className="scholar-modal-grid">
            <div>
              <h3 className="font-serif" style={{ fontSize: "20px", color: scholar.color, marginBottom: "12px", borderBottom: `1px solid ${scholar.color}30`, paddingBottom: "8px" }}>
                📜 Major Contributions
              </h3>
              <p style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--text)", marginBottom: "32px" }}>
                {scholar.contribution}
              </p>

              <h3 className="font-serif" style={{ fontSize: "20px", color: scholar.color, marginBottom: "12px", borderBottom: `1px solid ${scholar.color}30`, paddingBottom: "8px" }}>
                📚 Key Works
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
                {scholar.keyWorks.map((w) => (
                  <span key={w} style={{
                    background: `${scholar.color}15`,
                    border: `1px solid ${scholar.color}40`,
                    borderRadius: "4px", padding: "6px 14px",
                    fontSize: "14px", color: scholar.color, fontWeight: 600,
                    fontFamily: "Marcellus, serif"
                  }}>{w}</span>
                ))}
              </div>

              <h3 className="font-serif" style={{ fontSize: "20px", color: scholar.color, marginBottom: "12px", borderBottom: `1px solid ${scholar.color}30`, paddingBottom: "8px" }}>
                🌟 Legacy & Impact
              </h3>
              <p style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--text)" }}>
                {scholar.legacy}
              </p>
            </div>

            <div>
              <h3 className="font-serif" style={{ fontSize: "20px", color: scholar.color, marginBottom: "16px" }}>
                ⚡ Quick Facts
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {scholar.facts.map((f, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: "12px",
                    background: "rgba(0,0,0,0.03)", borderRadius: "12px",
                    padding: "16px", border: "1px solid rgba(0,0,0,0.05)"
                  }}>
                    <Icon size={16} color={scholar.color} style={{ marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ fontSize: "14px", color: "var(--text)", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FILTER_TABS = [
  { key: "all", label: "All Scholars", icon: <Scroll size={18} /> },
  { key: "philosophy", label: "Philosophy & Lit", icon: <Languages size={18} /> },
  { key: "mathematics", label: "Math & Astronomy", icon: <Compass size={18} /> },
  { key: "medicine", label: "Medicine & Yoga", icon: <Leaf size={18} /> },
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
      background: "var(--bg-alt)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Top saffron border */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px",
        background: "linear-gradient(90deg, transparent, var(--saffron), var(--accent), var(--saffron), transparent)"
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1300px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="unit-badge" style={{ marginBottom: "20px" }}>
            <span style={{ fontSize: "18px", color: "var(--accent-dark)" }}>ॐ</span>
            <span>Unit II · The Great Masters</span>
          </div>
          <h2 className="font-serif section-title" style={{ marginBottom: "16px", fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
            Ancient Scholars &amp; Rishis
          </h2>
          <div className="accent-bar" style={{ margin: "0 auto 20px" }} />
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            Witness the architects of Indian thought — mathematicians who invented zero, surgeons who pioneered plastic surgery, and linguists who codified the world's most perfect grammar.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: "flex", gap: "12px", justifyContent: "center",
          flexWrap: "wrap", marginBottom: "56px"
        }}>
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`tab-btn font-ancient ${activeFilter === tab.key ? "active" : ""}`}
              style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 24px" }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "32px"
        }}>
          {filtered.map((scholar) => {
            return (
              <div
                key={scholar.id}
                className="scholar-card group"
                onClick={() => setSelectedScholar(scholar)}
                style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "12px" }}
              >
                {/* Stylized Avatar block */}
                <div style={{
                  height: "220px", overflow: "hidden", position: "relative",
                }}>
                  <ScholarAvatar scholar={scholar} />
                  
                  {/* Overlay gradient */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: "120px",
                    background: `linear-gradient(transparent, rgba(0,0,0,0.6))`
                  }} />
                  {/* Era badge */}
                  <div style={{
                    position: "absolute", top: "16px", right: "16px",
                    background: "rgba(27, 38, 59, 0.85)",
                    borderRadius: "4px", padding: "6px 14px",
                    fontSize: "12px", color: "white",
                    backdropFilter: "blur(4px)",
                    fontFamily: "Marcellus, serif",
                    border: "1px solid rgba(212, 175, 55, 0.3)"
                  }}>
                    {scholar.era}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "24px" }}>
                  <div className="font-ancient" style={{
                    fontSize: "12px", color: scholar.color, fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "8px"
                  }}>
                    {scholar.field}
                  </div>
                  <h3 className="font-serif" style={{
                    fontSize: "24px", fontWeight: 700,
                    color: "var(--primary)", marginBottom: "10px"
                  }}>
                    {scholar.name}
                  </h3>
                  <p style={{
                    fontSize: "14px", color: "var(--text-light)",
                    lineHeight: 1.7, marginBottom: "20px",
                    height: "72px", overflow: "hidden",
                    display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical"
                  }}>
                    {scholar.shortDesc}
                  </p>
                  <div className="flex items-center gap-2 text-accent-dark font-bold font-serif text-sm group-hover:gap-4 transition-all">
                    <span>View Profile</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom quote */}
        <div style={{
          textAlign: "center", marginTop: "72px",
          padding: "40px 48px",
          background: "var(--card-bg)",
          borderRadius: "20px",
          border: "1px solid var(--border-soft)",
          borderLeft: "4px solid var(--saffron)",
          maxWidth: "860px", margin: "72px auto 0",
          boxShadow: "var(--shadow-sm)"
        }}>
          <div style={{ fontSize: "28px", color: "var(--accent)", marginBottom: "12px", opacity: 0.6 }}>"</div>
          <p style={{
            fontFamily: "Lora, serif",
            fontSize: "17px", color: "var(--text-muted)",
            fontStyle: "italic", lineHeight: 1.85
          }}>
            Knowledge was not merely information to be collected, but a spiritual discipline to be realized.
            These scholars harmonized empirical observation with philosophical depth.
          </p>
        </div>
      </div>

      {selectedScholar && (
        <ScholarModal scholar={selectedScholar} onClose={() => setSelectedScholar(null)} />
      )}
      <style>{`
        .scholar-modal-header {
          display: flex;
          gap: 28px;
          align-items: center;
        }
        .scholar-modal-avatar {
          width: 120px;
          height: 120px;
          border-radius: 20px;
          overflow: hidden;
          flex-shrink: 0;
          border: 4px solid rgba(255,255,255,0.3);
          background: rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }
        .scholar-modal-title {
          font-size: 32px;
        }
        .scholar-modal-short-desc {
          font-size: 18px;
        }
        .scholar-modal-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 40px;
        }

        @media (max-width: 768px) {
          .scholar-modal-header {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          .scholar-modal-avatar {
            width: 100px;
            height: 100px;
          }
          .scholar-modal-title {
            font-size: 24px;
          }
          .scholar-modal-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .scholar-modal-short-desc {
            font-size: 16px;
          }
          .modal-box {
            max-height: 95vh;
            border-radius: 16px;
          }
        }

        @media (max-width: 480px) {
          .scholar-card {
            margin-bottom: 16px;
          }
          #scholars {
            padding: 60px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
