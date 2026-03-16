// ============================================================
//  config/theme.js
//  Tokens de design — couleurs, typographie, espacements
// ============================================================

export const COLORS = {
  blue:       "#1A6BCC",
  blueLight:  "#EBF3FF",
  blueMid:    "#3B82F6",
  blueDark:   "#0F3E7A",
  green:      "#16A36B",
  greenLight: "#E6F7F1",
  greenMid:   "#34D399",
  teal:       "#0D9488",
  white:      "#FFFFFF",
  bg:         "#F0F5FF",
  border:     "#DBEAFE",
  text:       "#0F172A",
  muted:      "#64748B",
  faint:      "#CBD5E1",
};

export const FONTS = {
  display: "'Sora', sans-serif",
  body:    "'DM Sans', 'Helvetica Neue', sans-serif",
};

export const SHADOWS = {
  sm:  "0 2px 8px rgba(26,107,204,.07)",
  md:  "0 4px 16px rgba(26,107,204,.12)",
  lg:  "0 8px 32px rgba(26,107,204,.18)",
  xl:  "0 16px 48px rgba(15,62,122,.22)",
};

export const GRADIENTS = {
  hero:    `linear-gradient(135deg, #0F3E7A 0%, #1A6BCC 50%, #3B82F6 100%)`,
  card:    `linear-gradient(135deg, #EBF3FF, #E6F7F1)`,
  button:  `linear-gradient(135deg, #0F3E7A, #1A6BCC, #3B82F6)`,
  section: `linear-gradient(180deg, #F0F5FF 0%, #FFFFFF 100%)`,
};
