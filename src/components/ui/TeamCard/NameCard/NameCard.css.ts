import { style } from "@vanilla-extract/css";

import { typography } from "@/styles/typography.css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        width: "5em",
        gap: vars.spacing.xs,
    }),
    en: typography({ fontSize: "xs", color: "text.secondary" }),
};
