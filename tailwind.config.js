/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F9F6F7",
        "pickup-background": "#D9D9D9",
        "pickup-text": "#5E5E5E",
        "pickup-button": "#2E2E2E",
        line: "#FFFFFF66",
      },
    },
    fontFamily: {
      "concept-ja": ["Klee One"],
      "concept-en": ["Playfair Light"],
      "section-title": ["Playfair Display SC"],
      "works-title": ["Playfair Display SC", "游明朝体", "Yu Mincho", "YuMincho"],
      serif: ["游明朝体", "Yu Mincho", "YuMincho"],
      gothic: ["Zen Kaku Gothic Antique"],
    },
  },
  plugins: [],
};
