import { useRef, useEffect, useState } from "react";

const introBlocks = [
  {
    icon: "📚",
    title: "Definition of IKS",
    color: "#C8A951",
    image: "🏺",
    content: "Indian Knowledge System (IKS) refers to the vast body of knowledge developed on the Indian subcontinent over 5,000+ years — encompassing philosophy, science, mathematics, medicine, arts, architecture, governance, and environmental wisdom. It represents a holistic, integrated approach where spiritual understanding and empirical inquiry coexisted rather than conflicted.",
    quote: "\"Knowledge is power\" — but India said knowledge is dharma (duty), karma (action), and moksha (liberation) combined.",
    points: [
      "Oral and written traditions from 3000 BCE onwards",
      "Encoded in Sanskrit, Tamil, Pali, and regional languages",
      "Transmitted through Gurukula (residential school) system",
      "Integrated: science + philosophy + spirituality as one"
    ]
  },
  {
    icon: "🌐",
    title: "Concept & Scope",
    color: "#1F3A5F",
    image: "🗺️",
    content: "IKS spans multiple domains of human inquiry: the six Darshanas (philosophical schools), four Vedas, Vedangas (auxiliary sciences), Upavedas (applied sciences), and extensive literature in mathematics, astronomy, linguistics, music, dance, architecture, and ecology. The concept rests on the unity of knowledge — Vasudhaiva Kutumbakam (the world is one family) extends to all knowledge being one interconnected whole.",
    quote: "IKS did not separate science from philosophy — Aryabhata proved with mathematics what the Upanishads described philosophically.",
    points: [
      "14 Vidyasthanas (seats of knowledge) covering all disciplines",
      "4 Vedas + 6 Vedangas + 4 Upavedas + 18 Puranas",
      "Mathematics, astronomy, medicine, grammar, arts, law",
      "Knowledge preserved and transmitted across millennia"
    ]
  },
  {
    icon: "🔮",
    title: "Knowledge Paradigms",
    color: "#4A235A",
    image: "💡",
    content: "IKS operates through distinct epistemological paradigms. Pramana theory (Nyaya school) identifies 4 valid sources of knowledge: Pratyaksha (perception), Anumana (inference), Upamana (comparison), and Shabda (testimony of reliable sources). This empirical + logical + traditional framework was remarkably sophisticated — anticipating modern scientific methodology by millennia.",
    quote: "The Nyaya school's Pramana theory is essentially a theory of epistemology — the same questions that modern philosophy of science asks.",
    points: [
      "Pratyaksha: Direct perception — empirical observation",
      "Anumana: Logical inference — systematic reasoning",
      "Upamana: Analogy — comparative method",
      "Shabda: Reliable testimony — peer-reviewed knowledge"
    ]
  },
  {
    icon: "🇮🇳",
    title: "IKS: Ancient to Modern",
    color: "#1E8449",
    image: "🌅",
    content: "Ancient IKS was global — Nalanda University attracted scholars from China, Korea, Persia, and Greece. Medieval IKS spread to the Arab world through translations (zero, algebra, medicine). Colonial India saw systematic suppression of traditional knowledge. Modern IKS revival: NEP 2020 integrates IKS, AYUSH promotes Ayurveda globally, International Yoga Day (2015) reaches 177 nations.",
    quote: "The zero was not just a number — it was a worldview. Indian philosophy's comfort with emptiness (Shunyata) enabled the mathematical concept of zero.",
    points: [
      "Nalanda (5th century BCE) — world's first international university",
      "Al-Khwarizmi (9th century) learned algebra from Indian mathematics",
      "Macaulay's Minute (1835) systematically displaced IKS",
      "NEP 2020 + AYUSH Ministry — structured modern revival"
    ]
  }
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function IntroBlock({ block, index }: { block: typeof introBlocks[0]; index: number }) {
  const { ref, visible } = useInView();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`fade-in-section ${visible ? "visible" : ""}`}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        alignItems: "center",
        marginBottom: "80px",
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`
      }}
    >
      {/* Visual side */}
      {isEven && (
        <div style={{
          background: `linear-gradient(135deg, ${block.color}15, ${block.color}08)`,
          border: `1px solid ${block.color}30`,
          borderRadius: "24px",
          padding: "48px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: "320px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{ fontSize: "100px", marginBottom: "20px", opacity: 0.8 }}>{block.image}</div>
          <div className="font-serif" style={{
            fontSize: "22px", fontWeight: 700, color: block.color,
            marginBottom: "12px"
          }}>{block.icon} {block.title}</div>
          <blockquote style={{
            fontSize: "13px", color: "var(--text-light)",
            fontStyle: "italic", lineHeight: 1.7,
            borderLeft: `3px solid ${block.color}`,
            paddingLeft: "16px", textAlign: "left"
          }}>
            {block.quote}
          </blockquote>
        </div>
      )}

      {/* Text side */}
      <div>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: `${block.color}15`,
          borderRadius: "50px",
          padding: "4px 16px",
          marginBottom: "16px"
        }}>
          <span>{block.icon}</span>
          <span style={{ fontSize: "12px", color: block.color, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Section I
          </span>
        </div>

        <h2 className="font-serif section-title" style={{ marginBottom: "16px", color: block.color }}>
          {block.title}
        </h2>

        <div className="accent-bar" style={{ background: `linear-gradient(90deg, ${block.color}, transparent)`, marginBottom: "20px" }} />

        <p style={{
          fontSize: "15px", lineHeight: 1.85,
          color: "var(--text)", marginBottom: "24px"
        }}>
          {block.content}
        </p>

        <div style={{
          display: "flex", flexDirection: "column", gap: "10px"
        }}>
          {block.points.map((pt, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: "12px"
            }}>
              <div style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: block.color, flexShrink: 0, marginTop: "7px"
              }} />
              <span style={{ fontSize: "14px", color: "var(--text-light)", lineHeight: 1.6 }}>{pt}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Visual side for odd */}
      {!isEven && (
        <div style={{
          background: `linear-gradient(135deg, ${block.color}15, ${block.color}08)`,
          border: `1px solid ${block.color}30`,
          borderRadius: "24px",
          padding: "48px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: "320px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{ fontSize: "100px", marginBottom: "20px", opacity: 0.8 }}>{block.image}</div>
          <div className="font-serif" style={{
            fontSize: "22px", fontWeight: 700, color: block.color,
            marginBottom: "12px"
          }}>{block.icon} {block.title}</div>
          <blockquote style={{
            fontSize: "13px", color: "var(--text-light)",
            fontStyle: "italic", lineHeight: 1.7,
            borderLeft: `3px solid ${block.color}`,
            paddingLeft: "16px", textAlign: "left"
          }}>
            {block.quote}
          </blockquote>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          [style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function IntroductionSection() {
  return (
    <section id="introduction" style={{
      padding: "100px clamp(20px, 6vw, 96px)",
      background: "var(--bg)",
      position: "relative"
    }}>
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "72px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(200,169,81,0.1)",
          borderRadius: "50px", padding: "6px 20px",
          border: "1px solid rgba(200,169,81,0.25)",
          marginBottom: "16px"
        }}>
          <span style={{ fontSize: "13px", color: "#C8A951", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Unit I · Introduction
          </span>
        </div>
        <h2 className="font-serif section-title" style={{ marginBottom: "16px" }}>
          What is Indian Knowledge System?
        </h2>
        <div className="accent-bar" style={{ margin: "0 auto 20px" }} />
        <p className="section-subtitle" style={{ maxWidth: "640px", margin: "0 auto" }}>
          A comprehensive framework of knowledge developed over 5,000 years — integrating science, philosophy, medicine, arts, and ecology into a unified system of understanding reality.
        </p>
      </div>

      {/* 4 Info blocks */}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {introBlocks.map((block, i) => (
          <IntroBlock key={block.title} block={block} index={i} />
        ))}
      </div>

      {/* Quick definition card */}
      <div style={{
        maxWidth: "900px", margin: "0 auto",
        background: "linear-gradient(135deg, var(--primary), #0d2442)",
        borderRadius: "24px", padding: "48px",
        textAlign: "center", position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: "-40px", right: "-40px",
          fontSize: "200px", opacity: 0.04, pointerEvents: "none"
        }}>🕉️</div>
        <div className="font-devanagari" style={{
          fontSize: "28px", color: "#C8A951", marginBottom: "12px"
        }}>
          विद्या ददाति विनयम्
        </div>
        <div style={{ fontSize: "14px", color: "rgba(200,169,81,0.7)", marginBottom: "24px", fontStyle: "italic" }}>
          "Knowledge gives humility"
        </div>
        <p style={{ fontSize: "16px", color: "rgba(248,245,240,0.85)", lineHeight: 1.8, maxWidth: "640px", margin: "0 auto" }}>
          IKS is not a relic of the past — it is a <strong style={{ color: "#C8A951" }}>living, breathing system</strong> of knowledge. From the Zero that powers our computers, to Yoga practiced by 300 million people worldwide, to Ayurveda informing modern medicine — IKS is the invisible foundation of our present.
        </p>
      </div>
    </section>
  );
}
