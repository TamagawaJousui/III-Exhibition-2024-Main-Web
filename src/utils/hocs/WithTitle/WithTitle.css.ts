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
                    "@media": {
                        [mediaUtils.mdMax]: {
                            width: "fit-content",
                        },
                    },
                },
                center: {
                    "@media": {
                        [mediaUtils.mdMax]: {
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
                    "@media": {
                        [mediaUtils.mdMax]: {
                            alignSelf: "flex-start",
                        },
                    },
                },
                center: {
                    "@media": {
                        [mediaUtils.mdMax]: {
                            alignSelf: "center",
                            fontSize: vars.fontSize.lg,
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
