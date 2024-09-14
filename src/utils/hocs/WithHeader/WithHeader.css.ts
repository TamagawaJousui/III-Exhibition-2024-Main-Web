import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        background: vars.color.background.default,
    }),
    content: style({
        display: "flex",
    }),
};
