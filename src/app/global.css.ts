import { globalStyle } from "@vanilla-extract/css";

import { vars } from "@/styles";

globalStyle("html, body", {
    margin: 0,

    height: "100vh",
    width: "auto",
    fontFamily: "var(--font-klee), var(--font-playfair), sans-serif",
});

globalStyle("*", {
    boxSizing: "border-box",
    color: vars.color.text,
});

globalStyle(":root", {
    fontSize: "min(calc(0.25rem + 2vh), 32px)",
});

globalStyle("a", {
    textDecoration: "none",
    color: vars.color.text,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
    fontFamily: "var(--font-playfair), var(--font-klee)",
    margin: 0,
    padding: 0,
});

globalStyle("h1", {
    fontSize: vars.fontSize["3xl"],
});

globalStyle("h2", {
    fontSize: vars.fontSize["2xl"],
});

globalStyle("h3", {
    fontSize: vars.fontSize.xl,
});

globalStyle("h4", {
    fontSize: vars.fontSize.lg,
});

globalStyle("h5", {
    fontSize: vars.fontSize.sm,
});

globalStyle("h6", {
    fontSize: vars.fontSize.xs,
});

globalStyle("p", {
    fontSize: vars.fontSize.base,
    margin: 0,
    padding: 0,
});

globalStyle("span", {
    fontSize: vars.fontSize.sm,
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

// globalStyle("::-webkit-scrollbar", {
//     width: "12px",
// });

// globalStyle("::-webkit-scrollbar-thumb", {
//     backgroundColor: "black",
//     borderRadius: "5px",
// });
