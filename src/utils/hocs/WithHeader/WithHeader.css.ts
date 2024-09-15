import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        background: vars.color.background.default,
        height: "100vh",
    }),
    content: style({
        display: "flex",
        height: "100%",
    }),
};
