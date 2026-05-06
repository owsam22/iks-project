import { useRef, useEffect, useState } from "react";
import { timelineData } from "../data/iksData";

function useInView(threshold = 0.1) {
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

export default function TimelineSection() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  const { ref: sectionRef, visible: sectionVisible } = useInView(0.05);

  return (
    <section id="timeline" style={{
      padding: "100px clamp(20px, 6vw, 96px)",
      background: "var(--primary)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 20% 50%, rgba(200,169,81,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(200,169,81,0.05) 0%, transparent 60%)"
      }} />

      {/* Mandala watermark */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "60vw", opacity: 0.02, pointerEvents: "none",
        userSelect: "none", lineHeight: 1
      }}>☸️</div>

      <div ref={sectionRef} style={{ position: "relative", zIndex: 1, maxWidth: "1300px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(200,169,81,0.12)",
            borderRadius: "50px", padding: "6px 20px",
            border: "1px solid rgba(200,169,81,0.25)",
            marginBottom: "16px"
          }}>
            <span style={{ fontSize: "13px", color: "#C8A951", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Historical Timeline
            </span>
          </div>
          <h2 className="font-serif" style={{
            fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700,
            color: "white", marginBottom: "16px"
          }}>
            5,000 Years of Knowledge
          </h2>
          <div style={{
            width: "60px", height: "4px",
            background: "linear-gradient(90deg, #C8A951, #E8C87A)",
            borderRadius: "2px", margin: "0 auto 20px"
          }} />
          <p style={{
            fontSize: "16px", color: "rgba(255,255,255,0.65)",
            maxWidth: "560px", margin: "0 auto", lineHeight: 1.7
          }}>
            From the Vedic dawn to NEP 2020 — trace how Indian knowledge evolved, spread globally, faced suppression, and is now experiencing a powerful revival.
          </p>
        </div>

        {/* Timeline — vertical */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: "50%", top: 0, bottom: 0,
            width: "2px",
            background: "linear-gradient(to bottom, transparent, rgba(200,169,81,0.4), rgba(200,169,81,0.4), transparent)",
            transform: "translateX(-50%)"
          }} />

          {timelineData.map((event, i) => {
            const isLeft = i % 2 === 0;
            const delay = i * 0.08;

            return (
              <div
                key={event.year}
                className={`fade-in-section ${sectionVisible ? "visible" : ""}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 60px 1fr",
                  gap: "0",
                  marginBottom: "32px",
                  transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
                  alignItems: "center"
                }}
              >
                {/* Left content */}
                {isLeft ? (
                  <div
                    onClick={() => setActiveEvent(activeEvent === i ? null : i)}
                    style={{
                      textAlign: "right", paddingRight: "32px", cursor: "pointer"
                    }}
                  >
                    <div style={{
                      background: "rgba(255,255,255,0.05)",
                      border: activeEvent === i ? `1px solid ${event.color}` : "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "16px",
                      padding: "20px 24px",
                      transition: "all 0.3s ease",
                      boxShadow: activeEvent === i ? `0 8px 32px ${event.color}30` : "none"
                    }}>
                      <div style={{
                        fontSize: "11px", color: event.color, fontWeight: 600,
                        textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "4px"
                      }}>
                        {event.era}
                      </div>
                      <div className="font-serif" style={{
                        fontSize: "22px", fontWeight: 700, color: "white",
                        marginBottom: "4px"
                      }}>{event.event}</div>
                      <div style={{
                        fontSize: "18px", fontWeight: 700, color: event.color,
                        marginBottom: activeEvent === i ? "12px" : "0"
                      }}>{event.year}</div>
                      {activeEvent === i && (
                        <p style={{
                          fontSize: "13px", color: "rgba(255,255,255,0.7)",
                          lineHeight: 1.7, animation: "fadeIn 0.3s ease",
                          textAlign: "left"
                        }}>{event.detail}</p>
                      )}
                    </div>
                  </div>
                ) : <div />}

                {/* Center dot */}
                <div style={{
                  display: "flex", justifyContent: "center", alignItems: "center",
                  position: "relative", zIndex: 2
                }}>
                  <div
                    onClick={() => setActiveEvent(activeEvent === i ? null : i)}
                    style={{
                      width: "48px", height: "48px", borderRadius: "50%",
                      background: `linear-gradient(135deg, ${event.color}, ${event.color}88)`,
                      border: "3px solid rgba(255,255,255,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "20px", cursor: "pointer",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      transform: activeEvent === i ? "scale(1.2)" : "scale(1)",
                      boxShadow: activeEvent === i ? `0 0 24px ${event.color}60` : `0 0 12px ${event.color}30`
                    }}
                  >
                    {event.icon}
                  </div>
                </div>

                {/* Right content */}
                {!isLeft ? (
                  <div
                    onClick={() => setActiveEvent(activeEvent === i ? null : i)}
                    style={{ paddingLeft: "32px", cursor: "pointer" }}
                  >
                    <div style={{
                      background: "rgba(255,255,255,0.05)",
                      border: activeEvent === i ? `1px solid ${event.color}` : "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "16px",
                      padding: "20px 24px",
                      transition: "all 0.3s ease",
                      boxShadow: activeEvent === i ? `0 8px 32px ${event.color}30` : "none"
                    }}>
                      <div style={{
                        fontSize: "11px", color: event.color, fontWeight: 600,
                        textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "4px"
                      }}>
                        {event.era}
                      </div>
                      <div className="font-serif" style={{
                        fontSize: "22px", fontWeight: 700, color: "white",
                        marginBottom: "4px"
                      }}>{event.event}</div>
                      <div style={{
                        fontSize: "18px", fontWeight: 700, color: event.color,
                        marginBottom: activeEvent === i ? "12px" : "0"
                      }}>{event.year}</div>
                      {activeEvent === i && (
                        <p style={{
                          fontSize: "13px", color: "rgba(255,255,255,0.7)",
                          lineHeight: 1.7, animation: "fadeIn 0.3s ease"
                        }}>{event.detail}</p>
                      )}
                    </div>
                  </div>
                ) : <div />}
              </div>
            );
          })}
        </div>

        {/* Click hint */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <span style={{
            fontSize: "13px", color: "rgba(200,169,81,0.6)",
            letterSpacing: "0.1em"
          }}>
            👆 Click any event to expand details
          </span>
        </div>

        {/* Era summary cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          marginTop: "64px"
        }}>
          {[
            { era: "Ancient Era", period: "3000–500 BCE", color: "#C8A951", desc: "Vedas, Upanishads, foundational sciences, Nalanda University" },
            { era: "Classical Era", period: "500 BCE–1000 CE", color: "#1E8449", desc: "Aryabhata, Brahmagupta, Charaka, Sushruta, Panini" },
            { era: "Medieval Era", period: "1000–1700 CE", color: "#1F3A5F", desc: "Knowledge spreads to Arab world; Bhaskara II, synthesis texts" },
            { era: "Colonial Era", period: "1757–1947 CE", color: "#922B21", desc: "Suppression of IKS; Macaulay's education policy displaces tradition" },
            { era: "Modern Era", period: "1947–Present", color: "#1F3A5F", desc: "Revival: NEP 2020, AYUSH, Yoga Day, manuscript digitisation" },
          ].map((card) => (
            <div key={card.era} style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${card.color}30`,
              borderRadius: "16px",
              padding: "20px 18px"
            }}>
              <div style={{
                fontSize: "11px", color: card.color, fontWeight: 600,
                textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "4px"
              }}>{card.period}</div>
              <div className="font-serif" style={{
                fontSize: "16px", fontWeight: 700, color: "white", marginBottom: "8px"
              }}>{card.era}</div>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          [style*="gridTemplateColumns: 1fr 60px 1fr"] {
            grid-template-columns: 40px 1fr !important;
            grid-template-rows: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
