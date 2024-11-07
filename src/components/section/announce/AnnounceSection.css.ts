import { style } from "@vanilla-extract/css";

import { typography, vars } from "@/styles";

export const styles = {
    container: style({
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "min(30em, 100vw)",
        gap: vars.spacing.lg,
    }),
    detailText: style([
        typography({
            fontSize: "lg",
        }),
        {
            display: "flex",
            alignItems: "center",
            gap: vars.spacing.xs,
        },
    ]),
    linkLike: style({
        textDecoration: "underline",
    }),
};
