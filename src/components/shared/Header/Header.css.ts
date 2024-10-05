import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        alignItems: "center",
        width: "fit-content",

        zIndex: vars.zIndex.header,
    }),
    ul: style({
        display: "flex",
        flexWrap: "wrap",
        listStyle: "none",
        gap: vars.spacing.md,
    }),
    separator: style({
        marginLeft: vars.spacing.md,
    }),
};
