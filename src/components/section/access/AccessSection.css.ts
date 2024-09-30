import { globalStyle, style } from "@vanilla-extract/css";

import { typography } from "@/styles/typography.css";

import { mediaUtils, vars } from "@/styles";

export const styles = {
    root: style({
        padding: `${vars.spacing.md} 0`,
        display: "grid",
        gap: vars.spacing.md,
        gridTemplateRows: "repeat(auto-fill, 20vh)",
        gridTemplateColumns: "max(50vw, 300px)",
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
    mapContainer: style({
        position: "relative",
        height: "100%",
        gridRow: "span 2",
        "@media": {
            [mediaUtils.mobile]: {
                width: "80vw",
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
            padding: vars.spacing.sm,
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
