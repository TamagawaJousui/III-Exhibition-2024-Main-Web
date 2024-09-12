import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: vars.color.primaryBackground,
        height: "100vh",
        maxHeight: "100vh",
    }),
};
