import { style } from "@vanilla-extract/css";

export const styles = {
    root: style({
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
    }),
    icon: style({
        objectFit: "contain",
    }),
};
