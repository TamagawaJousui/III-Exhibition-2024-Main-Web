import { globalStyle, style } from "@vanilla-extract/css";

import { typography } from "@/styles/typography.css";

import { mediaUtils, vars } from "@/styles";

export const styles = {
    root: style({
        display: "grid",
        gap: vars.spacing.md,
        gridTemplateRows: "auto",
        gridTemplateColumns: "1fr",
        gridAutoFlow: "row",
        height: "auto",
        width: "100%",
        "@media": {
            [mediaUtils.md]: {
                gridTemplateRows: "repeat(auto-fill, 25vh)",
                gridTemplateColumns: "auto",
                gridAutoFlow: "column",
                height: "100%",
            },
        },
    }),
    item: style({
        padding: 0,

        "@media": {
            [mediaUtils.md]: {
                padding: `0 ${vars.spacing.xl}`,
            },
        },
    }),
    mapContainer: style({
        position: "relative",
        height: "100%",
        aspectRatio: "16 / 9",
        gridRow: "auto",

        "@media": {
            [mediaUtils.md]: {
                aspectRatio: "auto",
                gridRow: "span 2",
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
});
