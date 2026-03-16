// ============================================================
//  config/content.js
//  Tout le contenu éditorial de la landing page.
//  Modifiez ici sans toucher aux composants.
// ============================================================

export const NAV = {
  logo:    "BizScore",
  badge:   "IA",
  links: [
    { label: "Fonctionnalités", href: "#features"   },
    { label: "Comment ça marche", href: "#how"      },
    { label: "Tarifs",          href: "#pricing"    },
    { label: "FAQ",             href: "#faq"        },
  ],
  cta:     "Commencer gratuitement",
};

export const HERO = {
  tag:      "Propulsé par Claude AI · Analyse en 30 secondes",
  headline: ["Notez votre business", "comme un investisseur"],
  sub:      "BizScore analyse votre entreprise avec l'IA et génère un rapport complet : scores, forces, faiblesses, et recommandation d'investissement — en quelques secondes.",
  cta1:     "Analyser mon business →",
  cta2:     "Voir une démo",
  trust:    ["Gratuit pour commencer", "Aucune CB requise", "Résultat instantané"],
  stats: [
    { value: "2 400+", label: "Business analysés" },
    { value: "98%",    label: "Satisfaction client" },
    { value: "30s",    label: "Temps d'analyse" },
    { value: "6",      label: "Critères évalués" },
  ],
};

export const FEATURES = {
  tag:      "Fonctionnalités",
  headline: "Tout ce dont vous avez besoin pour évaluer un business",
  sub:      "Une analyse complète, claire et actionnable — générée par l'IA en quelques secondes.",
  items: [
    {
      icon:  "🤖",
      title: "Analyse IA avancée",
      desc:  "Claude analyse votre business comme un investisseur senior : modèle économique, marché, équipe, opérations.",
      color: "#1A6BCC",
    },
    {
      icon:  "📊",
      title: "6 scores détaillés",
      desc:  "Financiers, Innovation, Équipe, Marché, Marque, Opérations — avec notation AAA à C comme les agences de rating.",
      color: "#16A36B",
    },
    {
      icon:  "🎯",
      title: "Recommandation claire",
      desc:  "FORT POTENTIEL, POTENTIEL MODÉRÉ, RISQUÉ ou DÉCONSEILLÉ. Une décision lisible, pas un rapport de 50 pages.",
      color: "#0D9488",
    },
    {
      icon:  "⚡",
      title: "Résultat instantané",
      desc:  "30 secondes. Pas d'attente, pas de rendez-vous, pas de consultant à 500€/heure.",
      color: "#3B82F6",
    },
    {
      icon:  "💾",
      title: "Historique complet",
      desc:  "Toutes vos analyses sauvegardées dans votre espace personnel. Suivez l'évolution dans le temps.",
      color: "#1A6BCC",
    },
    {
      icon:  "🔒",
      title: "Sécurisé & privé",
      desc:  "Données chiffrées sur Supabase. Row Level Security : vous seul accédez à vos analyses.",
      color: "#16A36B",
    },
  ],
};

export const HOW = {
  tag:      "Comment ça marche",
  headline: "3 étapes, 30 secondes",
  sub:      "Pas de formation requise. Pas de jargon. Juste vos infos et un rapport expert.",
  steps: [
    {
      number: "01",
      title:  "Décrivez votre business",
      desc:   "Remplissez le formulaire : secteur, stade, chiffre d'affaires, modèle économique. Plus vous êtes précis, plus l'analyse est pertinente.",
      icon:   "📝",
    },
    {
      number: "02",
      title:  "L'IA analyse tout",
      desc:   "Claude lit vos informations et génère une évaluation multicritère comme un investisseur expérimenté. En 30 secondes.",
      icon:   "🤖",
    },
    {
      number: "03",
      title:  "Obtenez votre rapport",
      desc:   "Scores détaillés, radar de performance, forces, faiblesses, opportunités, risques et recommandation d'investissement.",
      icon:   "📈",
    },
  ],
};

export const TESTIMONIALS = {
  tag:      "Témoignages",
  headline: "Ils ont analysé leur business",
  items: [
    {
      quote:  "J'ai obtenu en 30 secondes une analyse que j'aurais payé 2 000€ à un consultant. Le radar des scores m'a permis de prioriser mes efforts.",
      author: "Sophie M.",
      role:   "Fondatrice, SaaS RH",
      avatar: "S",
      rating: 5,
    },
    {
      quote:  "Avant de pitcher mes investisseurs, j'ai utilisé BizScore pour identifier mes points faibles. La recommandation 'FORT POTENTIEL' m'a donné confiance.",
      author: "Thomas L.",
      role:   "CEO, Fintech Seed",
      avatar: "T",
      rating: 5,
    },
    {
      quote:  "Outil indispensable pour analyser les dossiers de mes clients. Rapide, structuré, et l'analyse IA est vraiment pertinente.",
      author: "Marc D.",
      role:   "Conseiller en stratégie",
      avatar: "M",
      rating: 5,
    },
  ],
};

