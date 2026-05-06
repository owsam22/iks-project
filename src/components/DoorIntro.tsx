import { useState, useEffect, useCallback } from "react";
import { 
  Code, 
  UserCircle, 
  Globe, 
  Sparkles, 
  MousePointer2
} from "lucide-react";

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
    }, 1200);
  }, [phase, onComplete]);

  useEffect(() => {
    const t1 = setTimeout(() => setReady(true), 800);
    // Faster auto-advance (4.5s)
    const t2 = setTimeout(triggerOpen, 4500);
    
    const handleScroll = (e: WheelEvent | TouchEvent) => {
      if (ready) triggerOpen();
    };

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
        background: "#0a0f1a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        animation: phase === "opening" ? "portal-reveal 1.2s cubic-bezier(0.76, 0, 0.24, 1) forwards" : "none"
      }}
    >
      {/* Lightweight Background Mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="animate-rotate-slow" style={{ width: '90vw', height: '90vw' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[0.3]" stroke="var(--accent)">
            <circle cx="50" cy="50" r="48" />
            <circle cx="50" cy="50" r="40" strokeDasharray="2, 4" />
            {[...Array(24)].map((_, i) => (
              <line key={i} x1="50" y1="2" x2="50" y2="8" transform={`rotate(${i * 15} 50 50)`} />
            ))}
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-8">
        {/* Top Text - Sanskrit */}
        <div className="animate-pulse-glow font-devanagari mb-6" style={{
          fontSize: "clamp(18px, 2.5vw, 28px)", color: "var(--accent)",
          letterSpacing: "0.2em",
        }}>
          ज्ञानं परमं बलम्
        </div>

        {/* Main Title */}
        <div className="mb-10">
          <h1 className="font-serif leading-tight" style={{
            fontSize: "clamp(36px, 7vw, 84px)", fontWeight: 900,
            color: "#FFFFFF",
            textShadow: "0 8px 24px rgba(0,0,0,0.6)",
            letterSpacing: "0.08em",
            textTransform: "uppercase"
          }}>
            Indian<br />
            <span style={{ color: "var(--accent)" }}>Knowledge</span><br />
            System
          </h1>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-10 w-full max-w-xs">
          <div className="h-px flex-1 bg-accent/30" />
          <Sparkles className="text-accent" size={24} />
          <div className="h-px flex-1 bg-accent/30" />
        </div>

        {/* Designer Credit - Improved Visibility */}
        <div className="flex flex-col items-center gap-4 bg-black/20 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
          <div className="font-ancient text-accent tracking-[0.4em] uppercase text-[10px] font-bold">
            Curated By
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-widest font-bold drop-shadow-lg">
            samarpan(owsam22)
          </h2>
          
          <div className="flex gap-6 mt-4">
            {[
              { icon: <Code size={20} />, label: "GitHub" },
              { icon: <UserCircle size={20} />, label: "LinkedIn" },
              { icon: <Globe size={20} />, label: "Portfolio" }
            ].map((s, idx) => (
              <div key={idx} 
                className="w-12 h-12 rounded-xl border border-accent/40 flex items-center justify-center text-accent bg-accent/5 hover:bg-accent hover:text-navy transition-all duration-300 shadow-lg"
                title={s.label}
              >
                {s.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Prompt */}
        {ready && phase === "waiting" && (
          <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-80">
            <div className="animate-bounce flex flex-col items-center gap-2">
              <MousePointer2 className="text-accent rotate-180" size={24} />
              <span className="font-ancient text-accent text-[10px] tracking-[0.5em] uppercase font-black">
                Scroll to Enter
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }} />
    </div>
  );
}
