import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "fit-content",
        gap: vars.spacing.sm,
    }),
};
