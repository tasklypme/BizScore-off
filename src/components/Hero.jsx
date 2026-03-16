import { HERO } from "../config/content.js";
import { COLORS, FONTS, GRADIENTS, SHADOWS } from "../config/theme.js";

export default function Hero({ onCta }) {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      background: GRADIENTS.hero,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: "120px clamp(16px, 5vw, 60px) 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative background orbs */}
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 500, height: 500,
        borderRadius: "50%", background: "rgba(52,211,153,.08)", pointerEvents: "none" }}/>
      <div style={{ position: "absolute", bottom: "-15%", left: "-8%", width: 600, height: 600,
        borderRadius: "50%", background: "rgba(59,130,246,.1)", pointerEvents: "none" }}/>
      <div style={{ position: "absolute", top: "30%", left: "10%", width: 200, height: 200,
        borderRadius: "50%", background: "rgba(255,255,255,.04)", pointerEvents: "none" }}/>

      <div style={{ maxWidth: 780, textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(255,255,255,.12)", backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,.2)", borderRadius: 30,
          padding: "8px 18px", marginBottom: 28,
          fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,.9)",
          animation: "fadeUp .6s ease",
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.greenMid,
            boxShadow: `0 0 8px ${COLORS.greenMid}` }}/>
          {HERO.tag}
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: FONTS.display, fontSize: "clamp(36px, 7vw, 72px)",
          fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 24,
          animation: "fadeUp .6s ease .1s both",
        }}>
          {HERO.headline[0]}<br/>
          <span style={{ color: COLORS.greenMid }}>{HERO.headline[1]}</span>
        </h1>

        {/* Sub */}
        <p style={{
          fontSize: "clamp(15px, 2vw, 19px)", color: "rgba(255,255,255,.75)",
          lineHeight: 1.7, maxWidth: 580, margin: "0 auto 40px",
          animation: "fadeUp .6s ease .2s both",
        }}>{HERO.sub}</p>

        {/* CTAs */}
        <div style={{
          display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap",
          marginBottom: 32, animation: "fadeUp .6s ease .3s both",
        }}>
          <button onClick={onCta} style={{
            padding: "15px 32px", borderRadius: 14, border: "none", cursor: "pointer",
            background: COLORS.greenMid, color: COLORS.blueDark,
            fontSize: 16, fontWeight: 800, fontFamily: FONTS.body,
            boxShadow: `0 6px 24px rgba(52,211,153,.4)`, transition: "all .2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(52,211,153,.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(52,211,153,.4)"; }}>
            {HERO.cta1}
          </button>
          <button style={{
            padding: "15px 32px", borderRadius: 14, cursor: "pointer",
            background: "rgba(255,255,255,.12)", backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,.25)", color: "#fff",
            fontSize: 16, fontWeight: 600, fontFamily: FONTS.body, transition: "all .2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.2)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,.12)"}>
            {HERO.cta2}
          </button>
        </div>

        {/* Trust pills */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap",
          marginBottom: 64, animation: "fadeUp .6s ease .4s both",
        }}>
          {HERO.trust.map(t => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 6,
              fontSize: 13, color: "rgba(255,255,255,.65)", fontWeight: 500 }}>
              <span style={{ color: COLORS.greenMid, fontSize: 15 }}>✓</span> {t}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2,
          background: "rgba(255,255,255,.08)", backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,.15)", borderRadius: 20, overflow: "hidden",
          animation: "fadeUp .6s ease .5s both",
        }} className="hero-stats">
          {HERO.stats.map((s, i) => (
            <div key={i} style={{
              padding: "22px 16px", textAlign: "center",
              borderRight: i < HERO.stats.length - 1 ? "1px solid rgba(255,255,255,.1)" : "none",
            }}>
              <div style={{ fontFamily: FONTS.display, fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 800, color: "#fff", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,.55)", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        color: "rgba(255,255,255,.4)", fontSize: 12, animation: "bounce 2s infinite" }}>
        <span>↓</span>
      </div>
    </section>
  );
}
