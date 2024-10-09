import { style } from "@vanilla-extract/css";

import { mediaUtils, typography, vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: `${vars.spacing.xs} ${vars.spacing.md}`,
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
        flexWrap: "wrap",
        listStyle: "none",
        gap: vars.spacing.md,
        margin: 0,
        "@media": {
            [mediaUtils.mobile]: {
                flexDirection: "column",
                gap: vars.spacing.md,
                fontFamily: "var(--font-playfair)",
                fontSize: vars.fontSize["2xl"],
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
                width: "fit-content",
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
        display: "block",
        "@media": {
            [mediaUtils.mobile]: {
                display: "none",
            },
        },
    }),
    mobileView: style({
        display: "none",
        "@media": {
            [mediaUtils.mobile]: {
                display: "block",
            },
        },
    }),
};
