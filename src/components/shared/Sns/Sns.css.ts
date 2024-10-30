import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@/styles";

export const styles = {
    root: recipe({
        base: {
            display: "flex",
        },
        variants: {
            gap: {
                sm: {
                    gap: vars.spacing.sm,
                },
                md: {
                    gap: vars.spacing.md,
                },
            },
        },
    }),
};
