import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { typography } from "@/styles/typography.css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    }),
    content: style({
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        gap: vars.spacing.md,
    }),
    icon: style({
        height: "100%",
        width: "20vw",
        "@media": {
            "screen and (max-width: 900px)": {
                display: "none",
            },
        },
    }),
    dl: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: vars.spacing.sm,
    }),
    info: recipe({
        base: {
            textAlign: "center",
            margin: 0,
        },
        variants: {
            bold: {
                true: typography({ fontWeight: "bold" }),
            },
        },
        defaultVariants: { bold: false },
    }),
    ul: style({
        display: "flex",
        listStyle: "none",
        marginLeft: "0",
        padding: "0",
        flexDirection: "row",
        justifyContent: "center",
        gap: vars.spacing.md,
    }),
    link: style({
        textDecoration: "underline",
        selectors: {
            "&:hover": {
                color: vars.color.textSecondary,
            },
        },
    }),
};
