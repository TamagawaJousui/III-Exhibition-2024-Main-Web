import { style } from "@vanilla-extract/css";

export const styles = {
    root: style({
        position: "absolute",
        bottom: "20%",
        right: "50px",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    }),
    span: style({
        display: "flex",
        justifyContent: "space-between",
        gap: "40px",
    }),
    YuMincho: style({
        fontFamily: "YuMincho, Yu Mincho",
    }),
    PlayfairDisplay: style({
        fontFamily: "var(--font-playfair)",
    }),
    fontSize: style({
        fontSize: "40px",
    }),
};
