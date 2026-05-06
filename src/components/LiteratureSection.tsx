import { useState } from "react";
import { literatureData } from "../data/iksData";

const shadDarshan = [
  {
    name: "Nyaya",
    emoji: "⚖️",
    color: "#1F3A5F",
    founder: "Aksha Pada Gautama",
    core: "Logic & Epistemology",
    desc: "System of valid reasoning. Identified 4 Pramanas (sources of valid knowledge): Pratyaksha (perception), Anumana (inference), Upamana (comparison), Shabda (testimony). Foundation of Indian legal reasoning.",
    modern: "Indian judicial system uses Nyaya-like logical framework"
  },
  {
    name: "Vaisheshika",
    emoji: "⚛️",
    color: "#8B4513",
    founder: "Kanada",
    core: "Atomism & Categories",
    desc: "World is made of Paramanu (atoms). Categorised reality into 7 Padarthas (substances, qualities, actions, generality, particularity, inherence, absence). First atomic theory — 600 BCE.",
    modern: "Conceptually parallels modern atomic and quantum theory"
  },
  {
    name: "Samkhya",
    emoji: "☯️",
    color: "#4A235A",
    founder: "Kapila Muni",
    core: "Enumeration & Cosmology",
    desc: "Reality is dual: Purusha (consciousness, unchanging) and Prakriti (matter, ever-changing). 25 Tattvas (cosmic principles) explain existence. Foundation of Yoga philosophy.",
    modern: "Influenced Jungian psychology; Purusha/Prakriti parallels observer/universe in physics"
  },
  {
    name: "Yoga",
    emoji: "🧘",
    color: "#1E8449",
    founder: "Maharishi Patanjali",
    core: "Discipline & Liberation",
    desc: "Eight-limbed path (Ashtanga): Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi. Systematic science of mind-body integration and consciousness.",
    modern: "300M+ practitioners; WHO recognises therapeutic benefits of yoga"
  },
  {
    name: "Mimamsa",
    emoji: "📜",
    color: "#922B21",
    founder: "Jaimini",
    core: "Ritual & Hermeneutics",
    desc: "Rigorous analysis of Vedic injunctions and ritual actions. Developed sophisticated linguistic analysis and theories of meaning, inference, and deontological ethics.",
    modern: "Influenced Indian hermeneutics, linguistics, and legal interpretation"
  },
  {
    name: "Vedanta",
    emoji: "🌟",
    color: "#C8A951",
    founder: "Badarayana / Adi Shankaracharya",
    core: "Non-duality & Ultimate Reality",
    desc: "Brahman is the only reality. Atman = Brahman. Three schools: Advaita (Shankara — pure non-dualism), Vishishtadvaita (Ramanuja), Dvaita (Madhva). Most globally influential Indian philosophy.",
    modern: "Influenced Vivekananda, Emerson, Schopenhauer, Aldous Huxley, and modern mindfulness"
  }
];

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
        backgroundImage: "url('/images/literature-bg.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.05
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1300px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(200,169,81,0.1)",
            borderRadius: "50px", padding: "6px 20px",
            border: "1px solid rgba(200,169,81,0.25)",
            marginBottom: "16px"
          }}>
            <span style={{ fontSize: "13px", color: "#C8A951", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Unit II · Literature & Knowledge Systems
            </span>
          </div>
          <h2 className="font-serif section-title" style={{ marginBottom: "16px" }}>
            Sahitya, Vedas & Darshanas
          </h2>
          <div className="accent-bar" style={{ margin: "0 auto 20px" }} />
          <p className="section-subtitle" style={{ maxWidth: "600px", margin: "0 auto" }}>
            India's literary and philosophical tradition is unmatched — from the world's oldest hymns to the most sophisticated philosophical systems ever devised.
          </p>
        </div>

        {/* Tab navigation */}
        <div style={{
          display: "flex", gap: "10px", justifyContent: "center",
          flexWrap: "wrap", marginBottom: "48px", overflowX: "auto"
        }}>
          {literatureData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.icon} {tab.title}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "48px", alignItems: "start",
          marginBottom: "80px"
        }}>
          {/* Left: main info */}
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px"
            }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "14px",
                background: `${active.color}15`,
                border: `1px solid ${active.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "28px"
              }}>{active.icon}</div>
              <div>
                <div style={{ fontSize: "11px", color: active.color, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "3px" }}>
                  {active.period}
                </div>
                <h3 className="font-serif" style={{ fontSize: "26px", fontWeight: 700, color: "var(--primary)" }}>
                  {active.title}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--text)", marginBottom: "28px" }}>
              {active.description}
            </p>

            {/* Examples box */}
            <div style={{
              background: `${active.color}10`,
              border: `1px solid ${active.color}25`,
              borderRadius: "14px",
              padding: "16px 20px",
              marginBottom: "24px"
            }}>
              <div style={{ fontSize: "12px", color: active.color, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>
                🏺 Indian Examples
              </div>
              <p style={{ fontSize: "13px", color: "var(--text)", lineHeight: 1.7 }}>
                {active.examples}
              </p>
            </div>
          </div>

          {/* Right: subsections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h4 className="font-serif" style={{ fontSize: "18px", color: "var(--primary)", marginBottom: "4px" }}>
              Key Components
            </h4>
            {active.subsections.map((sub, i) => (
              <div key={i} style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "18px 20px",
                borderLeft: `4px solid ${active.color}`
              }}>
                <div className="font-serif" style={{
                  fontSize: "16px", fontWeight: 600,
                  color: active.color, marginBottom: "6px"
                }}>
                  {sub.name}
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-light)", lineHeight: 1.65 }}>
                  {sub.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Shad Darshan section */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h3 className="font-serif" style={{
              fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700,
              color: "var(--primary)", marginBottom: "12px"
            }}>
              🔮 Shad Darshanas — Six Schools of Philosophy
            </h3>
            <div className="accent-bar" style={{ margin: "0 auto 16px" }} />
            <p style={{ fontSize: "14px", color: "var(--text-light)", maxWidth: "520px", margin: "0 auto" }}>
              Six systematic philosophical schools that together form the most comprehensive philosophical tradition in human history. Each explores reality, knowledge, and liberation differently — yet all point toward the same ultimate truth.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px"
          }}>
            {shadDarshan.map((d) => (
              <div
                key={d.name}
                onClick={() => setExpandedDarshan(expandedDarshan === d.name ? null : d.name)}
                style={{
                  background: "var(--card-bg)",
                  border: expandedDarshan === d.name ? `2px solid ${d.color}` : "1px solid var(--border)",
                  borderRadius: "20px",
                  padding: "24px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: expandedDarshan === d.name ? `0 8px 32px ${d.color}25` : "none"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "14px",
                    background: `${d.color}15`,
                    border: `1px solid ${d.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "26px", flexShrink: 0
                  }}>{d.emoji}</div>
                  <div>
                    <div className="font-serif" style={{ fontSize: "20px", fontWeight: 700, color: d.color }}>
                      {d.name}
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--text-light)" }}>{d.core}</div>
                  </div>
                  <div style={{
                    marginLeft: "auto", fontSize: "18px",
                    color: d.color, transition: "transform 0.3s ease",
                    transform: expandedDarshan === d.name ? "rotate(180deg)" : "rotate(0)"
                  }}>⌄</div>
                </div>

                <div style={{ fontSize: "12px", color: "var(--text-light)", marginBottom: expandedDarshan === d.name ? "16px" : "0" }}>
                  Founder: <strong style={{ color: "var(--text)" }}>{d.founder}</strong>
                </div>

                {expandedDarshan === d.name && (
                  <div style={{ animation: "fadeIn 0.3s ease" }}>
                    <p style={{ fontSize: "13px", lineHeight: 1.75, color: "var(--text)", marginBottom: "14px" }}>
                      {d.desc}
                    </p>
                    <div style={{
                      background: `${d.color}08`,
                      border: `1px solid ${d.color}20`,
                      borderRadius: "10px", padding: "12px 16px"
                    }}>
                      <div style={{ fontSize: "11px", color: d.color, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
                        Modern Relevance
                      </div>
                      <p style={{ fontSize: "12px", color: "var(--text-light)", lineHeight: 1.6 }}>{d.modern}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
