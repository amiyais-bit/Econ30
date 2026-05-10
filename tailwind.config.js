/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#e8f5ec",
        ink: "#111216",
      },
      boxShadow: {
        soft: "0 12px 26px rgba(17, 18, 22, 0.08)",
      },
    },
  },
  plugins: [],
};

