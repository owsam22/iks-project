import { useState, useEffect } from "react";
import { 
  Code, 
  UserCircle, 
  Globe, 
  Mail, 
  Sparkles, 
  MousePointerClick,
  Compass
} from "lucide-react";

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
    }, 4500);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 6000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  const handleClick = () => {
    if (!clickReady) return;
    setPhase("opening");
    setTimeout(() => { setPhase("done"); onComplete(); }, 1600);
  };

  if (phase === "done") return null;

  return (
    <div className="door-screen" onClick={handleClick} style={{ cursor: clickReady ? 'pointer' : 'default' }}>
      {/* LEFT DOOR — IKS */}
      <div
        className="door-left"
        style={{
          transform: phase === "opening" ? "translateX(-100%)" : "translateX(0)",
          transition: "transform 1.6s cubic-bezier(0.76, 0, 0.24, 1)",
          backgroundImage: `url('/images/intro-left.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(27, 38, 59, 0.9) 0%, rgba(139, 69, 19, 0.8) 100%)",
        }} />

        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}></div>

        {/* Particles */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle" style={{
            width: `${6 + i * 3}px`, height: `${6 + i * 3}px`,
            left: `${15 + i * 12}%`, top: `${20 + (i * 17) % 60}%`,
            animationDelay: `${i * 0.5}s`, animationDuration: `${4 + i}s`,
            background: "var(--accent)"
          }} />
        ))}

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "40px 32px" }}>
          {/* Symbol */}
          <div style={{
            marginBottom: "24px", color: "var(--accent)",
            filter: "drop-shadow(0 0 15px rgba(212, 175, 55, 0.5))"
          }}>
            <Sparkles size={64} />
          </div>

          {/* Sanskrit */}
          <div className="font-devanagari" style={{
            fontSize: "clamp(16px, 2.5vw, 24px)", color: "var(--accent)",
            letterSpacing: "0.15em", marginBottom: "20px",
            textShadow: "0 0 15px rgba(212, 175, 55, 0.4)"
          }}>
            ज्ञानं परमं बलम्
          </div>

          <div style={{
            width: "80px", height: "2px",
            background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
            margin: "0 auto 24px"
          }} />

          <h1 className="font-serif" style={{
            fontSize: "clamp(24px, 4vw, 48px)", fontWeight: 900,
            color: "#F8F5F0", lineHeight: 1.1,
            textShadow: "0 4px 15px rgba(0,0,0,0.5)",
            letterSpacing: "0.05em"
          }}>
            Indian<br />Knowledge<br />System
          </h1>

          <div className="font-ancient" style={{
            marginTop: "24px", fontSize: "14px", color: "rgba(212, 175, 55, 0.8)",
            letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600
          }}>
            A Digital Museum
          </div>
        </div>
      </div>

      {/* RIGHT DOOR — Owsam22 */}
      <div
        className="door-right"
        style={{
          transform: phase === "opening" ? "translateX(100%)" : "translateX(0)",
          transition: "transform 1.6s cubic-bezier(0.76, 0, 0.24, 1)",
          background: "linear-gradient(200deg, #1B263B 0%, #0D1B2A 100%)"
        }}
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "40px 32px" }}>
          {/* Avatar Icon */}
          <div style={{
            width: "100px", height: "100px", borderRadius: "50%",
            margin: "0 auto 24px",
            background: "linear-gradient(135deg, var(--accent), #A67C00)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#0D1B2A",
            border: "4px solid rgba(212, 175, 55, 0.3)",
            boxShadow: "0 0 30px rgba(212, 175, 55, 0.2)"
          }}>
            <Compass size={48} />
          </div>

          <div className="font-ancient" style={{
            fontSize: "12px", letterSpacing: "0.3em",
            color: "rgba(212, 175, 55, 0.8)", textTransform: "uppercase",
            marginBottom: "12px", fontWeight: 700
          }}>
            Designed by
          </div>

          <h2 className="font-serif" style={{
            fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 700,
            color: "#F8F5F0", marginBottom: "8px",
            letterSpacing: "0.02em"
          }}>
            Owsam22
          </h2>

          <div style={{
            fontSize: "15px", color: "rgba(212, 175, 55, 0.7)",
            marginBottom: "36px", fontStyle: "italic", letterSpacing: "0.05em"
          }}>
            IKS Heritage Project
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            {[
              { icon: <Code size={20} />, label: "GitHub", href: "#" },
              { icon: <UserCircle size={20} />, label: "LinkedIn", href: "#" },
              { icon: <Globe size={20} />, label: "Portfolio", href: "#" },
              { icon: <Mail size={20} />, label: "Email", href: "#" }
            ].map((s, idx) => (
              <a key={idx} href={s.href}
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: "50px", height: "50px", borderRadius: "12px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  backdropFilter: "blur(4px)"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(212, 175, 55, 0.15)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212, 175, 55, 0.2)";
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
            marginTop: "48px", padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
            borderRadius: "16px", border: "1px solid rgba(212, 175, 55, 0.1)",
            maxWidth: "280px", margin: "48px auto 0"
          }}>
            <div className="font-ancient" style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "6px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700 }}>Subject</div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)", fontWeight: 600, letterSpacing: "0.05em" }}>Indian Knowledge System</div>
          </div>
        </div>
      </div>

      {/* Click prompt */}
      {clickReady && phase === "waiting" && (
        <div style={{
          position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)",
          zIndex: 10, textAlign: "center",
          animation: "fadeIn 0.8s ease"
        }}>
          <div className="scroll-indicator" style={{
            color: "var(--accent)", fontSize: "14px",
            letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700,
            display: "flex", flexDirection: "column", alignItems: "center", gap: "12px"
          }}>
            <MousePointerClick size={24} />
            Click to Enter
          </div>
        </div>
      )}

      {/* Center divider line with ornament */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 5, display: "flex", flexDirection: "column",
        alignItems: "center", gap: "12px",
        transition: "opacity 0.6s ease",
        opacity: phase === "opening" ? 0 : 1
      }}>
        <div style={{ width: "1px", height: "120px", background: "linear-gradient(to bottom, transparent, var(--accent))" }} />
        <div style={{
          width: "44px", height: "44px", borderRadius: "50%",
          background: "rgba(27, 38, 59, 0.8)",
          border: "2px solid var(--accent)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--accent)",
          boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)"
        }}>
          <Sparkles size={20} />
        </div>
        <div style={{ width: "1px", height: "120px", background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
      </div>
    </div>
  );
}
