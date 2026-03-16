import { TESTIMONIALS } from "../config/content.js";
import { COLORS, FONTS, GRADIENTS, SHADOWS } from "../config/theme.js";

function Stars({ n = 5 }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} style={{ color: "#F59E0B", fontSize: 14 }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      padding: "100px clamp(16px, 5vw, 60px)",
      background: COLORS.white,
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.teal,
            background: "#E0F2F1", padding: "4px 14px", borderRadius: 20,
            letterSpacing: 1, textTransform: "uppercase" }}>
            {TESTIMONIALS.tag}
          </span>
          <h2 style={{ fontFamily: FONTS.display, fontSize: "clamp(26px, 4vw, 44px)",
            fontWeight: 800, color: COLORS.blueDark, marginTop: 16 }}>
            {TESTIMONIALS.headline}
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 22 }}>
          {TESTIMONIALS.items.map((t, i) => (
            <div key={i} style={{
              background: i === 1 ? GRADIENTS.button : COLORS.bg,
              border: `1px solid ${i === 1 ? "transparent" : COLORS.border}`,
              borderRadius: 24, padding: "32px 28px",
              boxShadow: i === 1 ? SHADOWS.xl : SHADOWS.sm,
              display: "flex", flexDirection: "column", gap: 20,
              transition: "transform .2s",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "none"}>

              <Stars n={t.rating}/>

              <p style={{ fontSize: 15, lineHeight: 1.75, fontStyle: "italic",
                color: i === 1 ? "rgba(255,255,255,.9)" : COLORS.text, margin: 0, flex: 1 }}>
                "{t.quote}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: i === 1 ? "rgba(255,255,255,.2)" : GRADIENTS.button,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: FONTS.display, fontWeight: 800, color: "#fff", fontSize: 17,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: FONTS.display, fontWeight: 700, fontSize: 14,
                    color: i === 1 ? "#fff" : COLORS.blueDark }}>{t.author}</div>
                  <div style={{ fontSize: 12, color: i === 1 ? "rgba(255,255,255,.6)" : COLORS.muted }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
