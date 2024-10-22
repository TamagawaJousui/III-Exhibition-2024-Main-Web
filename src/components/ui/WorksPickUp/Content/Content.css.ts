import { globalStyle, style } from "@vanilla-extract/css";

import { typography } from "@/styles/typography.css";

import { vars } from "@/styles";

// メディアクエリの定義
const largeScreen = "screen and (min-width: 750px)"; // 例として1024px以上の画面を大きい画面とします

export const styles = {
    root: style({
        position: "relative",
        top: 0,
        width: "100%",
        height: "100%",
        background: "#D9D9D9",
        borderRadius: "10px",
        overflow: "hidden",
    }),
    imageContainer: style({
        width: "100%",
        height: "60%",
        borderRadius: "10px",
        position: "relative",
    }),
    image: style({
        width: "100%",
        height: "75%",
        minHeight: "75%",
        objectFit: "cover",
        borderRadius: "10px",
        filter: "grayscale(100%)",
        transition: "filter 0.3s ease",
        ":hover": {
            filter: "grayscale(0%)",
        },

        "@media": {
            [largeScreen]: {
                height: "60%", // 768px以上の画面では高さを60%に
                minHeight: "60%",
            },
        },
    }),
    overlay: style({
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        bottom: 0,
        height: "100%",
        width: "100%",
    }),
    inner: style({
        paddingTop: vars.spacing.sm,
        paddingBottom: vars.spacing.md,
        paddingLeft: vars.spacing.lg,
        paddingRight: vars.spacing.lg,
    }),
    title: style({
        borderBottom: `1px solid ${vars.color.text}`,
    }),
    member: style([
        typography({ fontSize: "base" }),
        {
            display: "flex",
            flexWrap: "wrap",
            lineHeight: vars.lineHeight.sm,
            gap: vars.spacing.xs,
            minHeight: `calc(2 * ${vars.lineHeight.sm})`,
        },
    ]),
    place: style([
        typography({ fontSize: "sm" }),
        {
            marginTop: vars.spacing.sm,
            display: "flex",
            alignItems: "center",
            gap: vars.spacing.xs,
        },
    ]),
    buttonContainer: style({
        width: "100%",
        position: "relative",
        paddingBottom: vars.spacing.md,
    }),
    button: style([
        {
            position: "absolute",
            right: 0,
            width: "fit-content",
            paddingTop: vars.spacing.xs,
            paddingBottom: vars.spacing.xs,
            paddingLeft: vars.spacing.md,
            paddingRight: vars.spacing.md,
            borderRadius: vars.radius["3xl"],
            border: "none",
        },
        typography({ color: "black" }),
    ]),
    blackText: style({
        color: vars.color.black,
    }),
};

globalStyle(`${styles.root} > button`, {
    fontFamily: "var(--font-noto-serif)",
});
