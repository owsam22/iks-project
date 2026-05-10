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
        background: "linear-gradient(160deg, #FFFFFF 0%, #FFF9EB 40%, #F5E6BE 100%)",
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
          opacity: 0.12,
        }}
      />

      {/* Outer mandala ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="animate-rotate-slow" style={{ width: "92vmin", height: "92vmin", opacity: 0.15 }}>
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
        <div className="animate-rotate-slow-reverse" style={{ width: "60vmin", height: "60vmin", opacity: 0.2 }}>
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
          background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">

        {/* Sanskrit top label */}
        <div
          className="font-devanagari animate-pulse-glow mb-4"
          style={{
            fontSize: "clamp(14px, 2.2vw, 22px)",
            color: "#8C6D1F",
            letterSpacing: "0.25em",
            opacity: 0.9,
          }}
        >
          ज्ञानं परमं बलम्
        </div>

        {/* Lotus divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px", width: "200px" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(140,109,31,0.3)" }} />
          <span style={{ color: "#8C6D1F", fontSize: "18px" }}>✦</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(140,109,31,0.3)" }} />
        </div>

        {/* Om symbol */}
        <div
          className="font-serif"
          style={{
            fontSize: "clamp(48px, 10vw, 96px)",
            color: "#C9A84C",
            lineHeight: 1,
            marginBottom: "12px",
            textShadow: "0 0 40px rgba(201,168,76,0.25)",
          }}
        >
          ॐ
        </div>

        {/* Main title */}
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(32px, 6vw, 72px)",
            fontWeight: 900,
            color: "#2A1E0F",
            lineHeight: 1.12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          Indian
        </h1>
        <h1
          className="font-serif gold-shimmer"
          style={{
            fontSize: "clamp(32px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          Knowledge
        </h1>
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(32px, 6vw, 72px)",
            fontWeight: 900,
            color: "#2A1E0F",
            lineHeight: 1.12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "40px",
          }}
        >
          System
        </h1>

        {/* Tagline */}
        <p
          className="font-ancient"
          style={{
            fontSize: "clamp(12px, 1.8vw, 16px)",
            color: "#5A4530",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "48px",
            fontWeight: 600,
          }}
        >
          A Digital Heritage Museum
        </p>

        {/* Creator card */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.75)",
            border: "1px solid rgba(201,168,76,0.35)",
            borderRadius: "24px",
            padding: "28px 40px",
            backdropFilter: "blur(20px)",
            width: "100%",
            maxWidth: "440px",
            boxShadow: "0 12px 32px rgba(42, 30, 15, 0.08)",
          }}
        >
          <div
            className="font-ancient"
            style={{
              fontSize: "11px",
              color: "#8C6D1F",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "12px",
              fontWeight: 700,
            }}
          >
            Curated By
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(20px, 3.5vw, 28px)",
              color: "#2A1E0F",
              fontWeight: 700,
              letterSpacing: "0.06em",
              marginBottom: "20px",
            }}
          >
            Samarpan · owsam22
          </h2>

          <div style={{ display: "flex", gap: "14px", justifyContent: "center" }}>
            {[
              { icon: <Code size={18} />, label: "GitHub", href: "https://github.com/owsam22" },
              { icon: <UserCircle size={18} />, label: "LinkedIn", href: "https://linkedin.com/in/owsam22" },
              { icon: <Globe size={18} />, label: "Portfolio", href: "https://owsam22.github.io" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  border: "1.5px solid rgba(201,168,76,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#8C6D1F",
                  background: "rgba(201,168,76,0.06)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.15)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#C9A84C";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 16px rgba(201, 168, 76, 0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
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
            className="flex flex-col items-center gap-3 mt-12"
            style={{ animation: "fadeIn 0.8s ease" }}
          >
            <div className="animate-bounce">
              <MousePointer2 className="rotate-180" size={24} style={{ color: "#8C6D1F" }} />
            </div>
            <span
              className="font-ancient"
              style={{
                fontSize: "11px",
                color: "#8C6D1F",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                fontWeight: 700,
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
