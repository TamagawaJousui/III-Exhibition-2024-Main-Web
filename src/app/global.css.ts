import { globalStyle } from "@vanilla-extract/css";

import { vars } from "@/styles";

globalStyle("html, body", {
    margin: 0,

    backgroundRepeat: "no-repeat repeat",
    backgroundPosition: "center top",
    backgroundColor: vars.color.primaryBackground,
    fontFamily: `var(--font-dotgothic), var(--font-pressstart2p), sans-serif`,
    scrollbarColor: `${vars.color.black} ${vars.color.primaryBackground}`,
});

globalStyle("*", {
    boxSizing: "border-box",
    color: vars.color.text,
});

globalStyle(":root", {
    fontSize: "min(calc(0.25rem + 2vh), 32px)",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
    fontWeight: "normal",
    color: vars.color.black,
    fontFamily: "var(--font-pressstart2p)",
});

globalStyle("a", {
    textDecoration: "none",
    color: vars.color.text,
});

globalStyle("h1", {
    fontSize: vars.fontSize.xl,
});

globalStyle("h2", {
    fontSize: vars.fontSize.lg,
});

globalStyle("h3", {
    fontSize: vars.fontSize.md,
});

globalStyle("h4", {
    fontSize: vars.fontSize.md,
    fontFamily: "var(--font-dotgothic)",
});

globalStyle("h5", {
    fontSize: vars.fontSize.sm,
});

globalStyle("h6", {
    fontSize: vars.fontSize.xs,
});

globalStyle("p", {
    fontSize: vars.fontSize.sm,
    fontFamily: "var(--font-dotgothic)",
});

globalStyle("span", {
    fontSize: vars.fontSize.sm,
    fontFamily: "var(--font-dotgothic)",
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
    width: "12px",
});

globalStyle("::-webkit-scrollbar-thumb", {
    backgroundColor: "black",
    borderRadius: "5px",
});
