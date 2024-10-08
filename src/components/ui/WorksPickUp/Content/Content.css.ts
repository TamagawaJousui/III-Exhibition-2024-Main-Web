import { style } from "@vanilla-extract/css";

import { typography } from "@/styles/typography.css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        position: "relative",
    }),
    image: style({
        borderRadius: "1.8rem",
        opacity: 0.5,
    }),
    overlay: style({
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: vars.spacing.lg,
    }),
    title: style({
        borderBottom: `1px solid ${vars.color.text}`,
    }),
    member: style([
        typography({ fontSize: "sm" }),
        {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: vars.spacing.xs,
            minHeight: `calc(2 * ${vars.lineHeight.sm})`,
        },
    ]),
    place: typography({ fontSize: "xs" }),
    buttonContainer: style({
        width: "100%",
        padding: vars.spacing.md,
        position: "relative",
    }),
    button: style([
        {
            position: "absolute",
            right: 0,
            width: "fit-content",
            padding: vars.spacing.sm,
            borderRadius: vars.radius["3xl"],
            border: "none",
        },
        typography({ color: "black" }),
    ]),
};
