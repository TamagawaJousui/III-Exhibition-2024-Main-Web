import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        // backgroundImage: "url(/bg/bg.jpg)",
        width: "100%",
    }),
    wrapper: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "100%",
        width: "60%",
    }),
    concept: style({
        textAlign: "center",
        lineHeight: vars.lineHeight["3xl"],
    }),
};
