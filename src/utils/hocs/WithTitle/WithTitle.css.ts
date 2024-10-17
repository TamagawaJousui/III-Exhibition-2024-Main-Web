import { recipe } from "@vanilla-extract/recipes";

import { mediaUtils, vars } from "@/styles";

export const styles = {
    root: recipe({
        base: {
            display: "flex",
            flexDirection: "column",
            width: "max-content",
            maxWidth: "100%",
        },
        variants: {
            mobileAlign: {
                left: {
                    width: "fit-content",
                    "@media": {
                        [mediaUtils.md]: {
                            width: "max-content",
                        },
                    },
                },
                center: {
                    width: "100%",
                    "@media": {
                        [mediaUtils.md]: {
                            width: "max-content",
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
                    "@media": {
                        [mediaUtils.md]: {
                            alignSelf: "inherit",
                        },
                    },
                },
                center: {
                    alignSelf: "center",
                    fontSize: vars.fontSize.lg,
                    "@media": {
                        [mediaUtils.md]: {
                            alignSelf: "inherit",
                            fontSize: vars.fontSize.xl,
                        },
                    },
                },
            },
        },
    }),
    content: recipe({
        base: {
            width: "100%",
            textAlign: "start",
        },
        variants: {
            padding: {
                sm: {
                    padding: `${vars.spacing.sm} 0`,
                },
                md: {
                    padding: `${vars.spacing.md} 0`,
                },
            },
        },
    }),
};
