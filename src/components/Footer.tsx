import { 
  Code, 
  UserCircle, 
  Globe, 
  Mail, 
  ArrowRight,
  Library,
  GraduationCap
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{
      background: "#0D1B2A",
      padding: "80px clamp(20px, 6vw, 96px) 40px",
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(212, 175, 55, 0.2)"
    }}>
      {/* Background gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)"
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1300px", margin: "0 auto" }}>
        {/* Top grid */}
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "2.5fr 1fr 1.5fr",
          gap: "80px",
          marginBottom: "64px"
        }}>
          {/* Brand */}
          <ScrollReveal animation="slide-up">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "12px",
                  background: "linear-gradient(135deg, var(--accent), #A67C00)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#0D1B2A",
                  boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)"
                }}>
                  <span style={{ fontSize: "24px", fontWeight: "bold" }}>ॐ</span>
                </div>
                <div>
                  <div className="font-serif" style={{ fontSize: "24px", fontWeight: 700, color: "white", letterSpacing: "0.02em" }}>
                    Indian Knowledge System
                  </div>
                  <div className="font-ancient" style={{ fontSize: "12px", color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700 }}>
                    A Digital Heritage Museum
                  </div>
                </div>
              </div>
              <p style={{
                fontSize: "15px", color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8, maxWidth: "400px", marginBottom: "32px"
              }}>
                A comprehensive digital project dedicated to exploring 5,000 years of Indian intellectual tradition — from the abstract heights of philosophy to the empirical depths of applied sciences.
              </p>
              <div className="font-devanagari" style={{
                fontSize: "20px", color: "var(--accent)",
                marginBottom: "4px", textShadow: "0 0 10px rgba(212, 175, 55, 0.3)"
              }}>
                ज्ञानं परमं बलम्
              </div>
              <div className="font-ancient" style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                "Knowledge is the Supreme Power"
              </div>
            </div>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal animation="slide-up" delay={100}>
            <div>
              <div className="font-ancient" style={{
                fontSize: "13px", color: "var(--accent)", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "24px"
              }}>
                Quick Access
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "Introduction", id: "introduction" },
                  { label: "Scholar Gallery", id: "scholars" },
                  { label: "Literature & Vedas", id: "literature" },
                  { label: "Shastra Sciences", id: "shastra" },
                  { label: "Historical Timeline", id: "timeline" },
                  { label: "Preservation", id: "conservation" },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      color: "rgba(255,255,255,0.5)", fontSize: "14px",
                      textAlign: "left", padding: 0, fontFamily: "inherit",
                      display: "flex", alignItems: "center", gap: "8px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                      (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                    }}
                  >
                    <ArrowRight size={14} /> {link.label}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Creator */}
          <ScrollReveal animation="slide-up" delay={200}>
            <div>
              <div className="font-ancient" style={{
                fontSize: "13px", color: "var(--accent)", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "24px"
              }}>
                The Designer
              </div>

              <div style={{
                display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px"
              }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "16px",
                  background: "linear-gradient(135deg, var(--accent), #A67C00)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#0D1B2A", boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)"
                }}>
                  <GraduationCap size={28} />
                </div>
                <div>
                  <div className="font-serif" style={{ color: "white", fontWeight: 700, fontSize: "18px", letterSpacing: "0.05em" }}>Samarpan (owsam22)</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>IKS Research & Design</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {[
                  { icon: <Code size={18} />, label: "GitHub", href: "https://github.com/owsam22" },
                  { icon: <UserCircle size={18} />, label: "LinkedIn", href: "https://linkedin.com/in/owsam22" },
                  { icon: <Globe size={18} />, label: "Portfolio", href: "https://owsam22.github.io/portfolio" },
                  { icon: <Mail size={18} />, label: "Email", href: "mailto:22samarpan@gmail.com" }
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    style={{
                      width: "44px", height: "44px", borderRadius: "12px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(212, 175, 55, 0.2)",
                      cursor: "pointer", color: "white",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", 
                      textDecoration: "none"
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
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)",
          marginBottom: "32px"
        }} />

        {/* Bottom row */}
        <div className="footer-bottom" style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "24px"
        }}>
          <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.02em" }}>
            © 2026 samarpan (owsam22) · Indian Knowledge System Digital Museum · Heritage Preservation Project
          </div>
          <div style={{
            display: "flex", gap: "16px", alignItems: "center"
          }}>
            <div style={{
              background: "rgba(212, 175, 55, 0.1)",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              borderRadius: "50px", padding: "6px 20px",
              fontSize: "13px", color: "var(--accent)",
              fontWeight: 700, display: "flex", alignItems: "center", gap: "8px"
            }}>
              <Library size={14} /> विद्या धनं सर्वधन प्रधानम्
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .footer-bottom {
            justify-content: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
