import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: "100%",
    }),
    header: style({
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: vars.zIndex.header,
    }),
    content: style({
        display: "flex",
        height: "100%",
    }),
};
