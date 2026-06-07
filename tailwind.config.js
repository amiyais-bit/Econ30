/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        display: ['"Syne"', "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#fbfbfd",
        surface: "#f5f5f7",
        ink: "#1d1d1f",
        "ink-secondary": "#86868b",
        "apple-blue": "#0071e3",
        "apple-blue-hover": "#0077ed",
        accent: "#5856d6",
        "accent-warm": "#5ac8fa",
      },
      boxShadow: {
        apple:
          "0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 0 rgba(0, 0, 0, 0.04)",
        "apple-md": "0 4px 24px rgba(0, 0, 0, 0.07)",
        "apple-lg": "0 12px 40px rgba(0, 0, 0, 0.08)",
        glow:
          "0 0 0 1px rgba(0, 113, 227, 0.12), 0 24px 48px -12px rgba(0, 113, 227, 0.35), 0 8px 32px -8px rgba(88, 86, 214, 0.15)",
        "glow-sm":
          "0 0 24px -4px rgba(0, 113, 227, 0.45), 0 8px 24px -6px rgba(88, 86, 214, 0.12)",
      },
      maxWidth: {
        content: "1068px",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.65", transform: "scale(1.08)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(2%, -3%)" },
          "66%": { transform: "translate(-2%, 2%)" },
        },
        "gradient-text": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "border-glow": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
        "orb-drift-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(4%, 6%) scale(1.06)" },
        },
        "orb-drift-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-5%, -4%) scale(1.04)" },
        },
        "orb-drift-3": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(3%, -5%) scale(1.05)" },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 5s ease-in-out infinite",
        float: "float 18s ease-in-out infinite",
        "gradient-text": "gradient-text 7s ease infinite",
        shimmer: "shimmer 2.2s ease-in-out infinite",
        "border-glow": "border-glow 3.5s ease-in-out infinite",
        "orb-drift-1": "orb-drift-1 22s ease-in-out infinite",
        "orb-drift-2": "orb-drift-2 28s ease-in-out infinite",
        "orb-drift-3": "orb-drift-3 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
