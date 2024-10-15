import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { mediaUtils, styleUtils, vars } from "@/styles";

export const styles = {
    root: style([
        styleUtils.alignVertical,
        {
            display: "flex",
            height: "100%",
            padding: `${vars.spacing.md} 0`,
            gap: vars.spacing.xl,
        },
    ]),

    pickUp: style({
        "@media": {
            [mediaUtils.mdMax]: { height: "600px" },
        },
    }),

    allWorks: styleUtils.alignVertical,
};

export const subContainerStyles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        gap: vars.spacing.md,
        height: "100%",
    }),
    label: recipe({
        base: {
            padding: vars.spacing.xs,
            fontFamily: "var(--font-noto-serif)",
        },
        variants: {
            withBorder: {
                true: {
                    borderBottom: `1px solid ${vars.color.text}`,
                },
            },
        },
    }),
    content: style({
        flex: "auto",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }),
};
