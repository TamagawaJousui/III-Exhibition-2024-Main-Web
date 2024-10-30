import { style } from "@vanilla-extract/css";

import { mediaUtils, typography, vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: `${vars.spacing.xs} ${vars.spacing.md}`,
        fontFamily: "var(--font-playfair)",
    }),
    title: style([
        typography({
            color: "black",
        }),
        {
            lineHeight: "1",
        },
    ]),
    ul: style({
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        listStyle: "none",
        gap: vars.spacing.md,
        fontSize: vars.fontSize["2xl"],
        margin: 0,
        "@media": {
            [mediaUtils.md]: {
                flexDirection: "row",
                fontSize: vars.fontSize["sm"],
            },
        },
    }),
    li: style({
        display: "flex",
        flexDirection: "column",
        gap: vars.spacing.md,
        width: "fit-content",
        "@media": {
            [mediaUtils.md]: {
                flexDirection: "row",
                gap: vars.spacing.sm,
                width: "auto",
            },
        },
    }),
    modal: style({
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(182, 206, 228, 0.9)",
        zIndex: vars.zIndex.modal,
    }),
    desktopView: style({
        display: "none",
        "@media": {
            [mediaUtils.md]: {
                display: "block",
            },
        },
    }),
    mobileView: style({
        display: "block",
        "@media": {
            [mediaUtils.md]: {
                display: "none",
            },
        },
    }),
};
