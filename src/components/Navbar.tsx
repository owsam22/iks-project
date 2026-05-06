import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Introduction", href: "#introduction" },
  { label: "Scholars", href: "#scholars" },
  { label: "Literature", href: "#literature" },
  { label: "Shastra", href: "#shastra" },
  { label: "Timeline", href: "#timeline" },
  { label: "Conservation", href: "#conservation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Update active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 100) {
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
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" style={{
      background: scrolled ? "rgba(15, 26, 48, 0.97)" : "linear-gradient(to bottom, rgba(10,16,30,0.6), transparent)",
      padding: "0 clamp(16px, 4vw, 64px)",
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: scrolled ? "1px solid rgba(200,169,81,0.12)" : "none",
    }}>
      {/* Logo */}
      <button
        onClick={() => scrollTo("#hero")}
        style={{
          background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", gap: "10px",
          textDecoration: "none"
        }}
      >
        <div style={{
          width: "36px", height: "36px", borderRadius: "8px",
          background: "linear-gradient(135deg, rgba(200,169,81,0.3), rgba(200,169,81,0.1))",
          border: "1px solid rgba(200,169,81,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "18px"
        }}>🕉️</div>
        <span className="font-serif" style={{
          color: "#F8F5F0", fontWeight: 600, fontSize: "17px",
          letterSpacing: "0.02em"
        }}>IKS</span>
      </button>

      {/* Desktop Nav */}
      <div style={{
        display: "flex", gap: "28px", alignItems: "center"
      }} className="desktop-nav">
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className={`nav-link ${active === link.href.replace("#", "") ? "active" : ""}`}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "inherit"
            }}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-menu-btn"
        style={{
          background: "none", border: "none", cursor: "pointer",
          color: "rgba(255,255,255,0.85)", fontSize: "22px",
          display: "none"
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "64px", left: 0, right: 0,
          background: "rgba(10, 18, 35, 0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(200,169,81,0.15)",
          padding: "16px 24px",
          display: "flex", flexDirection: "column", gap: "4px",
          zIndex: 999
        }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: active === link.href.replace("#", "") ? "#C8A951" : "rgba(255,255,255,0.8)",
                fontSize: "15px", fontWeight: 500, padding: "12px 0",
                textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.05)",
                fontFamily: "inherit"
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
