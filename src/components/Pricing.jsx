import { PRICING } from "../config/content.js";
import { COLORS, FONTS, GRADIENTS, SHADOWS } from "../config/theme.js";

export default function Pricing({ onCta }) {
  return (
    <section id="pricing" style={{
      padding: "100px clamp(16px, 5vw, 60px)",
      background: COLORS.bg,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.blue,
            background: COLORS.blueLight, padding: "4px 14px", borderRadius: 20,
            letterSpacing: 1, textTransform: "uppercase" }}>
            {PRICING.tag}
          </span>
          <h2 style={{ fontFamily: FONTS.display, fontSize: "clamp(26px, 4vw, 44px)",
            fontWeight: 800, color: COLORS.blueDark, marginTop: 16, marginBottom: 12 }}>
            {PRICING.headline}
          </h2>
          <p style={{ color: COLORS.muted, fontSize: 17, maxWidth: 420, margin: "0 auto" }}>
            {PRICING.sub}
          </p>
        </div>

        {/* Plans */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, alignItems: "start" }}>
          {PRICING.plans.map((plan, i) => (
            <div key={i} style={{
              background: plan.highlight ? GRADIENTS.button : COLORS.white,
              border: `2px solid ${plan.highlight ? "transparent" : COLORS.border}`,
              borderRadius: 24, padding: plan.highlight ? "36px 28px" : "28px",
              boxShadow: plan.highlight ? SHADOWS.xl : SHADOWS.sm,
              position: "relative", transition: "transform .2s",
            }}
              onMouseEnter={e => { if (!plan.highlight) e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { if (!plan.highlight) e.currentTarget.style.transform = "none"; }}>

              {plan.badge && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  background: COLORS.greenMid, color: COLORS.blueDark,
                  fontSize: 11, fontWeight: 800, fontFamily: FONTS.display,
                  padding: "4px 14px", borderRadius: 20,
                }}>{plan.badge}</div>
              )}

              <div style={{ marginBottom: 8, fontSize: 11, fontWeight: 700, letterSpacing: 1,
                textTransform: "uppercase",
                color: plan.highlight ? "rgba(255,255,255,.6)" : COLORS.muted }}>{plan.name}</div>

              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                <span style={{ fontFamily: FONTS.display, fontSize: 44, fontWeight: 800,
                  color: plan.highlight ? "#fff" : COLORS.blueDark, lineHeight: 1 }}>{plan.price}</span>
                <span style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,.6)" : COLORS.muted }}>{plan.period}</span>
              </div>

              <p style={{ fontSize: 13, color: plan.highlight ? "rgba(255,255,255,.65)" : COLORS.muted,
                marginBottom: 24 }}>{plan.desc}</p>

              <button onClick={onCta} style={{
                width: "100%", padding: "12px", borderRadius: 12, border: "none", cursor: "pointer",
                background: plan.highlight ? COLORS.greenMid : GRADIENTS.button,
                color: plan.highlight ? COLORS.blueDark : "#fff",
                fontSize: 14, fontWeight: 700, fontFamily: FONTS.body,
                boxShadow: plan.highlight ? "0 4px 16px rgba(52,211,153,.4)" : "0 4px 12px rgba(26,107,204,.3)",
                transition: "all .2s", marginBottom: 24,
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                {plan.cta}
              </button>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14,
                    color: plan.highlight ? "rgba(255,255,255,.85)" : COLORS.text }}>
                    <span style={{ color: plan.highlight ? COLORS.greenMid : COLORS.green,
                      fontSize: 16, flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
