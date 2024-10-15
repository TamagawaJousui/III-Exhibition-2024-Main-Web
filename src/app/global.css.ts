import { globalStyle } from "@vanilla-extract/css";

import { mediaUtils, vars } from "@/styles";

globalStyle("html, body", {
    margin: 0,

    height: "100vh",
    width: "auto",
    /*スクロールバー非表示（IE・Edge）*/
    msOverflowStyle: "none",
    /*スクロールバー非表示（Firefox）*/
    scrollbarWidth: "none",
    fontFamily: "var(--font-klee), sans-serif",

    "@media": {
        [`${mediaUtils.mdMax}`]: {
            height: "auto",
            width: "100vw",
            maxWidth: "100vw",
        },
    },
});

globalStyle("*", {
    boxSizing: "border-box",
    color: vars.color.text,
});

globalStyle(":root", {
    fontSize: "min(calc(0.25rem + 1.75vh), calc(0.25rem + 2vw), 32px)",
});

globalStyle("a", {
    textDecoration: "none",
    color: vars.color.text,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
    margin: 0,
    padding: 0,
});

/**
 * font family
 */
globalStyle("h1", {
    fontFamily: "var(--font-playfair-italic), sans-serif",
});

globalStyle("h2", {
    fontFamily: "var(--font-playfair), var(--font-klee), sans-serif",
});

globalStyle("h3", {
    fontFamily: "var(--font-noto-serif), var(--font-klee), serif",
});

globalStyle("h4", {
    fontFamily: "var(--font-noto-serif), var(--font-klee), serif",
});

/**
 * font size
 */

globalStyle("h1", {
    fontSize: vars.fontSize["3xl"],
});

globalStyle("h2", {
    fontSize: vars.fontSize["2xl"],
});

globalStyle("h3", {
    fontSize: vars.fontSize.xl,
    fontWeight: vars.fontWeight.extraBold,
});

globalStyle("h4", {
    fontSize: vars.fontSize.lg,
});

globalStyle("h5", {
    fontSize: vars.fontSize.base,
});

globalStyle("h6", {
    fontSize: vars.fontSize.sm,
});

globalStyle("p", {
    fontSize: vars.fontSize.base,
    margin: 0,
    padding: 0,
});

globalStyle("span", {
    fontSize: vars.fontSize.base,
});

globalStyle("ul", {
    fontSize: vars.fontSize.sm,
});

globalStyle("img", {
    pointerEvents: "none",
    userSelect: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
});

globalStyle("::-webkit-scrollbar", {
    display: "none",
});
