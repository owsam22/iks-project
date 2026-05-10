import { useState, useEffect, useCallback } from "react";
import { Code, UserCircle, Globe, MousePointer2 } from "lucide-react";

interface DoorIntroProps {
  onComplete: () => void;
}

export default function DoorIntro({ onComplete }: DoorIntroProps) {
  const [phase, setPhase] = useState<"waiting" | "opening" | "done">("waiting");
  const [ready, setReady] = useState(false);

  const triggerOpen = useCallback(() => {
    if (phase !== "waiting") return;
    setPhase("opening");
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 1100);
  }, [phase, onComplete]);

  useEffect(() => {
    const t1 = setTimeout(() => setReady(true), 600);
    const t2 = setTimeout(triggerOpen, 5000);
    const handleScroll = () => { if (ready) triggerOpen(); };

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [ready, triggerOpen]);

  if (phase === "done") return null;

  return (
    <div
      className="door-screen"
      style={{
        background: "linear-gradient(160deg, #0a1628 0%, #0D1B2A 40%, #1a0e05 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        animation: phase === "opening" ? "slide-up-out 1.1s cubic-bezier(0.76, 0, 0.24, 1) forwards" : "none",
        zIndex: 9999,
      }}
    >
      {/* Paper texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')",
          opacity: 0.04,
        }}
      />

      {/* Outer mandala ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="animate-rotate-slow" style={{ width: "92vmin", height: "92vmin", opacity: 0.12 }}>
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none" stroke="#C9A84C" strokeWidth="0.25">
            <circle cx="50" cy="50" r="49" />
            <circle cx="50" cy="50" r="42" strokeDasharray="1.5 3" />
            <circle cx="50" cy="50" r="35" />
            {[...Array(32)].map((_, i) => (
              <line key={i} x1="50" y1="1.5" x2="50" y2="6" transform={`rotate(${i * 11.25} 50 50)`} />
            ))}
            {[...Array(8)].map((_, i) => (
              <path
                key={i}
                d="M50 14 C46 26 46 26 50 35 C54 26 54 26 50 14"
                fill="rgba(201,168,76,0.08)"
                stroke="#C9A84C"
                strokeWidth="0.3"
                transform={`rotate(${i * 45} 50 50)`}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Inner counter-rotating ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="animate-rotate-slow-reverse" style={{ width: "60vmin", height: "60vmin", opacity: 0.15 }}>
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none" stroke="#E8890C" strokeWidth="0.3">
            <circle cx="50" cy="50" r="48" strokeDasharray="2 4" />
            {[...Array(16)].map((_, i) => (
              <line key={i} x1="50" y1="3" x2="50" y2="9" transform={`rotate(${i * 22.5} 50 50)`} />
            ))}
          </svg>
        </div>
      </div>

      {/* Central glow */}
      <div
        className="absolute pointer-events-none animate-pulse-glow"
        style={{
          width: "40vmin",
          height: "40vmin",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">

        {/* Sanskrit top label */}
        <div
          className="font-devanagari animate-pulse-glow mb-4"
          style={{
            fontSize: "clamp(14px, 2vw, 20px)",
            color: "#C9A84C",
            letterSpacing: "0.25em",
            opacity: 0.85,
          }}
        >
          ज्ञानं परमं बलम्
        </div>

        {/* Lotus divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px", width: "180px" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.35)" }} />
          <span style={{ color: "#C9A84C", fontSize: "18px" }}>✦</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.35)" }} />
        </div>

        {/* Om symbol */}
        <div
          className="font-serif"
          style={{
            fontSize: "clamp(48px, 8vw, 80px)",
            color: "#C9A84C",
            lineHeight: 1,
            marginBottom: "12px",
            textShadow: "0 0 40px rgba(201,168,76,0.4)",
          }}
        >
          ॐ
        </div>

        {/* Main title */}
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(28px, 5.5vw, 64px)",
            fontWeight: 900,
            color: "#F7F1E3",
            lineHeight: 1.12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textShadow: "0 4px 24px rgba(0,0,0,0.5)",
            marginBottom: "6px",
          }}
        >
          Indian
        </h1>
        <h1
          className="font-serif gold-shimmer"
          style={{
            fontSize: "clamp(28px, 5.5vw, 64px)",
            fontWeight: 900,
            lineHeight: 1.12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          Knowledge
        </h1>
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(28px, 5.5vw, 64px)",
            fontWeight: 900,
            color: "#F7F1E3",
            lineHeight: 1.12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textShadow: "0 4px 24px rgba(0,0,0,0.5)",
            marginBottom: "36px",
          }}
        >
          System
        </h1>

        {/* Tagline */}
        <p
          className="font-ancient"
          style={{
            fontSize: "clamp(12px, 1.5vw, 15px)",
            color: "rgba(247,241,227,0.55)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "40px",
          }}
        >
          A Digital Heritage Museum
        </p>

        {/* Creator card */}
        <div
          style={{
            background: "rgba(13,27,42,0.7)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "20px",
            padding: "24px 36px",
            backdropFilter: "blur(20px)",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <div
            className="font-ancient"
            style={{
              fontSize: "10px",
              color: "rgba(201,168,76,0.6)",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Curated By
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(18px, 3vw, 26px)",
              color: "#F7F1E3",
              fontWeight: 700,
              letterSpacing: "0.06em",
              marginBottom: "16px",
            }}
          >
            Samarpan · owsam22
          </h2>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            {[
              { icon: <Code size={16} />, label: "GitHub", href: "https://github.com/owsam22" },
              { icon: <UserCircle size={16} />, label: "LinkedIn", href: "https://linkedin.com/in/owsam22" },
              { icon: <Globe size={16} />, label: "Portfolio", href: "https://owsam22.github.io" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C9A84C",
                  background: "rgba(201,168,76,0.06)",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.18)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#C9A84C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        {ready && phase === "waiting" && (
          <div
            className="flex flex-col items-center gap-3 mt-10"
            style={{ animation: "fadeIn 0.8s ease" }}
          >
            <div className="animate-bounce">
              <MousePointer2 className="rotate-180" size={20} style={{ color: "#C9A84C" }} />
            </div>
            <span
              className="font-ancient"
              style={{
                fontSize: "10px",
                color: "rgba(201,168,76,0.6)",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
              }}
            >
              Scroll to Enter
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
