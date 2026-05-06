import { useRef, useEffect, useState } from "react";
import { timelineData } from "../data/iksData";
import { 
  Scroll, 
  Mountain, 
  Triangle, 
  Atom, 
  GraduationCap, 
  PersonStanding, 
  Stars, 
  Calculator, 
  AlertTriangle, 
  Flag, 
  Globe, 
  BookOpen,
  ChevronRight,
  Info
} from "lucide-react";

const IconMap: Record<string, any> = {
  Scroll,
  Mountain,
  Triangle,
  Atom,
  GraduationCap,
  PersonStanding,
  Stars,
  Calculator,
  AlertTriangle,
  Flag,
  Globe,
  BookOpen
};

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
      padding: "120px clamp(20px, 6vw, 96px)",
      background: "#1B263B",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 20% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 60%)"
      }} />

      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}></div>

      <div ref={sectionRef} style={{ position: "relative", zIndex: 1, maxWidth: "1300px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "rgba(212, 175, 55, 0.15)",
            borderRadius: "50px", padding: "8px 24px",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            marginBottom: "20px"
          }}>
            <span className="font-ancient" style={{ fontSize: "14px", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              5,000 Years of Heritage
            </span>
          </div>
          <h2 className="font-serif" style={{
            fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700,
            color: "#F8F5F0", marginBottom: "20px", letterSpacing: "0.05em"
          }}>
            The Timeline of <span className="gold-shimmer">Wisdom</span>
          </h2>
          <div className="accent-bar" style={{ margin: "0 auto 24px", width: "80px" }} />
          <p style={{
            fontSize: "18px", color: "rgba(248,245,240,0.6)",
            maxWidth: "650px", margin: "0 auto", lineHeight: 1.8
          }}>
            From the Vedic dawn to the modern revival — trace the evolution of Indian knowledge, its global impact, and its enduring resilience through the ages.
          </p>
        </div>

        {/* Timeline — vertical */}
        <div style={{ position: "relative", padding: "40px 0" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: "50%", top: 0, bottom: 0,
            width: "2px",
            background: "linear-gradient(to bottom, transparent, rgba(212, 175, 55, 0.5) 10%, rgba(212, 175, 55, 0.5) 90%, transparent)",
            transform: "translateX(-50%)"
          }} />

          {timelineData.map((event, i) => {
            const isLeft = i % 2 === 0;
            const delay = i * 0.05;
            const Icon = IconMap[event.icon as string] || Info;

            return (
              <div
                key={event.year}
                className={`fade-in-section ${sectionVisible ? "visible" : ""}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 100px 1fr",
                  gap: "0",
                  marginBottom: "40px",
                  transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
                  alignItems: "center"
                }}
              >
                {/* Left content */}
                {isLeft ? (
                  <div
                    onClick={() => setActiveEvent(activeEvent === i ? null : i)}
                    style={{
                      textAlign: "right", paddingRight: "40px", cursor: "pointer"
                    }}
                  >
                    <div style={{
                      background: "rgba(255,255,255,0.03)",
                      border: activeEvent === i ? `1px solid var(--accent)` : "1px solid rgba(212, 175, 55, 0.2)",
                      borderRadius: "24px",
                      padding: "24px 32px",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: activeEvent === i ? `0 15px 40px rgba(212, 175, 55, 0.15)` : "none",
                      backdropFilter: "blur(8px)"
                    }}
                    onMouseEnter={(e) => { if(activeEvent !== i) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)" }}
                    onMouseLeave={(e) => { if(activeEvent !== i) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)" }}
                    >
                      <div className="font-ancient" style={{
                        fontSize: "12px", color: "var(--accent)", fontWeight: 700,
                        textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "8px"
                      }}>
                        {event.era}
                      </div>
                      <div className="font-serif" style={{
                        fontSize: "24px", fontWeight: 700, color: "white",
                        marginBottom: "6px"
                      }}>{event.event}</div>
                      <div className="font-ancient" style={{
                        fontSize: "20px", fontWeight: 700, color: "var(--accent-light)",
                        marginBottom: activeEvent === i ? "16px" : "0"
                      }}>{event.year}</div>
                      {activeEvent === i && (
                        <p style={{
                          fontSize: "14px", color: "rgba(248,245,240,0.7)",
                          lineHeight: 1.8, animation: "fadeIn 0.4s ease",
                          textAlign: "right", borderTop: "1px solid rgba(212, 175, 55, 0.2)",
                          paddingTop: "16px", marginTop: "16px"
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
                      width: "60px", height: "60px", borderRadius: "50%",
                      background: activeEvent === i ? "var(--accent)" : "#1B263B",
                      border: "2px solid var(--accent)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: activeEvent === i ? "#1B263B" : "var(--accent)",
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: activeEvent === i ? "scale(1.1)" : "scale(1)",
                      boxShadow: activeEvent === i ? `0 0 30px var(--accent)` : "none"
                    }}
                  >
                    <Icon size={28} />
                  </div>
                </div>

                {/* Right content */}
                {!isLeft ? (
                  <div
                    onClick={() => setActiveEvent(activeEvent === i ? null : i)}
                    style={{ paddingLeft: "40px", cursor: "pointer" }}
                  >
                    <div style={{
                      background: "rgba(255,255,255,0.03)",
                      border: activeEvent === i ? `1px solid var(--accent)` : "1px solid rgba(212, 175, 55, 0.2)",
                      borderRadius: "24px",
                      padding: "24px 32px",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: activeEvent === i ? `0 15px 40px rgba(212, 175, 55, 0.15)` : "none",
                      backdropFilter: "blur(8px)"
                    }}
                    onMouseEnter={(e) => { if(activeEvent !== i) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)" }}
                    onMouseLeave={(e) => { if(activeEvent !== i) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)" }}
                    >
                      <div className="font-ancient" style={{
                        fontSize: "12px", color: "var(--accent)", fontWeight: 700,
                        textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "8px"
                      }}>
                        {event.era}
                      </div>
                      <div className="font-serif" style={{
                        fontSize: "24px", fontWeight: 700, color: "white",
                        marginBottom: "6px"
                      }}>{event.event}</div>
                      <div className="font-ancient" style={{
                        fontSize: "20px", fontWeight: 700, color: "var(--accent-light)",
                        marginBottom: activeEvent === i ? "16px" : "0"
                      }}>{event.year}</div>
                      {activeEvent === i && (
                        <p style={{
                          fontSize: "14px", color: "rgba(248,245,240,0.7)",
                          lineHeight: 1.8, animation: "fadeIn 0.4s ease",
                          borderTop: "1px solid rgba(212, 175, 55, 0.2)",
                          paddingTop: "16px", marginTop: "16px"
                        }}>{event.detail}</p>
                      )}
                    </div>
                  </div>
                ) : <div />}
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div style={{
          textAlign: "center", marginTop: "60px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "16px"
        }}>
          <div style={{ color: "rgba(212, 175, 55, 0.6)", display: "flex", alignItems: "center", gap: "8px" }}>
            <ChevronRight size={16} />
            <span className="font-ancient" style={{ letterSpacing: "0.15em", fontSize: "14px", textTransform: "uppercase", fontWeight: 700 }}>Tap events to explore deeper</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          [style*="gridTemplateColumns: 1fr 100px 1fr"] {
            grid-template-columns: 80px 1fr !important;
            gap: 0 !important;
          }
          [style*="gridTemplateColumns: 1fr 100px 1fr"] > div:first-child:empty {
            display: none !important;
          }
          [style*="gridTemplateColumns: 1fr 100px 1fr"] > div:last-child:empty {
            display: none !important;
          }
          #timeline [style*="textAlign: right"] {
            textAlign: left !important;
            padding-right: 0 !important;
            padding-left: 24px !important;
          }
          #timeline [style*="paddingLeft: 40px"] {
            padding-left: 24px !important;
          }
          #timeline [style*="left: 50%"] {
            left: 40px !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
