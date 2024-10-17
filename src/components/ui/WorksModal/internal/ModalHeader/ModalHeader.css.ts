import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { mediaUtils, typography, vars } from "@/styles";

export const styles = {
    heading: style({
        display: "flex",
        justifyContent: "center",
        gap: vars.spacing.md,
        borderTop: `1px solid ${vars.color.text}`,
        borderBottom: `1px solid ${vars.color.text}`,
        padding: `${vars.spacing.md} 0`,
    }),
    subHeading: style({
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    }),
    headingContent: recipe({
        base: {
            flex: 1,
            fontSize: vars.fontSize.sm,
        },
        variants: {
            align: {
                left: {
                    textAlign: "left",
                    flex: "0 0 2rem",
                    "@media": {
                        [mediaUtils.md]: {
                            flex: 1,
                        },
                    },
                },
                center: {
                    flexBasis: "fit-content",
                    textAlign: "center",
                    maxWidth: "80%",
                    borderLeft: `1px solid ${vars.color.text}`,
                    borderRight: `1px solid ${vars.color.text}`,
                },
                right: {
                    textAlign: "right",
                    flex: "0 0 2rem",
                    "@media": {
                        [mediaUtils.md]: {
                            flex: 1,
                        },
                    },
                },
            },
        },
    }),
    subHeadingContent: style({
        width: "100%",
    }),
    closeButton: style({
        border: `1px solid ${vars.color.text}`,
    }),
    place: style({
        display: "flex",
    }),
    title: style([
        typography({ color: "background" }),
        {
            margin: `0 ${vars.spacing.lg}`,
            backgroundColor: vars.color.white,
            fontSize: vars.fontSize.lg,
            "@media": {
                [mediaUtils.md]: {
                    fontSize: vars.fontSize["2xl"],
                },
            },
        },
    ]),
};
