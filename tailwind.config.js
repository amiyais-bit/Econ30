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
      },
      maxWidth: {
        content: "1068px",
      },
    },
  },
  plugins: [],
};
