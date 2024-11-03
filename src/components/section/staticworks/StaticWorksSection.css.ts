import { style } from "@vanilla-extract/css";

import { styleUtils, vars } from "@/styles";

export const styles = {
    root: style([
        styleUtils.alignVertical,
        {
            display: "flex",
            height: "100%",
            padding: `${vars.spacing.md} 0`,
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
