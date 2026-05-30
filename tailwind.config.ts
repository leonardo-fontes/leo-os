import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        system: {
          background: "#090B14",
          surface: "#111827",
          panel: "#121D35",
          border: "rgba(168, 85, 247, 0.18)",
          borderSoft: "rgba(255, 255, 255, 0.1)",
          primary: "#2563EB",
          secondary: "#7C3AED",
          accent: "#A855F7",
          text: "#F8FAFC",
          textSoft: "#D3E1FF",
          textMuted: "#94A3B8",
          success: "#22C55E",
          warning: "#F59E0B",
          danger: "#EF4444",
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
