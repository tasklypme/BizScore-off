import { useState, useEffect } from "react";
import { NAV } from "../config/content.js";
import { COLORS, FONTS, GRADIENTS } from "../config/theme.js";

export default function Navbar({ onCta }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = { fontSize: 14, fontWeight: 500, color: scrolled ? COLORS.text : "rgba(255,255,255,.85)",
    textDecoration: "none", transition: "color .15s", cursor: "pointer" };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        height: 64,
        background: scrolled ? "rgba(255,255,255,.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.border}` : "none",
        boxShadow: scrolled ? "0 2px 16px rgba(26,107,204,.1)" : "none",
        transition: "all .3s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(16px, 5vw, 60px)",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: GRADIENTS.button,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 800, color: "#fff", fontFamily: FONTS.display,
            boxShadow: "0 2px 8px rgba(26,107,204,.4)",
          }}>B</div>
          <span style={{ fontFamily: FONTS.display, fontSize: 20, fontWeight: 800,
            color: scrolled ? COLORS.blueDark : "#fff" }}>
            {NAV.logo}
          </span>
          <span style={{ fontSize: 10, background: scrolled ? COLORS.blueLight : "rgba(255,255,255,.2)",
            color: scrolled ? COLORS.blue : "#fff", padding: "2px 8px", borderRadius: 20, fontWeight: 700 }}>
            {NAV.badge}
          </span>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="nav-desktop">
          {NAV.links.map(l => (
            <a key={l.label} href={l.href} style={navLink}
              onMouseEnter={e => e.target.style.color = COLORS.blue}
              onMouseLeave={e => e.target.style.color = scrolled ? COLORS.text : "rgba(255,255,255,.85)"}>
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button onClick={onCta} className="nav-desktop" style={{
            padding: "9px 22px", borderRadius: 10, border: "none", cursor: "pointer",
            background: scrolled ? GRADIENTS.button : "rgba(255,255,255,.15)",
            color: "#fff", fontSize: 14, fontWeight: 700, fontFamily: FONTS.body,
            backdropFilter: "blur(4px)",
            boxShadow: scrolled ? "0 4px 12px rgba(26,107,204,.3)" : "none",
            transition: "all .2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(26,107,204,.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = scrolled ? "0 4px 12px rgba(26,107,204,.3)" : "none"; }}>
            {NAV.cta}
          </button>

          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(o => !o)} className="nav-mobile" style={{
            background: "rgba(255,255,255,.15)", border: "none", borderRadius: 8,
            width: 38, height: 38, cursor: "pointer", color: scrolled ? COLORS.text : "#fff",
            fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 999,
          background: COLORS.white, borderBottom: `1px solid ${COLORS.border}`,
          boxShadow: "0 8px 24px rgba(26,107,204,.12)",
          padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 4,
          animation: "slideDown .2s ease",
        }}>
          {NAV.links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ padding: "12px 0", fontSize: 16, fontWeight: 500, color: COLORS.text,
                textDecoration: "none", borderBottom: `1px solid ${COLORS.border}` }}>
              {l.label}
            </a>
          ))}
          <button onClick={() => { onCta(); setMenuOpen(false); }} style={{
            marginTop: 12, padding: "13px", borderRadius: 12, border: "none", cursor: "pointer",
            background: GRADIENTS.button, color: "#fff", fontSize: 15, fontWeight: 700,
            fontFamily: FONTS.body,
          }}>{NAV.cta}</button>
        </div>
      )}
    </>
  );
}
