import { style } from "@vanilla-extract/css";

export const styles = {
    magic: style({
        position: "absolute",
        width: "100%",
        height: "100%",
        transform: "translate(2em, 2em)",
        top: 0,
        left: 0,
        zIndex: 2,
    }),
};
