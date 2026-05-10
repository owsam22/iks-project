import { useState } from "react";
import { conservationData } from "../data/iksData";
import { 
  ScrollText, 
  Leaf, 
  ShieldCheck, 
  Globe,
  ClipboardList,
  Search,
  BookOpen,
  GraduationCap,
  Landmark,
  Stethoscope
} from "lucide-react";

const IconMap: Record<string, any> = {
  documentation: <ScrollText size={20} />,
  conservation: <Leaf size={20} />,
  strategies: <ShieldCheck size={20} />
};

const CardIconMap: Record<number, any> = {
  0: <ClipboardList size={22} />,
  1: <Search size={22} />,
  2: <ShieldCheck size={22} />,
  3: <Leaf size={22} />
};

const NepIconMap: Record<string, any> = {
  "📖": <BookOpen size={24} />,
  "🏛️": <Landmark size={24} />,
  "🌍": <Globe size={24} />,
  "💊": <Stethoscope size={24} />
};

export default function ConservationSection() {
  const [activeTab, setActiveTab] = useState<"documentation" | "conservation" | "strategies">("documentation");

  const tabs = [
    { key: "documentation" as const, label: "Documentation", icon: <ScrollText size={20} />, color: "#8B4513" },
    { key: "conservation" as const, label: "Nature Conservation", icon: <Leaf size={20} />, color: "#1E8449" },
    { key: "strategies" as const, label: "Protection & Policy", icon: <ShieldCheck size={20} />, color: "#1F3A5F" },
  ];

  const active = conservationData[activeTab];

  return (
    <section id="conservation" style={{
      padding: "120px clamp(20px, 6vw, 96px)",
      background: "var(--bg)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/images/conservation-bg.png')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.4, pointerEvents: "none"
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1300px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="section-badge">
            <ShieldCheck size={14} color="var(--accent-dark)" />
            <span>Unit III · Preservation</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Preserving Our Intellectual Heritage
          </h2>
          <div className="accent-bar" style={{ margin: "0 auto 24px" }} />
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            IKS is not just preserved in books — it lives in communities, ecosystems, and practices. Learn how India is protecting, digitising, and reviving its vast knowledge inheritance.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex", gap: "16px", justifyContent: "center",
          flexWrap: "wrap", marginBottom: "64px"
        }}>
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`tab-btn font-ancient ${activeTab === t.key ? "active" : ""}`}
              style={{
                display: "flex", alignItems: "center", gap: "10px", padding: "14px 28px",
                background: activeTab === t.key ? t.color : "white",
                color: activeTab === t.key ? "white" : "var(--text)",
                borderColor: activeTab === t.key ? t.color : "var(--border)"
              }}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "0.8fr 2.2fr",
          gap: "60px",
          alignItems: "start",
          marginBottom: "100px"
        }}>
          {/* Left: section intro */}
          <div style={{ position: "sticky", top: "100px" }}>
            <div className="parchment-texture" style={{
              borderRadius: "32px",
              padding: "48px 32px",
              textAlign: "center",
              border: "1px solid var(--border)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.08)"
            }}>
              <div style={{ 
                width: "80px", height: "80px", borderRadius: "50%",
                background: tabs.find(t => t.key === activeTab)?.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", margin: "0 auto 24px"
              }}>
                {tabs.find(t => t.key === activeTab)?.icon}
              </div>
              <h3 className="font-serif" style={{
                fontSize: "26px", fontWeight: 700,
                color: tabs.find(t => t.key === activeTab)?.color,
                marginBottom: "32px"
              }}>
                {active.title}
              </h3>

              {/* Key numbers */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {activeTab === "documentation" && [
                  { num: "10M+", label: "Manuscripts in India" },
                  { num: "5M+", label: "Pages Digitised" },
                  { num: "30+", label: "Scripts Preserved" },
                  { num: "0.3M", label: "TKDL Formulations" }
                ].map((s) => (
                  <div key={s.label} style={{
                    padding: "16px", background: "white", borderRadius: "16px",
                    border: "1px solid rgba(0,0,0,0.05)", textAlign: "center"
                  }}>
                    <div className="font-serif" style={{ fontWeight: 900, color: "#8B4513", fontSize: "24px", marginBottom: "4px" }}>{s.num}</div>
                    <div style={{ fontSize: "11px", color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>{s.label}</div>
                  </div>
                ))}
                {activeTab === "conservation" && [
                  { num: "1L+", label: "Sacred Groves in India" },
                  { num: "700+", label: "Medicinal Plants" },
                  { num: "1000s", label: "Ancient Water Systems" },
                  { num: "2002", label: "Biodiversity Act Passed" }
                ].map((s) => (
                  <div key={s.label} style={{
                    padding: "16px", background: "white", borderRadius: "16px",
                    border: "1px solid rgba(0,0,0,0.05)", textAlign: "center"
                  }}>
                    <div className="font-serif" style={{ fontWeight: 900, color: "#1E8449", fontSize: "24px", marginBottom: "4px" }}>{s.num}</div>
                    <div style={{ fontSize: "11px", color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>{s.label}</div>
                  </div>
                ))}
                {activeTab === "strategies" && [
                  { num: "200+", label: "Patents Defended" },
                  { num: "19", label: "IKS Chairs at IITs" },
                  { num: "177", label: "Nations on Yoga Day" },
                  { num: "4000+", label: "Active Gurukulas" }
                ].map((s) => (
                  <div key={s.label} style={{
                    padding: "16px", background: "white", borderRadius: "16px",
                    border: "1px solid rgba(0,0,0,0.05)", textAlign: "center"
                  }}>
                    <div className="font-serif" style={{ fontWeight: 900, color: "#1F3A5F", fontSize: "24px", marginBottom: "4px" }}>{s.num}</div>
                    <div style={{ fontSize: "11px", color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {active.points.map((point, i) => {
              const color = tabs.find(t => t.key === activeTab)?.color || "#1F3A5F";
              return (
                <div
                  key={i}
                  style={{
                    background: "white",
                    border: "1px solid var(--border)",
                    borderRadius: "24px",
                    padding: "40px",
                    borderLeft: `8px solid ${color}`,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    animation: `fadeIn 0.5s ease ${i * 0.1}s both`,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.02)"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 40px ${color}10`;
                    (e.currentTarget as HTMLElement).style.transform = "translateX(12px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.02)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
                    <div style={{
                      width: "60px", height: "60px", borderRadius: "16px",
                      background: `${color}10`,
                      border: `1px solid ${color}20`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: color, flexShrink: 0
                    }}>
                      {CardIconMap[i] || <span style={{ fontSize: "24px", fontWeight: "bold" }}>ॐ</span>}
                    </div>
                    <div>
                      <h4 className="font-serif" style={{
                        fontSize: "22px", fontWeight: 700,
                        color: color, marginBottom: "12px"
                      }}>
                        {point.title}
                      </h4>
                      <p style={{
                        fontSize: "16px", lineHeight: 1.8,
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
          background: "linear-gradient(135deg, #0A192F, #0D1B2A)",
          borderRadius: "40px",
          padding: "80px clamp(24px, 5vw, 100px)",
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(212, 175, 55, 0.25)",
          boxShadow: "var(--shadow-lg)"
        }}>
          {/* Decorative watermark */}
          <div style={{
            position: "absolute", bottom: "-50px", right: "-50px",
            fontSize: "400px", opacity: 0.04, pointerEvents: "none", color: "var(--accent)"
          }}>
            <GraduationCap size={400} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "80px", alignItems: "center", position: "relative", zIndex: 2 }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "rgba(212, 175, 55, 0.15)",
                borderRadius: "50px", padding: "8px 24px",
                border: "1px solid rgba(212, 175, 55, 0.4)",
                marginBottom: "28px"
              }}>
                <span className="font-serif" style={{ fontSize: "14px", fontWeight: "bold", color: "var(--accent)" }}>ॐ</span>
                <span className="font-ancient" style={{ fontSize: "11px", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  Modern Transformation
                </span>
              </div>
              <h3 className="font-serif" style={{
                fontSize: "clamp(36px, 4.5vw, 52px)", color: "white",
                fontWeight: 700, marginBottom: "24px", letterSpacing: "0.02em", lineHeight: 1.1
              }}>
                NEP 2020: The IKS <span className="gold-shimmer">Renaissance</span>
              </h3>
              <p style={{
                fontSize: "18px", color: "rgba(255,255,255,0.65)",
                lineHeight: 1.9, marginBottom: "40px", fontFamily: "Lora, serif"
              }}>
                The National Education Policy 2020 marks a historic turning point, mandating the integration of Indian Knowledge Systems across all levels of the modern education system — from primary schools to advanced research at IITs.
              </p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                {["IIT Research Chairs", "Gurukula Modernisation", "Manuscript Digitisation", "Ayurveda Globalisation"].map((tag) => (
                  <div key={tag} style={{
                    padding: "10px 24px", borderRadius: "50px",
                    background: "rgba(212, 175, 55, 0.1)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    color: "var(--accent-light)", fontSize: "14px", fontWeight: 600
                  }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              {[
                { icon: "📖", title: "Curriculum Integration", desc: "Mandatory IKS modules in higher education" },
                { icon: "🏛️", title: "19 IKS Centers", desc: "Dedicated research centers established at IITs" },
                { icon: "🌍", title: "International Yoga Day", desc: "Recognized by 177 nations globally" },
                { icon: "💊", title: "AYUSH Growth", desc: "Bridging Ayurveda with modern medical research" }
              ].map((card) => (
                <div key={card.title} style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  borderRadius: "24px",
                  padding: "32px 24px",
                  backdropFilter: "blur(8px)",
                  textAlign: "center"
                }}>
                  <div style={{ 
                    width: "48px", height: "48px", borderRadius: "12px", 
                    background: "rgba(212, 175, 55, 0.1)", color: "var(--accent)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px"
                  }}>
                    {NepIconMap[card.icon]}
                  </div>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, color: "white", marginBottom: "8px" }}>{card.title}</h4>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 991px) {
          #conservation > div > div:nth-of-type(3),
          #conservation > div > div:nth-of-type(4) {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          #conservation [style*="position: sticky"] {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
