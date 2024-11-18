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
        "works-modal-background": "#3B3B3B",
        "works-modal-line": "#F0F0F0",
        "divider-line": "#FFFFFF66",
        "works-modal-member": "#FFFFFF",
        "works-modal-member-affiliationJa": "#D9D9D9CC",
      },
    },
    fontFamily: {
      "concept-ja": ["Klee One"],
      "concept-en": ["Playfair Light"],
      "section-title": ["Playfair Display SC"],
      "works-title": ["Playfair Display SC", "Noto Serif JP"],
      serif: ["Noto Serif JP"],
      gothic: ["Zen Kaku Gothic Antique"],
    },
  },
  plugins: [],
};
