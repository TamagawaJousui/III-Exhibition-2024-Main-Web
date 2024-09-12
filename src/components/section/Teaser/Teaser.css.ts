import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    }),
    content: style({
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    }),
    icon: style({
        height: "100%",
        width: "20vw",
        "@media": {
            "screen and (max-width: 900px)": {
                display: "none",
            },
        },
    }),
    ul: style({
        display: "flex",
        listStyle: "none",
        marginLeft: "0",
        padding: "0",
        flexDirection: "row",
        gap: vars.spacing.md,
    }),
};
