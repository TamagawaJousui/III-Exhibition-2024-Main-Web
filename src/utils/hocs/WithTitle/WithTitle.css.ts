import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { mediaUtils, vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        width: "max-content",
        "@media": {
            [mediaUtils.mobile]: {
                width: "fit-content",
            },
        },
    }),
    heading: recipe({
        base: {
            borderBottom: `1px solid ${vars.color.textSecondary}`,
        },
        variants: {
            fit: {
                true: {
                    width: "fit-content",
                },
            },
        },
    }),
    content: recipe({
        variants: {
            padding: {
                sm: {
                    padding: vars.spacing.sm,
                },
                md: {
                    padding: vars.spacing.md,
                },
            },
        },
    }),
};
