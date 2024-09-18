import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        height: "100%",
        width: "100vw",
        gap: vars.spacing.xl,
    }),
    subLabel: recipe({
        base: {
            margin: `0 ${vars.spacing.md} ${vars.spacing.md} ${vars.spacing.md}`,
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
};
