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
      background: scrolled ? "rgba(10, 18, 32, 0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      padding: "0 clamp(16px, 5vw, 80px)",
      height: scrolled ? "70px" : "92px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: scrolled ? "1px solid rgba(201,168,76,0.18)" : "1px solid transparent",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.25)" : "none"
    }}>
      {/* Logo */}
      <button
        onClick={() => scrollTo("#hero")}
        style={{
          background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", gap: "14px",
          textDecoration: "none"
        }}
      >
        <div style={{
          width: "42px", height: "42px", borderRadius: "11px",
          background: "linear-gradient(135deg, var(--saffron) 0%, var(--accent) 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#0D1B2A",
          boxShadow: scrolled ? "0 0 18px rgba(232,137,12,0.35)" : "none",
          transition: "all 0.35s ease",
          fontFamily: "Noto Serif Devanagari, serif",
          fontSize: "22px", fontWeight: "bold"
        }}>ॐ</div>
        <div style={{ textAlign: "left" }}>
          <span className="font-serif nav-logo-text" style={{
            color: "#F7F1E3", fontWeight: 700,
            letterSpacing: "0.03em", display: "block", lineHeight: 1
          }}>Indian Knowledge System</span>
          <span className="font-ancient nav-logo-sub" style={{
            color: "var(--accent)", fontSize: "9px",
            letterSpacing: "0.22em", fontWeight: 700, textTransform: "uppercase",
            display: scrolled ? "none" : "block", marginTop: "5px", opacity: 0.8
          }}>Digital Museum</span>
        </div>
      </button>

      {/* Desktop Nav */}
      <div style={{ display: "flex", gap: "6px", alignItems: "center" }} className="desktop-nav">
        {navLinks.map((link) => {
          const isActive = active === link.href.replace("#", "");
          return (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Marcellus, serif",
                color: isActive ? "var(--accent)" : "rgba(247,241,227,0.65)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "10px 14px",
                borderRadius: "8px",
                transition: "all 0.25s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent-light)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.color = "rgba(247,241,227,0.65)";
                  (e.currentTarget as HTMLElement).style.background = "none";
                }
              }}
            >
              {link.label}
              {isActive && (
                <span style={{
                  position: "absolute", bottom: "5px", left: "50%", transform: "translateX(-50%)",
                  width: "20px", height: "2px", borderRadius: "1px",
                  background: "linear-gradient(90deg, var(--saffron), var(--accent))",
                  display: "block"
                }} />
              )}
            </button>
          );
        })}
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-menu-btn"
        style={{
          background: "rgba(201,168,76,0.1)",
          border: "1px solid rgba(201,168,76,0.25)",
          cursor: "pointer", color: "var(--accent)",
          width: "44px", height: "44px", borderRadius: "12px",
          display: "none", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s ease"
        }}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: "fixed",
        top: scrolled ? "70px" : "92px",
        left: 0, right: 0,
        height: menuOpen ? "calc(100vh - 70px)" : "0",
        background: "rgba(9, 15, 26, 0.98)",
        backdropFilter: "blur(24px)",
        overflow: "hidden",
        transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex", flexDirection: "column",
        padding: menuOpen ? "32px 28px" : "0 28px",
        zIndex: 999,
        borderTop: "1px solid rgba(201,168,76,0.15)"
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
        .nav-logo-text { font-size: 18px; }
        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (max-width: 480px) {
          .nav-logo-text { font-size: 15px; }
          .nav-logo-sub { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
