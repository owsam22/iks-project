import { useState } from "react";
import { literatureData } from "../data/iksData";
import { 
  Scale, 
  Atom, 
  Binary, 
  Activity, 
  Scroll, 
  Sparkles,
  ChevronDown,
  BookOpen,
  Languages,
  PenTool,
  Library
} from "lucide-react";

const shadDarshan = [
  {
    name: "Nyaya",
    icon: <Scale size={24} />,
    color: "#1F3A5F",
    founder: "Aksha Pada Gautama",
    core: "Logic & Epistemology",
    desc: "System of valid reasoning. Identified 4 Pramanas (sources of valid knowledge): Pratyaksha (perception), Anumana (inference), Upamana (comparison), Shabda (testimony). Foundation of Indian legal reasoning.",
    modern: "Indian judicial system uses Nyaya-like logical framework"
  },
  {
    name: "Vaisheshika",
    icon: <Atom size={24} />,
    color: "#8B4513",
    founder: "Kanada",
    core: "Atomism & Categories",
    desc: "World is made of Paramanu (atoms). Categorised reality into 7 Padarthas (substances, qualities, actions, generality, particularity, inherence, absence). First atomic theory — 600 BCE.",
    modern: "Conceptually parallels modern atomic and quantum theory"
  },
  {
    name: "Samkhya",
    icon: <Binary size={24} />,
    color: "#4A235A",
    founder: "Kapila Muni",
    core: "Enumeration & Cosmology",
    desc: "Reality is dual: Purusha (consciousness, unchanging) and Prakriti (matter, ever-changing). 25 Tattvas (cosmic principles) explain existence. Foundation of Yoga philosophy.",
    modern: "Influenced Jungian psychology; Purusha/Prakriti parallels observer/universe in physics"
  },
  {
    name: "Yoga",
    icon: <Activity size={24} />,
    color: "#1E8449",
    founder: "Maharishi Patanjali",
    core: "Discipline & Liberation",
    desc: "Eight-limbed path (Ashtanga): Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi. Systematic science of mind-body integration and consciousness.",
    modern: "300M+ practitioners; WHO recognises therapeutic benefits of yoga"
  },
  {
    name: "Mimamsa",
    icon: <Scroll size={24} />,
    color: "#922B21",
    founder: "Jaimini",
    core: "Ritual & Hermeneutics",
    desc: "Rigorous analysis of Vedic injunctions and ritual actions. Developed sophisticated linguistic analysis and theories of meaning, inference, and deontological ethics.",
    modern: "Influenced Indian hermeneutics, linguistics, and legal interpretation"
  },
  {
    name: "Vedanta",
    icon: <Sparkles size={24} />,
    color: "#C8A951",
    founder: "Badarayana / Adi Shankaracharya",
    core: "Non-duality & Ultimate Reality",
    desc: "Brahman is the only reality. Atman = Brahman. Three schools: Advaita (Shankara — pure non-dualism), Vishishtadvaita (Ramanuja), Dvaita (Madhva). Most globally influential Indian philosophy.",
    modern: "Influenced Vivekananda, Emerson, Schopenhauer, Aldous Huxley, and modern mindfulness"
  }
];

const IconMap: Record<string, any> = {
  "📜": <Scroll size={20} />,
  "⚖️": <Scale size={20} />,
  "⚛️": <Atom size={20} />,
  "☯️": <Binary size={20} />,
  "🧘": <Activity size={20} />,
  "🌟": <Sparkles size={20} />,
  "📚": <BookOpen size={20} />,
  "🌐": <Languages size={20} />,
  "✍️": <PenTool size={20} />,
  "🏛️": <Library size={20} />
};

