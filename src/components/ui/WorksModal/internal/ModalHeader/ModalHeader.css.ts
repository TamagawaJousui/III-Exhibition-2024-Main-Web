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
            "@media": {
                [mediaUtils.mobile]: {
                    fontSize: vars.fontSize.sm,
                },
            },
        },
        variants: {
            align: {
                left: {
                    textAlign: "left",
                },
                center: {
                    flexBasis: "fit-content",
                    textAlign: "center",
                    maxWidth: "80%",
                    borderLeft: `1px solid ${vars.color.text}`,
                    borderRight: `1px solid ${vars.color.text}`,
                },
                right: {
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                },
            },
        },
    }),
    place: style({
        display: "flex",
    }),
    title: style([
        typography({ color: "background" }),
        {
            margin: `0 ${vars.spacing.lg}`,
            backgroundColor: vars.color.white,
            "@media": {
                [mediaUtils.mobile]: {
                    fontSize: vars.fontSize.lg,
                },
            },
        },
    ]),
};
