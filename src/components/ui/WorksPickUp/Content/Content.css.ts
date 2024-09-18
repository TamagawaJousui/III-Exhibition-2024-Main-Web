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
        padding: vars.spacing.lg,
    }),
    title: style({
        borderBottom: `1px solid ${vars.color.text}`,
    }),
    member: style([
        typography({ fontSize: "sm" }),
        { minHeight: `calc(2 * ${vars.lineHeight.sm})` },
    ]),
    place: typography({ fontSize: "xs" }),
    buttonContainer: style({
        display: "flex",
        justifyContent: "flex-end",
    }),
    button: style([
        {
            width: "fit-content",
            padding: vars.spacing.sm,
            borderRadius: vars.radius["3xl"],
            border: "none",
        },
        typography({ color: "black" }),
    ]),
};