export default function LiteratureSection() {
  const [activeTab, setActiveTab] = useState("vedas");
  const [expandedDarshan, setExpandedDarshan] = useState<string | null>(null);

  const active = literatureData.find((t) => t.id === activeTab) || literatureData[0];

  return (
    <section id="literature" style={{
      padding: "100px clamp(20px, 6vw, 96px)",
      background: "var(--bg)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/images/literature-bg.png')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.35
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1300px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="unit-badge">
            <BookOpen size={16} color="var(--accent-dark)" />
            <span>Unit II · Literature & Philosophy</span>
          </div>
          <h2 className="font-serif section-title" style={{ marginBottom: "20px" }}>
            Sahitya, Vedas & Darshanas
          </h2>
          <div className="accent-bar" style={{ margin: "0 auto 24px", width: "80px" }} />
          <p className="section-subtitle" style={{ maxWidth: "650px", margin: "0 auto", fontSize: "1.2rem" }}>
            India's literary and philosophical tradition is unmatched — from the world's oldest hymns to the most sophisticated philosophical systems ever devised.
          </p>
        </div>

        {/* Tab navigation */}
        <div style={{
          display: "flex", gap: "12px", justifyContent: "center",
          flexWrap: "wrap", marginBottom: "56px", overflowX: "auto"
        }}>
          {literatureData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn font-ancient ${activeTab === tab.id ? "active" : ""}`}
              style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 24px" }}
            >
              {IconMap[tab.icon] || <Scroll size={18} />} {tab.title}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{
          display: "grid", gridTemplateColumns: "1.1fr 0.9fr",
          gap: "60px", alignItems: "start",
          marginBottom: "100px"
        }}>
          {/* Left: main info */}
          <div className="parchment-texture" style={{
            padding: "40px", borderRadius: "24px", border: "1px solid var(--border)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.05)"
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px"
            }}>
              <div style={{
                width: "64px", height: "64px", borderRadius: "16px",
                background: `${active.color}15`,
                border: `1px solid ${active.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: active.color
              }}>{IconMap[active.icon] || <Scroll size={32} />}</div>
              <div>
                <div className="font-ancient" style={{ fontSize: "12px", color: active.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "4px" }}>
                  {active.period}
                </div>
                <h3 className="font-serif" style={{ fontSize: "32px", fontWeight: 700, color: "var(--primary)" }}>
                  {active.title}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--text)", marginBottom: "32px" }}>
              {active.description}
            </p>

            {/* Examples box */}
            <div style={{
              background: "white",
              border: `1px solid ${active.color}20`,
              borderRadius: "16px",
              padding: "24px",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.02)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <Sparkles size={16} color="var(--accent-dark)" />
                <span style={{ fontSize: "13px", color: "var(--accent-dark)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Key Examples
                </span>
              </div>
              <p style={{ fontSize: "14px", color: "var(--text)", lineHeight: 1.8, fontStyle: "italic" }}>
                {active.examples}
              </p>
            </div>
          </div>

          {/* Right: subsections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4 className="font-ancient" style={{ fontSize: "16px", color: "var(--primary)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>
              Major Components
            </h4>
            {active.subsections.map((sub, i) => (
              <div key={i} style={{
                background: "white",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "24px",
                borderLeft: `5px solid ${active.color}`,
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(8px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
              >
                <div className="font-serif" style={{
                  fontSize: "18px", fontWeight: 700,
                  color: active.color, marginBottom: "8px"
                }}>
                  {sub.name}
                </div>
                <p style={{ fontSize: "14px", color: "var(--text-light)", lineHeight: 1.7 }}>
                  {sub.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Shad Darshan section */}
        <div style={{
          background: "rgba(27, 38, 59, 0.03)",
          borderRadius: "40px",
          padding: "80px clamp(20px, 4vw, 60px)",
          border: "1px solid rgba(27, 38, 59, 0.08)"
        }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h3 className="font-serif" style={{
              fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700,
              color: "var(--primary)", marginBottom: "16px"
            }}>
              Shad Darshanas
            </h3>
            <div className="font-ancient" style={{ fontSize: "14px", color: "var(--accent-dark)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
              The Six Philosophical Schools
            </div>
            <div className="accent-bar" style={{ margin: "0 auto 24px", width: "60px" }} />
            <p style={{ fontSize: "16px", color: "var(--text-light)", maxWidth: "700px", margin: "0 auto", lineHeight: 1.8 }}>
              Six systematic philosophical schools that together form the most comprehensive philosophical tradition in human history. Each explores reality, knowledge, and liberation from a unique epistemological perspective.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px"
          }}>
            {shadDarshan.map((d) => (
              <div
                key={d.name}
                onClick={() => setExpandedDarshan(expandedDarshan === d.name ? null : d.name)}
                style={{
                  background: "white",
                  border: expandedDarshan === d.name ? `2px solid var(--accent)` : "1px solid var(--border)",
                  borderRadius: "24px",
                  padding: "32px",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: expandedDarshan === d.name ? `0 20px 40px rgba(212, 175, 55, 0.15)` : "0 4px 20px rgba(0,0,0,0.02)"
                }}
                onMouseEnter={(e) => {
                  if (expandedDarshan !== d.name) {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-light)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (expandedDarshan !== d.name) {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "16px" }}>
                  <div style={{
                    width: "60px", height: "60px", borderRadius: "16px",
                    background: `${d.color}10`,
                    border: `1px solid ${d.color}20`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: d.color, flexShrink: 0
                  }}>{d.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div className="font-serif" style={{ fontSize: "22px", fontWeight: 700, color: d.color }}>
                      {d.name}
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--text-light)", fontWeight: 500 }}>{d.core}</div>
                  </div>
                  <div style={{
                    color: d.color, transition: "transform 0.3s ease",
                    transform: expandedDarshan === d.name ? "rotate(180deg)" : "rotate(0)"
                  }}>
                    <ChevronDown size={20} />
                  </div>
                </div>

                <div className="font-ancient" style={{ fontSize: "12px", color: "var(--text-light)", marginBottom: expandedDarshan === d.name ? "20px" : "0", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Founder: <strong style={{ color: "var(--primary)" }}>{d.founder}</strong>
                </div>

                {expandedDarshan === d.name && (
                  <div style={{ animation: "fadeIn 0.4s ease" }}>
                    <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--text)", marginBottom: "20px" }}>
                      {d.desc}
                    </p>
                    <div style={{
                      background: `${d.color}05`,
                      borderLeft: `4px solid ${d.color}`,
                      borderRadius: "0 12px 12px 0", padding: "16px 20px"
                    }}>
                      <div className="font-ancient" style={{ fontSize: "11px", color: d.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>
                        Modern Context
                      </div>
                      <p style={{ fontSize: "13px", color: "var(--text-light)", lineHeight: 1.6 }}>{d.modern}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 991px) {
          #literature > div > div:nth-of-type(3) {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
