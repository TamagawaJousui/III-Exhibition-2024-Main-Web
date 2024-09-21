import { globalStyle, style } from "@vanilla-extract/css";

import { typography } from "@/styles/typography.css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        padding: `${vars.spacing.md} 0`,
        display: "grid",
        gap: vars.spacing.md,
        gridTemplateRows: "repeat(auto-fill, 20vh)",
        gridTemplateColumns: "max(50vw, 300px)",
        gridAutoFlow: "column",
        height: "100%",
    }),
    mapContainer: style({
        position: "relative",
        height: "100%",
        gridRow: "span 2",
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
