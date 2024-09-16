import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        left: 0,
        width: "fit-content",
        maxHeight: "3vh",

        zIndex: vars.zIndex.header,
    }),
    ul: style({
        display: "flex",
        listStyle: "none",
        gap: vars.spacing.md,
    }),
};
