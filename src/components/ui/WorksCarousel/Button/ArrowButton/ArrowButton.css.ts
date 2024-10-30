import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    button: style({
        WebkitTapHighlightColor: "rgba(orange, 0.5)",
        WebkitAppearance: "none",
        appearance: "none",
        backgroundColor: "transparent",
        touchAction: "manipulation",
        display: "inline-flex",
        textDecoration: "none",
        cursor: "pointer",
        border: 0,
        padding: 0,
        margin: 0,
        width: vars.spacing.md,
        height: vars.spacing.md,
        zIndex: 1,
        borderRadius: "50%",
        color: vars.color.text,
        alignItems: "center",
        justifyContent: "center",
        ":disabled": {
            color: "gray",
        },
    }),
    buttonSvg: style({
        width: "100%",
        height: "100%",
    }),
};
