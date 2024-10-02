import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        justifyContent: "center",
        alignItems: "center",
        flex: "0 0 100vw",
        height: "100%",
        background: vars.color.background.default,
    }),
};
