import { FEATURES } from "../config/content.js";
import { COLORS, FONTS, SHADOWS } from "../config/theme.js";

export default function Features() {
  return (
    <section id="features" style={{
      padding: "100px clamp(16px, 5vw, 60px)",
      background: COLORS.white,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.blue,
            background: COLORS.blueLight, padding: "4px 14px", borderRadius: 20,
            letterSpacing: 1, textTransform: "uppercase" }}>
            {FEATURES.tag}
          </span>
          <h2 style={{ fontFamily: FONTS.display, fontSize: "clamp(26px, 4vw, 44px)",
            fontWeight: 800, color: COLORS.blueDark, marginTop: 16, marginBottom: 14, lineHeight: 1.2 }}>
            {FEATURES.headline}
          </h2>
          <p style={{ color: COLORS.muted, fontSize: 17, maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
            {FEATURES.sub}
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {FEATURES.items.map((f, i) => (
            <div key={i} style={{
              background: COLORS.bg, border: `1px solid ${COLORS.border}`,
              borderRadius: 20, padding: "28px 24px", transition: "all .25s",
              cursor: "default",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = SHADOWS.lg;
                e.currentTarget.style.borderColor = f.color + "50";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = COLORS.border;
              }}>
              <div style={{ width: 52, height: 52, borderRadius: 16,
                background: f.color + "18", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 26, marginBottom: 18 }}>
                {f.icon}
              </div>
              <h3 style={{ fontFamily: FONTS.display, fontSize: 18, fontWeight: 700,
                color: COLORS.blueDark, marginBottom: 10 }}>{f.title}</h3>
              <p style={{ color: COLORS.muted, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
