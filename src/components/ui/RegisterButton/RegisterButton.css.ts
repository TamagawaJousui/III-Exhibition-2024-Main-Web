import { globalStyle, style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "inline-block",
        position: "relative",
        height: "20vh",
        aspectRatio: "1 / 1",
        border: "none",
        padding: vars.spacing.md,
    }),
};

globalStyle(`${styles.root} *`, {
    transition: "all 0.1s ease-in-out",

    // boxShadowの代わりにfilterを使用
    filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",

    // "@media": {
    //     [mediaUtils.mdMax]: {
    //         fill: "#5E91B3",
    //     },
    // },
});

globalStyle(`${styles.root}:hover > svg`, {
    transform: "translateY(-1px)",
    filter: "drop-shadow(0 6px 8px rgba(0, 0, 0, 0.3))",
});

globalStyle(`${styles.root}:active > svg`, {
    filter: "drop-shadow(0 3px 4px rgba(0, 0, 0, 0.15))",
    transform: "scale(0.98) translateY(0px)",
});
