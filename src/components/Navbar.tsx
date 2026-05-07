import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Intro", href: "#introduction" },
  { label: "Scholars", href: "#scholars" },
  { label: "Literature", href: "#literature" },
  { label: "Shastra", href: "#shastra" },
  { label: "Timeline", href: "#timeline" },
  { label: "Preserve", href: "#conservation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Update active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActive(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      // When using custom smooth scroll, we just update the target
      // But since targetScrollY is in App.tsx, we'll use a custom event or window property
      (window as any).targetScrollY = offsetPosition;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(13, 27, 42, 0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      padding: "0 clamp(16px, 5vw, 80px)",
      height: scrolled ? "72px" : "96px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: scrolled ? "1px solid rgba(212, 175, 55, 0.2)" : "1px solid transparent",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
    }}>
      {/* Logo */}
      <button
        onClick={() => scrollTo("#hero")}
        style={{
          background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", gap: "12px",
          textDecoration: "none"
        }}
      >
        <div style={{
          width: "40px", height: "40px", borderRadius: "10px",
          background: "linear-gradient(135deg, var(--accent), #A67C00)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#0D1B2A",
          boxShadow: scrolled ? "0 0 15px rgba(212, 175, 55, 0.4)" : "none",
          transition: "all 0.3s ease"
        }}>
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>ॐ</span>
        </div>
        <div style={{ textAlign: "left" }}>
          <span className="font-serif" style={{
            color: "white", fontWeight: 700, fontSize: "20px",
            letterSpacing: "0.02em", display: "block", lineHeight: 1
          }}> Indian Knowledge System</span>
          <span className="font-ancient" style={{ 
            color: "var(--accent)", fontSize: "10px", 
            letterSpacing: "0.1em", fontWeight: 700,
            display: scrolled ? "none" : "block", marginTop: "4px"
          }}>MUSEUM</span>
        </div>
      </button>

      {/* Desktop Nav */}
      <div style={{
        display: "flex", gap: "12px", alignItems: "center"
      }} className="desktop-nav">
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            style={{
              background: active === link.href.replace("#", "") ? "rgba(212, 175, 55, 0.1)" : "none",
              border: "none", cursor: "pointer",
              fontFamily: "var(--font-ancient)",
              color: active === link.href.replace("#", "") ? "var(--accent)" : "rgba(255,255,255,0.7)",
              fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", padding: "8px 16px",
              borderRadius: "50px", transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              if (active !== link.href.replace("#", "")) {
                (e.currentTarget as HTMLElement).style.color = "white";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              }
            }}
            onMouseLeave={(e) => {
              if (active !== link.href.replace("#", "")) {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                (e.currentTarget as HTMLElement).style.background = "none";
              }
            }}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-menu-btn"
        style={{
          background: "rgba(212, 175, 55, 0.1)", border: "1px solid rgba(212, 175, 55, 0.3)",
          cursor: "pointer", color: "var(--accent)",
          width: "44px", height: "44px", borderRadius: "12px",
          display: "none", alignItems: "center", justifyContent: "center"
        }}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: "fixed", top: scrolled ? "72px" : "96px", left: 0, right: 0,
        height: menuOpen ? "calc(100vh - 72px)" : "0",
        background: "rgba(13, 27, 42, 0.98)",
        backdropFilter: "blur(20px)",
        overflow: "hidden",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex", flexDirection: "column",
        padding: menuOpen ? "32px" : "0 32px",
        zIndex: 999
      }}>
        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: active === link.href.replace("#", "") ? "var(--accent)" : "white",
              fontSize: "24px", fontWeight: 700, padding: "20px 0",
              textAlign: "left", fontFamily: "var(--font-serif)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
              transition: `all 0.4s ease ${i * 0.05}s`,
              borderBottom: "1px solid rgba(255,255,255,0.05)"
            }}
          >
            {link.label}
            {active === link.href.replace("#", "") && <ChevronRight size={24} />}
          </button>
        ))}
      </div>

      <style>{`
        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
