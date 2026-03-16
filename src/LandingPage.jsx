// ============================================================
//  LandingPage.jsx
//  Assemblage des 7 sections de la landing page publique.
//  La prop `onCta` redirige vers l'app (inscription/connexion).
// ============================================================

import Navbar        from "./components/Navbar.jsx";
import Hero          from "./components/Hero.jsx";
import Features      from "./components/Features.jsx";
import HowItWorks    from "./components/HowItWorks.jsx";
import Testimonials  from "./components/Testimonials.jsx";
import Pricing       from "./components/Pricing.jsx";
import FaqSection    from "./components/FAQ.jsx";
import CtaFooter     from "./components/CtaFooter.jsx";

export default function LandingPage({ onCta }) {
  return (
    <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", overflowX: "hidden" }}>
      {/* Section 1 — Navigation */}
      <Navbar onCta={onCta}/>

      {/* Section 2 — Hero */}
      <Hero onCta={onCta}/>

      {/* Section 3 — Fonctionnalités */}
      <Features/>

      {/* Section 4 — Comment ça marche */}
      <HowItWorks/>

      {/* Section 5 — Témoignages */}
      <Testimonials/>

      {/* Section 6 — Tarifs */}
      <Pricing onCta={onCta}/>

      {/* Section 7 — FAQ + CTA final + Footer */}
      <FaqSection/>
      <CtaFooter onCta={onCta}/>
    </div>
  );
}
