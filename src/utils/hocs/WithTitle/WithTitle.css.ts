import { recipe } from "@vanilla-extract/recipes";

import { mediaUtils, vars } from "@/styles";

export const styles = {
    root: recipe({
        base: {
            display: "flex",
            flexDirection: "column",
            width: "max-content",
        },
        variants: {
            mobileAlign: {
                left: {
                    "@media": {
                        [mediaUtils.mobile]: {
                            width: "fit-content",
                        },
                    },
                },
                center: {
                    "@media": {
                        [mediaUtils.mobile]: {
                            width: "100%",
                        },
                    },
                },
            },
        },
    }),
    heading: recipe({
        base: {
            display: "flex",
            borderBottom: `1px solid ${vars.color.textSecondary}`,
        },
        variants: {
            fit: {
                true: {
                    width: "fit-content",
                },
            },
            mobileAlign: {
                left: {
                    alignSelf: "flex-start",
                },
                center: {
                    "@media": {
                        [mediaUtils.mobile]: {
                            alignSelf: "center",
                            fontSize: vars.fontSize.lg,
                        },
                    },
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
