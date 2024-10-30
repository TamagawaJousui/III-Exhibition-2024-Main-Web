import { style } from "@vanilla-extract/css";

import { mediaUtils, vars } from "@/styles";

export const styles = {
    root: style({
        width: "100vw",
        padding: vars.spacing.xl,
        "@media": {
            [mediaUtils.mobile]: {
                width: "100%",
            },
        },
    }),
    wrapper: style({
        height: "100%",
    }),
    container: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "100%",
    }),
    concept: style({
        display: "flex",
        flexDirection: "column",
        gap: vars.spacing.md,
        textAlign: "center",
        // lineHeight: vars.lineHeight.xl,
    }),
};
