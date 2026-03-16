// ============================================================
//  config/env.js
//  Point d'accès unique aux variables d'environnement Vite.
//  Toute la config publique passe par ici — jamais import.meta.env directement.
// ============================================================

export const ENV = {
  supabaseUrl:  import.meta.env.VITE_SUPABASE_URL  || "",
  supabaseKey:  import.meta.env.VITE_SUPABASE_ANON_KEY || "",
  appName:      import.meta.env.VITE_APP_NAME      || "BizScore",
  appUrl:       import.meta.env.VITE_APP_URL        || "https://bizscore.io",
  isProd:       import.meta.env.VITE_APP_ENV        === "production",
  enablePricing:import.meta.env.VITE_ENABLE_PRICING !== "false",
};

// Validation au démarrage
if (!ENV.supabaseUrl || !ENV.supabaseKey) {
  console.warn("[BizScore] ⚠️ Variables Supabase manquantes dans .env");
}
