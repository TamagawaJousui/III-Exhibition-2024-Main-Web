import tailwind3dTransformPlugin from "@xpd/tailwind-3dtransforms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F9F6F7",
        "header-background": "#B6CEE4",
        "pickup-background": "#D9D9D9",
        "pickup-text": "#5E5E5E",
        "pickup-button": "#2E2E2E",
        "works-modal-background": "#3B3B3B",
        "works-modal-line": "#F0F0F0",
        "divider-line": "#FFFFFF66",
        "works-modal-member": "#FFFFFF",
        "works-modal-member-affiliationJa": "#D9D9D9CC",
        "works-carousel-title": "#EDE7E9",
        "works-carousel-forum": "#7994A8",
        "works-carousel-exhibition": "#BE9783",
        "works-carousel-sky": "#A0B5A0",
        "works-carousel-open": "#B89393",
        "works-carousel-progress": "#FFFCF5B3",
        "works-carousel-progress-line": "#C5C4CC",
        "member-name-english": "#C4C4C4",
      },
      keyframes: {
        "bounce-x": {
          "0%, 100%": {
            transform: "translateX(-10%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        "bounce-x": "bounce-x 2s infinite",
      },
      screens: {
        short: { raw: "(max-height: 950px)" },
      },
    },
    fontFamily: {
      "concept-ja": ["Klee One"],
      "concept-en": ["Playfair Light"],
      "section-title": ["Playfair Display SC"],
      header: ["Playfair Display SC"],
      "works-title": ["Playfair Display SC", "Noto Serif JP"],
      serif: ["Noto Serif JP"],
      gothic: ["Zen Kaku Gothic Antique"],
    },
  },
  plugins: [tailwind3dTransformPlugin],
  safelist: [
    {
      pattern: /bg-(works-.*)/,
    },
  ],
};
