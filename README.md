# BizScore — Landing Page

Landing page publique de BizScore, l'outil d'analyse business propulsé par Claude AI.

## 🗂 Structure du projet

```
bizscore-landing/
├── .env.example          ← Template des variables d'env (à copier en .env)
├── .env                  ← 🔒 SECRETS — jamais dans Git
├── .gitignore
├── package.json
├── vite.config.js
│
├── public/
│   ├── index.html        ← HTML principal + SEO meta tags
│   └── favicon.svg
│
└── src/
    ├── main.jsx          ← Point d'entrée React + styles globaux
    ├── LandingPage.jsx   ← Assemblage des 7 sections
    │
    ├── config/
    │   ├── env.js        ← Accès centralisé aux variables d'env
    │   ├── theme.js      ← Tokens de design (couleurs, fonts, shadows)
    │   └── content.js    ← Tout le contenu éditorial (textes, liens)
    │
    └── components/
        ├── Navbar.jsx        ← Section 1 : Navigation sticky
        ├── Hero.jsx          ← Section 2 : Hero + stats
        ├── Features.jsx      ← Section 3 : Fonctionnalités (6 cards)
        ├── HowItWorks.jsx    ← Section 4 : 3 étapes
        ├── Testimonials.jsx  ← Section 5 : Témoignages
        ├── Pricing.jsx       ← Section 6 : Tarifs (3 plans)
        ├── FAQ.jsx           ← Section 7a : FAQ accordion
        └── CtaFooter.jsx     ← Section 7b : CTA final + Footer
```

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Copier et configurer l'environnement
cp .env.example .env
# → Remplissez VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY

# 3. Lancer en développement
npm run dev
# → http://localhost:3000

# 4. Build de production
npm run build
```

## 🔒 Sécurité

| Fichier | Visibilité | Contenu |
|---------|-----------|---------|
| `.env.example` | ✅ Public (Git) | Template vide |
| `.env` | 🔒 Privé (gitignore) | Vraies clés |
| `src/config/env.js` | ✅ Public | Lecture des `VITE_*` |
| `ANTHROPIC_API_KEY` | 🔒 Serveur uniquement | Ne jamais en `VITE_*` |

> **Règle d'or** : Seules les variables préfixées `VITE_` sont exposées côté client.  
> La clé Anthropic doit rester **côté serveur** (Edge Function, API route, etc.)

## 🎨 Modifier le contenu

Tout le texte de la landing est dans **`src/config/content.js`** :
- `HERO` — Titre, sous-titre, stats
- `FEATURES` — Les 6 fonctionnalités
- `HOW` — Les 3 étapes
- `TESTIMONIALS` — Les avis clients
- `PRICING` — Les 3 plans tarifaires
- `FAQ` — Les questions/réponses
- `CTA`, `FOOTER` — Bas de page

## 🔗 Connecter l'app

Dans `src/main.jsx`, remplacez `handleCta` par votre router :

```jsx
// Avec React Router
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
<LandingPage onCta={() => navigate("/auth")}/>
```

## 🛠 Stack technique

- **React 18** + Vite 5
- **Supabase** — Auth + Base de données
- **Claude AI** (Anthropic) — Moteur d'analyse
- **Déploiement** : Vercel / Netlify (drag & drop du dossier `dist/`)
