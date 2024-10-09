import { globalStyle, style } from "@vanilla-extract/css";

import { typography } from "@/styles/typography.css";

import { mediaUtils, vars } from "@/styles";

export const styles = {
    root: style({
        display: "grid",
        gap: vars.spacing.md,
        gridTemplateRows: "repeat(auto-fill, 25vh)",
        gridTemplateColumns: "auto",
        gridAutoFlow: "column",
        width: "100%",
        height: "100%",
        "@media": {
            [mediaUtils.mobile]: {
                gridTemplateColumns: "1fr",
                gridAutoFlow: "row",
                gridTemplateRows: "auto",
                height: "auto",
            },
        },
    }),
    item: style({
        padding: `0 ${vars.spacing.xl}`,
        "@media": {
            [mediaUtils.mobile]: {
                padding: 0,
            },
        },
    }),
    mapContainer: style({
        position: "relative",
        height: "100%",
        gridRow: "span 2",
        "@media": {
            [mediaUtils.mobile]: {
                width: "100%",
                aspectRatio: "16 / 9",
                gridRow: "auto",
            },
        },
    }),
    map: style({
        objectPosition: "left",
    }),
    info: style([
        typography({ fontSize: "lg" }),
        {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: vars.spacing.xs,
        },
    ]),
};

globalStyle(`${styles.root} h3`, {
    borderBottom: `1px solid ${vars.color.textSecondary}`,
    width: "fit-content",
});

globalStyle(`${styles.root} p`, {
    whiteSpace: "nowrap",
    /**
     * FIXME: WithTitle内で対処
     */
    textAlign: "left",
    "@media": {
        [mediaUtils.mobile]: {
            textAlign: "center",
        },
    },
});

globalStyle(`${styles.root} b`, {
    whiteSpace: "nowrap",
    textAlign: "left",
});
