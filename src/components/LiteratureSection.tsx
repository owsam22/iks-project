import { useState } from "react";
import { literatureData } from "../data/iksData";
import { 
  Scale, 
  Atom, 
  Binary, 
  Activity, 
  Scroll, 
  ChevronDown,
  BookOpen,
  Languages,
  PenTool,
  Library
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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
    icon: <span style={{ fontSize: "24px", fontWeight: "bold" }}>ॐ</span>,
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
  "🌟": <span style={{ fontSize: "20px", fontWeight: "bold" }}>ॐ</span>,
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
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-badge">
            <BookOpen size={14} color="var(--accent-dark)" />
            <span>Unit II · Literature & Philosophy</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Sahitya, Vedas &amp; Darshanas
          </h2>
          <div className="accent-bar" style={{ margin: "0 auto 24px" }} />
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            India's literary and philosophical tradition is unmatched — from the world's oldest hymns to the most sophisticated philosophical systems ever devised.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="tab-nav-container">
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
        <div className="literature-main-grid">
          {/* Left: main info */}
          <ScrollReveal animation="slide-left" className="parchment-texture overflow-hidden" style={{
            padding: 0, borderRadius: "28px", border: "1px solid var(--border)",
            boxShadow: "var(--shadow-lg)"
          }}>
            {/* Header Image */}
            <div style={{
              width: "100%", height: "240px",
              position: "relative", overflow: "hidden",
              borderBottom: "1px solid var(--border)"
            }}>
              <img 
                src={active.image} 
                alt={active.title} 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(to top, var(--card-bg-alt), transparent 60%)`
              }} />
            </div>

            <div style={{ padding: "40px" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "20px", marginBottom: "28px"
            }}>
              <div style={{
                width: "68px", height: "68px", borderRadius: "18px",
                background: `var(--bg)`,
                border: `1.5px solid var(--border)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: active.color,
                boxShadow: "var(--shadow-sm)"
              }}>{IconMap[active.icon] || <Scroll size={32} />}</div>
              <div>
                <div className="font-ancient" style={{ fontSize: "11px", color: "var(--accent-dark)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: "6px" }}>
                  {active.period}
                </div>
                <h3 className="font-serif literature-active-title" style={{ fontWeight: 700, color: "var(--primary)", lineHeight: 1.1 }}>
                  {active.title}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--text-muted)", marginBottom: "36px", fontFamily: "Lora, serif" }}>
              {active.description}
            </p>

            {/* Examples box */}
            <div style={{
              background: "rgba(255,255,255,0.45)",
              border: `1px solid var(--border-soft)`,
              borderLeft: "4px solid var(--saffron)",
              borderRadius: "16px",
              padding: "24px 28px",
              boxShadow: "var(--shadow-sm)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <span style={{ fontSize: "20px", color: "var(--accent)" }}>✦</span>
                <span className="font-ancient" style={{ fontSize: "11px", color: "var(--accent-dark)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em" }}>
                  Key Examples & Verses
                </span>
              </div>
              <p style={{ fontSize: "15px", color: "var(--text)", lineHeight: 1.8, fontStyle: "italic", fontFamily: "Lora, serif" }}>
                {active.examples}
              </p>
            </div>
            </div>
          </ScrollReveal>

          {/* Right: subsections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h4 className="font-ancient" style={{ fontSize: "13px", color: "var(--text-light)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.25em", fontWeight: 700 }}>
              The Major Pillars
            </h4>
            {active.subsections.map((sub, i) => (
              <ScrollReveal key={i} animation="slide-right" delay={i * 100}>
                <div 
                  className="feature-card"
                  style={{
                    padding: "24px 28px",
                    borderLeft: `5px solid ${active.color}`,
                    transition: "all 0.3s ease",
                    background: "var(--card-bg)"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateX(8px)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                >
                  <div className="font-serif" style={{
                    fontSize: "20px", fontWeight: 700,
                    color: "var(--primary)", marginBottom: "8px"
                  }}>
                    {sub.name}
                  </div>
                  <p style={{ fontSize: "14.5px", color: "var(--text-muted)", lineHeight: 1.7, fontFamily: "Lora, serif" }}>
                    {sub.desc}
                  </p>
                </div>
              </ScrollReveal>
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

          <div className="shad-darshan-grid">
            {shadDarshan.map((d, i) => (
              <ScrollReveal
                key={d.name}
                animation="scale"
                delay={(i % 3) * 100}
                className="darshan-reveal-wrapper"
              >
                <div
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .tab-nav-container {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 56px;
        }
        .literature-main-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: start;
          margin-bottom: 100px;
        }
        .literature-active-title {
          font-size: 36px;
        }
        .shad-darshan-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        @media (max-width: 991px) {
          .literature-main-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .tab-nav-container {
            justify-content: flex-start;
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 12px;
            -webkit-overflow-scrolling: touch;
          }
          .literature-active-title {
            font-size: 28px;
          }
          #literature {
            padding: 80px 20px !important;
          }
        }

        @media (max-width: 640px) {
          .shad-darshan-grid {
            grid-template-columns: 1fr;
          }
          .darshan-reveal-wrapper > div {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
