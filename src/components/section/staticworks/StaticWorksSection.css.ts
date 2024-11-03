import { style } from "@vanilla-extract/css";

import { mediaUtils, styleUtils, vars } from "@/styles";

export const styles = {
    root: style([
        styleUtils.alignVertical,
        {
            display: "flex",
            flexWrap: "wrap",
            height: "100%",
            padding: `${vars.spacing.md} 0`,
            "@media": {
                [mediaUtils.xl]: { flexWrap: "nowrap" },
            },
        },
    ]),
};

export const subContainerStyles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        gap: vars.spacing.md,
        height: "100%",
    }),
    label: style({
        padding: vars.spacing.xs,
        fontFamily: "var(--font-noto-serif)",
    }),
    content: style({
        flex: "auto",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }),
};
