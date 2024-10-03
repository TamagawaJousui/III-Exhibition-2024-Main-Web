import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        gap: vars.spacing.xs,
    }),
    wordBreak: style({
        wordBreak: "keep-all",
        overflowWrap: "break-word",
    }),
};
