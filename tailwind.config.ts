import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        system: {
          background: "rgb(var(--system-background) / <alpha-value>)",
          surface: "rgb(var(--system-surface) / <alpha-value>)",
          panel: "rgb(var(--system-panel) / <alpha-value>)",
          border: "rgb(var(--system-border) / <alpha-value>)",
          borderSoft: "rgb(var(--system-border-soft) / <alpha-value>)",
          primary: "rgb(var(--system-primary) / <alpha-value>)",
          secondary: "rgb(var(--system-secondary) / <alpha-value>)",
          accent: "rgb(var(--system-accent) / <alpha-value>)",
          text: "rgb(var(--system-text) / <alpha-value>)",
          textSoft: "rgb(var(--system-text-soft) / <alpha-value>)",
          textMuted: "rgb(var(--system-text-muted) / <alpha-value>)",
          success: "rgb(var(--system-success) / <alpha-value>)",
          warning: "rgb(var(--system-warning) / <alpha-value>)",
          danger: "rgb(var(--system-danger) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["Orbitron", "Chakra Petch", "Space Grotesk", "sans-serif"],
        title: ["Rajdhani", "Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        panel: "0 10px 28px rgba(2, 8, 23, 0.6)",
        glow: "0 0 40px rgba(37, 99, 235, 0.35), 0 0 80px rgba(124, 58, 237, 0.2)",
        glowStrong: "0 0 48px rgba(168, 85, 247, 0.45)",
        cta: "0 0 18px rgba(37, 99, 235, 0.2), 0 0 28px rgba(124, 58, 237, 0.18)",
      },
      keyframes: {
        "system-gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "system-gradient-shift": "system-gradient-shift 6s ease-in-out infinite",
      },
      fontSize: {
        micro: ["10px", { lineHeight: "14px" }],
        tiny: ["11px", { lineHeight: "16px" }],
      },
      letterSpacing: {
        system: "0.12em",
        wideSystem: "0.16em",
      },
      borderRadius: {
        system: "15px",
        panel: "24px",
      },
    },
  },
  plugins: [],
};

export default config;
