import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { typography } from "@/styles/typography.css";

import { mediaUtils, vars } from "@/styles";

export const styles = {
    modal: style({
        backgroundColor: vars.color.background.dark,
        width: "80vw",
        height: "80vh",
    }),
    overlay: style({
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: vars.zIndex.modal,
    }),
    wrapper: style({
        display: "flex",
        flexDirection: "column",
        borderTop: `3px solid ${vars.color.text}`,
        borderBottom: `3px solid ${vars.color.text}`,
        height: "100%",
        padding: `${vars.spacing.lg} ${vars.spacing.xl}`,
        "@media": {
            [mediaUtils.mobile]: {
                padding: `${vars.spacing.sm} ${vars.spacing.md}`,
            },
        },
    }),
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
    content: style({
        display: "flex",
        gap: vars.spacing.md,
        borderBottom: `1px solid ${vars.color.text}`,
        width: "100%",
        flex: 1,
        padding: `${vars.spacing.sm} 0`,
        overflow: "hidden",
    }),
    leftContent: style({
        display: "flex",
        flex: 1,
        height: "100%",
    }),
    image: style({
        position: "relative",
        width: "100%",
        height: "100%",
    }),
    author: style({
        display: "flex",
        flexDirection: "column",
        minWidth: "10em",
        gap: vars.spacing.md,
        listStyle: "none",
        "@media": {
            [mediaUtils.mobile]: {
                flexDirection: "row",
                flexWrap: "wrap",
            },
        },
    }),
    description: style({
        flex: 1,
    }),
};