export const PRICING = {
  tag:      "Tarifs",
  headline: "Simple, transparent, sans surprise",
  sub:      "Commencez gratuitement, évoluez selon vos besoins.",
  plans: [
    {
      name:     "Starter",
      price:    "0€",
      period:   "/ mois",
      desc:     "Pour découvrir BizScore",
      cta:      "Commencer gratuitement",
      highlight: false,
      features: [
        "3 analyses / mois",
        "Rapport complet",
        "Historique 30 jours",
        "Export PDF",
      ],
    },
    {
      name:     "Pro",
      price:    "29€",
      period:   "/ mois",
      desc:     "Pour les entrepreneurs actifs",
      cta:      "Essayer 14 jours gratuits",
      highlight: true,
      badge:    "Le plus populaire",
      features: [
        "Analyses illimitées",
        "Historique complet",
        "Export PDF & Excel",
        "Comparaison multi-business",
        "Support prioritaire",
      ],
    },
    {
      name:     "Business",
      price:    "99€",
      period:   "/ mois",
      desc:     "Pour les équipes & cabinets",
      cta:      "Contacter l'équipe",
      highlight: false,
      features: [
        "Tout Pro +",
        "5 comptes utilisateurs",
        "API access",
        "Analyses en marque blanche",
        "Account manager dédié",
      ],
    },
  ],
};

export const FAQ = {
  tag:      "FAQ",
  headline: "Questions fréquentes",
  items: [
    {
      q: "Comment l'IA analyse-t-elle mon business ?",
      a: "BizScore utilise Claude (Anthropic), l'un des modèles IA les plus avancés. Il analyse vos informations selon 6 critères clés utilisés par les investisseurs professionnels : finances, innovation, équipe, marché, marque et opérations.",
    },
    {
      q: "Mes données sont-elles sécurisées ?",
      a: "Oui. Vos données sont stockées sur Supabase avec Row Level Security activé : seul votre compte y accède. Aucune donnée n'est partagée avec des tiers ou utilisée pour entraîner des modèles IA.",
    },
    {
      q: "L'analyse est-elle vraiment fiable ?",
      a: "L'analyse est basée sur les informations que vous fournissez. Plus vous êtes précis dans votre description, plus le rapport est pertinent. Il s'agit d'une aide à la décision, pas d'une vérité absolue.",
    },
    {
      q: "Puis-je analyser plusieurs business ?",
      a: "Oui, dans la limite de votre plan. Starter : 3/mois. Pro et Business : illimité. Chaque analyse est sauvegardée et consultable à tout moment.",
    },
    {
      q: "Combien de temps dure une analyse ?",
      a: "Environ 30 secondes une fois le formulaire soumis. L'IA traite vos informations et génère un rapport complet quasi instantanément.",
    },
    {
      q: "Y a-t-il un engagement ou une CB requise pour le plan gratuit ?",
      a: "Non. Le plan Starter est 100% gratuit, sans CB, sans engagement. Vous pouvez upgrader à tout moment.",
    },
  ],
};

export const CTA = {
  headline: "Prêt à connaître la valeur réelle de votre business ?",
  sub:      "Rejoignez 2 400+ entrepreneurs qui ont déjà analysé leur entreprise avec BizScore.",
  button:   "Analyser mon business gratuitement →",
  trust:    ["Gratuit pour commencer", "30 secondes", "Sans engagement"],
};

export const FOOTER = {
  logo:    "BizScore",
  tagline: "L'analyse business propulsée par l'IA.",
  links: [
    {
      title: "Produit",
      items: [
        { label: "Fonctionnalités", href: "#features" },
        { label: "Tarifs",         href: "#pricing"  },
        { label: "Changelog",      href: "#"         },
      ],
    },
    {
      title: "Légal",
      items: [
        { label: "Mentions légales",    href: "#" },
        { label: "Politique de conf.", href: "#"  },
        { label: "CGU",                href: "#"  },
      ],
    },
    {
      title: "Support",
      items: [
        { label: "FAQ",         href: "#faq"   },
        { label: "Contact",     href: "#"      },
        { label: "Statut API",  href: "#"      },
      ],
    },
  ],
  bottom: "© 2026 BizScore. Tous droits réservés.",
};
