import type { Config } from "tailwindcss";

/**
 * Design tokens overgenomen uit het EnviLabs Merkboek.
 * Dit is de enige bron van waarheid voor kleur, type, spacing en radii.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    // Spacing-schaal: uitsluitend 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96.
    spacing: {
      "0": "0px",
      px: "1px",
      "1": "4px",
      "2": "8px",
      "3": "12px",
      "4": "16px",
      "6": "24px",
      "8": "32px",
      "12": "48px",
      "16": "64px",
      "24": "96px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      // Hoofdkleuren
      navy: "#0B1F3A",
      teal: "#00C9A7",
      paper: "#FFFFFF",
      white: "#FFFFFF",
      black: "#000000",
      // Neutrale schaal (slate)
      slate: {
        "50": "#F7F8FA",
        "100": "#EDEFF3",
        "200": "#DEE2E8",
        "300": "#C4CBD4",
        "400": "#98A1AE",
        "500": "#6B7785",
        "600": "#4D5663",
        "700": "#353C46",
        "800": "#20262E",
      },
      // Signaalkleuren
      success: "#00A878",
      warning: "#E8A317",
      error: "#DC4E45",
      info: "#2A6FDB",
      // Lijnen / achtergrond
      line: "#E6E9EE",
      bg: "#F0F2F5",
    },
    borderRadius: {
      none: "0px",
      sm: "3px",
      md: "6px",
      lg: "8px",
      full: "9999px",
    },
    fontFamily: {
      display: ["var(--font-display)", "system-ui", "sans-serif"],
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      mono: ["var(--font-mono)", "ui-monospace", "monospace"],
    },
    extend: {
      maxWidth: {
        content: "1320px",
      },
      letterSpacing: {
        // negatieve tracking voor display/koppen (−2% … −3,5%)
        tightest: "-0.035em",
        tighter: "-0.03em",
        tight: "-0.02em",
        // mono labels: +4%
        mono: "0.04em",
      },
      fontSize: {
        // Hiërarchie uit het merkboek
        display: ["clamp(2.75rem, 6vw, 6rem)", { lineHeight: "1.02" }],
        h1: ["clamp(2rem, 4vw, 2.5rem)", { lineHeight: "1.1" }],
        h2: ["1.75rem", { lineHeight: "1.2" }],
        h3: ["1.125rem", { lineHeight: "1.4" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        ui: ["0.8125rem", { lineHeight: "1.4" }],
        caption: ["0.75rem", { lineHeight: "1.4" }],
      },
      boxShadow: {
        card: "0 8px 32px -12px rgba(11,31,58,.12)",
        "card-hover": "0 16px 48px -16px rgba(11,31,58,.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
