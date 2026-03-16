import { StrictMode } from "react";
import { createRoot }  from "react-dom/client";
import LandingPage     from "./LandingPage.jsx";

// Styles globaux (reset + animations)
const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Sora:wght@700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #F0F5FF; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 4px; }
  button, input, textarea, select { font-family: inherit; }

  /* ── Animations ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50%       { transform: translateX(-50%) translateY(6px); }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* ── Responsive helpers ── */
  .nav-desktop { display: flex !important; }
  .nav-mobile  { display: none  !important; }

  @media (max-width: 768px) {
    .nav-desktop  { display: none  !important; }
    .nav-mobile   { display: flex  !important; }
    .hero-stats   { grid-template-columns: repeat(2, 1fr) !important; }
    .connector    { display: none  !important; }
    .footer-grid  { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 480px) {
    .hero-stats   { grid-template-columns: 1fr 1fr !important; }
    .footer-grid  { grid-template-columns: 1fr !important; }
  }
`;

// Inject global CSS
const style = document.createElement("style");
style.textContent = globalCSS;
document.head.appendChild(style);

// La prop onCta peut être remplacée par un router (react-router) en production
const handleCta = () => {
  // Redirigez ici vers votre page /app ou /auth
  alert("→ Redirection vers l'app (connectez votre router ici)");
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LandingPage onCta={handleCta}/>
  </StrictMode>
);
