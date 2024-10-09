import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        width: "100vw",
        padding: vars.spacing.xl,
    }),
    wrapper: style({
        height: "100%",
    }),
    container: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "100%",
        minWidth: "50vw",
    }),
    concept: style({
        display: "flex",
        flexDirection: "column",
        gap: vars.spacing.md,
        textAlign: "center",
        // lineHeight: vars.lineHeight.xl,
    }),
};
