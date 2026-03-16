import { useState } from "react";
import { FAQ } from "../config/content.js";
import { COLORS, FONTS, SHADOWS } from "../config/theme.js";

function FaqItem({ item, open, onToggle }) {
  return (
    <div style={{
      background: COLORS.white, border: `1px solid ${open ? COLORS.blue + "50" : COLORS.border}`,
      borderRadius: 16, overflow: "hidden", transition: "all .2s",
      boxShadow: open ? SHADOWS.md : "none",
    }}>
      <button onClick={onToggle} style={{
        width: "100%", padding: "20px 24px", background: "none", border: "none", cursor: "pointer",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, textAlign: "left",
      }}>
        <span style={{ fontFamily: FONTS.display, fontSize: 16, fontWeight: 700,
          color: open ? COLORS.blue : COLORS.blueDark, lineHeight: 1.4 }}>
          {item.q}
        </span>
        <span style={{
          width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
          background: open ? COLORS.blue : COLORS.bg,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, color: open ? "#fff" : COLORS.muted,
          transition: "all .2s", transform: open ? "rotate(45deg)" : "none",
        }}>+</span>
      </button>
      {open && (
        <div style={{ padding: "0 24px 20px" }}>
          <p style={{ color: COLORS.muted, fontSize: 15, lineHeight: 1.75, margin: 0 }}>{item.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" style={{
      padding: "100px clamp(16px, 5vw, 60px)",
      background: COLORS.white,
    }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.green,
            background: COLORS.greenLight, padding: "4px 14px", borderRadius: 20,
            letterSpacing: 1, textTransform: "uppercase" }}>
            {FAQ.tag}
          </span>
          <h2 style={{ fontFamily: FONTS.display, fontSize: "clamp(26px, 4vw, 44px)",
            fontWeight: 800, color: COLORS.blueDark, marginTop: 16 }}>
            {FAQ.headline}
          </h2>
        </div>

        {/* Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQ.items.map((item, i) => (
            <FaqItem key={i} item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}/>
          ))}
        </div>
      </div>
    </section>
  );
}
