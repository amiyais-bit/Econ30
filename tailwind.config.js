/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"SF Pro Display"',
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        paper: "#fbfbfd",
        surface: "#f5f5f7",
        ink: "#1d1d1f",
        "ink-secondary": "#86868b",
        "apple-blue": "#0071e3",
        "apple-blue-hover": "#0077ed",
      },
      boxShadow: {
        apple:
          "0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 0 rgba(0, 0, 0, 0.04)",
        "apple-md": "0 4px 24px rgba(0, 0, 0, 0.07)",
        "apple-lg": "0 12px 40px rgba(0, 0, 0, 0.08)",
        glow:
          "0 0 0 1px rgba(0, 113, 227, 0.12), 0 24px 48px -12px rgba(0, 113, 227, 0.35), 0 12px 24px -8px rgba(0, 0, 0, 0.12)",
        "glow-sm":
          "0 0 20px -4px rgba(0, 113, 227, 0.45), 0 8px 24px -6px rgba(0, 0, 0, 0.15)",
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
      },
      animation: {
        "pulse-slow": "pulse-slow 5s ease-in-out infinite",
        float: "float 18s ease-in-out infinite",
        "gradient-text": "gradient-text 7s ease infinite",
        shimmer: "shimmer 2.2s ease-in-out infinite",
        "border-glow": "border-glow 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
