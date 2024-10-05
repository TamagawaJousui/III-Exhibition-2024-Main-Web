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
                margin: "0 auto",
                textAlign: "center",
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
