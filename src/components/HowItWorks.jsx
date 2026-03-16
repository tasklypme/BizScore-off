import { HOW } from "../config/content.js";
import { COLORS, FONTS, GRADIENTS } from "../config/theme.js";

export default function HowItWorks() {
  return (
    <section id="how" style={{
      padding: "100px clamp(16px, 5vw, 60px)",
      background: `linear-gradient(180deg, ${COLORS.bg} 0%, ${COLORS.white} 100%)`,
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.green,
            background: COLORS.greenLight, padding: "4px 14px", borderRadius: 20,
            letterSpacing: 1, textTransform: "uppercase" }}>
            {HOW.tag}
          </span>
          <h2 style={{ fontFamily: FONTS.display, fontSize: "clamp(26px, 4vw, 44px)",
            fontWeight: 800, color: COLORS.blueDark, marginTop: 16, marginBottom: 14 }}>
            {HOW.headline}
          </h2>
          <p style={{ color: COLORS.muted, fontSize: 17, maxWidth: 460, margin: "0 auto", lineHeight: 1.65 }}>
            {HOW.sub}
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32, position: "relative" }}>
          {/* Connector line (desktop) */}
          <div style={{ position: "absolute", top: 52, left: "16.66%", right: "16.66%",
            height: 2, background: `linear-gradient(90deg,${COLORS.blue}44,${COLORS.green}44)`,
            zIndex: 0 }} className="connector"/>

          {HOW.steps.map((step, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center",
              textAlign: "center", position: "relative", zIndex: 1 }}>
              {/* Number circle */}
              <div style={{
                width: 88, height: 88, borderRadius: "50%",
                background: GRADIENTS.button,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                marginBottom: 24, boxShadow: "0 8px 24px rgba(26,107,204,.3)",
                border: `4px solid ${COLORS.white}`,
              }}>
                <span style={{ fontSize: 26 }}>{step.icon}</span>
              </div>

              {/* Number badge */}
              <div style={{
                position: "absolute", top: -6, right: "50%", transform: "translateX(28px)",
                width: 24, height: 24, borderRadius: "50%",
                background: COLORS.greenMid, color: COLORS.blueDark,
                fontSize: 11, fontWeight: 800, fontFamily: FONTS.display,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{i + 1}</div>

              <div style={{ fontFamily: FONTS.display, fontSize: 13, fontWeight: 700,
                color: COLORS.blue, marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>
                Étape {step.number}
              </div>
              <h3 style={{ fontFamily: FONTS.display, fontSize: 20, fontWeight: 700,
                color: COLORS.blueDark, marginBottom: 12 }}>{step.title}</h3>
              <p style={{ color: COLORS.muted, fontSize: 14, lineHeight: 1.7, maxWidth: 260 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
