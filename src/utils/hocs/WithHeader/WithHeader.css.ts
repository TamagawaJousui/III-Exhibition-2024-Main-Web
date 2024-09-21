import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        background: vars.color.background.default,
        height: "100%",
    }),
    header: style({
        position: "sticky",
        top: 0,
        left: 0,
    }),
    content: style({
        display: "flex",
        height: "100%",
    }),
};
