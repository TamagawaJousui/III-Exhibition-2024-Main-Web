import { style } from "@vanilla-extract/css";

import { mediaUtils, vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        alignItems: "center",
        width: "fit-content",

        zIndex: vars.zIndex.header,
    }),
    ul: style({
        display: "flex",
        flexWrap: "wrap",
        listStyle: "none",
        gap: vars.spacing.md,
        "@media": {
            [mediaUtils.mobile]: {
                flexDirection: "column",
                gap: vars.spacing.md,
                fontFamily: "var(--font-playfair)",
                fontSize: vars.fontSize.xl,
            },
        },
    }),
    li: style({
        display: "flex",
        gap: vars.spacing.sm,
        "@media": {
            [mediaUtils.mobile]: {
                flexDirection: "column",
                gap: vars.spacing.md,
            },
        },
    }),
    modal: style({
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#B6CEE4",
        opacity: 0.5,
        zIndex: vars.zIndex.modal,
    }),
};
