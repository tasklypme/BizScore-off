import { CTA, FOOTER } from "../config/content.js";
import { COLORS, FONTS, GRADIENTS } from "../config/theme.js";

function CtaBanner({ onCta }) {
  return (
    <section style={{
      padding: "80px clamp(16px, 5vw, 60px)",
      background: GRADIENTS.hero, position: "relative", overflow: "hidden",
    }}>
      {/* Orbs */}
      <div style={{ position:"absolute",top:"-20%",right:"-5%",width:400,height:400,
        borderRadius:"50%",background:"rgba(52,211,153,.08)",pointerEvents:"none" }}/>
      <div style={{ position:"absolute",bottom:"-20%",left:"-5%",width:400,height:400,
        borderRadius:"50%",background:"rgba(255,255,255,.05)",pointerEvents:"none" }}/>

      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontFamily: FONTS.display, fontSize: "clamp(26px, 4vw, 48px)",
          fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: 16 }}>
          {CTA.headline}
        </h2>
        <p style={{ color: "rgba(255,255,255,.72)", fontSize: 17, lineHeight: 1.65, marginBottom: 40 }}>
          {CTA.sub}
        </p>
        <button onClick={onCta} style={{
          padding: "17px 40px", borderRadius: 16, border: "none", cursor: "pointer",
          background: COLORS.greenMid, color: COLORS.blueDark,
          fontSize: 17, fontWeight: 800, fontFamily: FONTS.body,
          boxShadow: "0 8px 30px rgba(52,211,153,.45)", transition: "all .2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(52,211,153,.55)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(52,211,153,.45)"; }}>
          {CTA.button}
        </button>
        <div style={{ display:"flex", justifyContent:"center", gap:24, flexWrap:"wrap", marginTop:20 }}>
          {CTA.trust.map(t => (
            <span key={t} style={{ fontSize:13, color:"rgba(255,255,255,.55)", display:"flex", alignItems:"center", gap:5 }}>
              <span style={{ color:COLORS.greenMid }}>✓</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: COLORS.blueDark,
      padding: "60px clamp(16px, 5vw, 60px) 30px",
      color: "rgba(255,255,255,.55)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Top row */}
        <div style={{ display:"grid", gridTemplateColumns:"2fr repeat(3, 1fr)", gap:40, marginBottom:48 }}
          className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
              <div style={{ width:36, height:36, borderRadius:10, background:COLORS.greenMid,
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:17, fontWeight:800, color:COLORS.blueDark, fontFamily:FONTS.display }}>B</div>
              <span style={{ fontFamily:FONTS.display, fontSize:20, fontWeight:800,
                color:"#fff" }}>{FOOTER.logo}</span>
            </div>
            <p style={{ fontSize:14, lineHeight:1.7, maxWidth:220 }}>{FOOTER.tagline}</p>
            {/* Social */}
            <div style={{ display:"flex", gap:10, marginTop:20 }}>
              {["𝕏", "in", "🐙"].map((icon, i) => (
                <a key={i} href="#" style={{
                  width:34, height:34, borderRadius:8,
                  background:"rgba(255,255,255,.08)", display:"flex",
                  alignItems:"center", justifyContent:"center",
                  color:"rgba(255,255,255,.6)", fontSize:14, textDecoration:"none",
                  transition:"background .15s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background="rgba(255,255,255,.15)"}
                  onMouseLeave={e => e.currentTarget.style.background="rgba(255,255,255,.08)"}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER.links.map(col => (
            <div key={col.title}>
              <div style={{ fontSize:12, fontWeight:700, color:"rgba(255,255,255,.9)",
                letterSpacing:1, textTransform:"uppercase", marginBottom:16 }}>
                {col.title}
              </div>
              <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:10 }}>
                {col.items.map(item => (
                  <li key={item.label}>
                    <a href={item.href} style={{ fontSize:14, color:"rgba(255,255,255,.5)",
                      textDecoration:"none", transition:"color .15s" }}
                      onMouseEnter={e => e.currentTarget.style.color="#fff"}
                      onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,.5)"}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ borderTop:"1px solid rgba(255,255,255,.08)", paddingTop:24,
          display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
          <span style={{ fontSize:13 }}>{FOOTER.bottom}</span>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <span style={{ width:8, height:8, borderRadius:"50%", background:COLORS.greenMid,
              boxShadow:`0 0 8px ${COLORS.greenMid}` }}/>
            <span style={{ fontSize:12 }}>Tous systèmes opérationnels</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function CtaFooter({ onCta }) {
  return (
    <>
      <CtaBanner onCta={onCta}/>
      <Footer/>
    </>
  );
}
