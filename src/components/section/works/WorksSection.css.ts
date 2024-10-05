import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { styleUtils, vars } from "@/styles";

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

    allWorks: style([
        styleUtils.alignVertical,
        {
            display: "flex",
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
    label: recipe({
        base: {
            padding: vars.spacing.xs,
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
        flex: 1,
        overflow: "hidden",
    }),
};
