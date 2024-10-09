import { style } from "@vanilla-extract/css";

import { typography, vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        gap: vars.spacing.md,
    }),
    authorContainer: style({
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "max-content",
        flexShrink: 0,
        gap: vars.spacing.md,
        listStyle: "none",
        padding: 0,
    }),
    author: style({
        flex: "1 1 0",
        minWidth: "max-content",
    }),
    info: typography({ fontSize: "xs" }),
};
