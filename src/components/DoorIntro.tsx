import { useState, useEffect } from "react";

interface DoorIntroProps {
  onComplete: () => void;
}

export default function DoorIntro({ onComplete }: DoorIntroProps) {
  const [phase, setPhase] = useState<"waiting" | "opening" | "done">("waiting");
  const [clickReady, setClickReady] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setClickReady(true), 1200);
    const t2 = setTimeout(() => {
      setPhase("opening");
    }, 3800);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 5400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  const handleClick = () => {
    if (!clickReady) return;
    setPhase("opening");
    setTimeout(() => { setPhase("done"); onComplete(); }, 1600);
  };

  if (phase === "done") return null;

  return (
    <div className="door-screen" onClick={handleClick}>
      {/* LEFT DOOR — IKS */}
      <div
        className="door-left"
        style={{
          transform: phase === "opening" ? "translateX(-100%)" : "translateX(0)",
          transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
          backgroundImage: `url('/images/intro-left.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(60,20,0,0.82) 0%, rgba(100,50,10,0.75) 100%)",
        }} />

        {/* Particles */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle" style={{
            width: `${8 + i * 4}px`, height: `${8 + i * 4}px`,
            left: `${10 + i * 15}%`, top: `${15 + (i * 13) % 70}%`,
            animationDelay: `${i * 0.8}s`, animationDuration: `${5 + i}s`
          }} />
        ))}

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "40px 32px" }}>
          {/* Om symbol */}
          <div style={{
            fontSize: "72px", marginBottom: "20px", lineHeight: 1,
            filter: "drop-shadow(0 0 20px rgba(200,169,81,0.6))"
          }}>🕉️</div>

          {/* Sanskrit */}
          <div className="font-devanagari" style={{
            fontSize: "clamp(14px, 2vw, 20px)", color: "rgba(200,169,81,0.9)",
            letterSpacing: "0.12em", marginBottom: "16px",
            textShadow: "0 0 20px rgba(200,169,81,0.5)"
          }}>
            ज्ञानं परमं बलम्
          </div>

          <div style={{
            width: "60px", height: "2px",
            background: "linear-gradient(90deg, transparent, #C8A951, transparent)",
            margin: "0 auto 20px"
          }} />

          <h1 className="font-serif" style={{
            fontSize: "clamp(22px, 3.5vw, 42px)", fontWeight: 700,
            color: "#F8F5F0", lineHeight: 1.2,
            textShadow: "0 2px 20px rgba(0,0,0,0.5)"
          }}>
            Indian<br />Knowledge<br />System
          </h1>

          <div style={{
            marginTop: "20px", fontSize: "12px", color: "rgba(200,169,81,0.7)",
            letterSpacing: "0.2em", textTransform: "uppercase"
          }}>
            A Digital Museum
          </div>

          {/* Decorative mandala pattern */}
          <div style={{
            marginTop: "32px",
            fontSize: "clamp(40px, 8vw, 100px)",
            opacity: 0.12,
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none"
          }}>☸️</div>
        </div>
      </div>

      {/* RIGHT DOOR — Owsam22 */}
      <div
        className="door-right"
        style={{
          transform: phase === "opening" ? "translateX(100%)" : "translateX(0)",
          transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        {/* Subtle pattern overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 30% 30%, rgba(200,169,81,0.08) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(200,169,81,0.05) 0%, transparent 60%)",
        }} />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "40px 32px" }}>
          {/* Avatar */}
          <div style={{
            width: "90px", height: "90px", borderRadius: "50%",
            margin: "0 auto 20px",
            background: "linear-gradient(135deg, #C8A951, #8B6914)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "36px", fontWeight: 700,
            border: "3px solid rgba(200,169,81,0.4)",
            boxShadow: "0 0 40px rgba(200,169,81,0.2)"
          }}>
            🎓
          </div>

          <div style={{
            fontSize: "11px", letterSpacing: "0.25em",
            color: "rgba(200,169,81,0.7)", textTransform: "uppercase",
            marginBottom: "8px"
          }}>
            Made by
          </div>

          <h2 className="font-serif" style={{
            fontSize: "clamp(24px, 4vw, 44px)", fontWeight: 700,
            color: "#F8F5F0", marginBottom: "6px",
            textShadow: "0 0 30px rgba(200,169,81,0.3)"
          }}>
            Owsam22
          </h2>

          <div style={{
            fontSize: "13px", color: "rgba(200,169,81,0.8)",
            marginBottom: "28px", fontStyle: "italic"
          }}>
            Indian Knowledge System Project
          </div>

          <div style={{
            width: "50px", height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(200,169,81,0.6), transparent)",
            margin: "0 auto 24px"
          }} />

          {/* Socials */}
          <div style={{ display: "flex", gap: "14px", justifyContent: "center" }}>
            {[
              { icon: "🐙", label: "GitHub", href: "#" },
              { icon: "💼", label: "LinkedIn", href: "#" },
              { icon: "🌐", label: "Portfolio", href: "#" },
              { icon: "📧", label: "Email", href: "#" }
            ].map((s) => (
              <a key={s.label} href={s.href}
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(200,169,81,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px", textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(200,169,81,0.2)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#C8A951";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,81,0.3)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Subject info */}
          <div style={{
            marginTop: "32px", padding: "16px 20px",
            background: "rgba(255,255,255,0.04)",
            borderRadius: "12px", border: "1px solid rgba(200,169,81,0.15)"
          }}>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "4px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Subject</div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Indian Knowledge System</div>
          </div>
        </div>
      </div>

      {/* Click prompt — appears after 1.2s */}
      {clickReady && phase === "waiting" && (
        <div style={{
          position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
          zIndex: 10, textAlign: "center",
          animation: "fadeIn 0.6s ease"
        }}>
          <div className="scroll-indicator" style={{
            color: "rgba(200,169,81,0.8)", fontSize: "13px",
            letterSpacing: "0.15em", textTransform: "uppercase"
          }}>
            ▼ Click to Enter ▼
          </div>
        </div>
      )}

      {/* Center divider line with gold ornament */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 5, display: "flex", flexDirection: "column",
        alignItems: "center", gap: "8px",
        transition: "opacity 0.5s ease",
        opacity: phase === "opening" ? 0 : 1
      }}>
        <div style={{ width: "2px", height: "80px", background: "linear-gradient(to bottom, transparent, rgba(200,169,81,0.7))" }} />
        <div style={{
          width: "36px", height: "36px", borderRadius: "50%",
          background: "rgba(200,169,81,0.15)",
          border: "1.5px solid rgba(200,169,81,0.5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "14px"
        }}>✦</div>
        <div style={{ width: "2px", height: "80px", background: "linear-gradient(to bottom, rgba(200,169,81,0.7), transparent)" }} />
      </div>
    </div>
  );
}
