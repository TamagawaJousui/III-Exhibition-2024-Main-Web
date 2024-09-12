import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: vars.color.black,

        padding: `${vars.spacing.md} 0 ${vars.spacing.md} 0`,
        color: vars.color.white,
    }),

    title: style({
        fontSize: vars.fontSize.sm,
        color: vars.color.white,
    }),

    copyRight: style({
        color: vars.color.white,
        fontSize: vars.fontSize.xs,
    }),
};
