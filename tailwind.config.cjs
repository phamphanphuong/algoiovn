/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#020617",
          800: "#0b1120",
          700: "#111827",
        },
        quant: {
          cyan: "#00E5FF",
          lime: "#A6FF00",
          orange: "#FFB14A",
        },
        light: {
          bg: "#F7F9FC",
          card: "#FFFFFF",
          border: "#D2DAE4",
          text: "#0F172A",
          subtext: "#4B5563",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular"],
      },
      borderRadius: {
        quant: "0.9rem",
      },
      boxShadow: {
        "quant-soft": "0 18px 45px rgba(15,23,42,0.75)",
      },
    },
  },
  plugins: [],
};
