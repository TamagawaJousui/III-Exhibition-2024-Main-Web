import { style } from "@vanilla-extract/css";

export const styles = {
    root: style({
        position: "absolute",
        top: "40%",
        right: "50px",
        zIndex: 2,
        transform: "scale(1.5)",
        transformOrigin: "bottom right",
    }),
    DURATION: style({
        position: "relative",
        top: "-130px",
        left: 0,
        fontFamily: "var(--font-playfair)",
        fontSize: "100px",
    }),
    UNDULATION: style({
        position: "relative",
        bottom: 0,
        right: 0,
        fontFamily: "var(--font-playfair)",
        fontSize: "100px",
    }),
};
