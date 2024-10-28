import { globalStyle, style } from "@vanilla-extract/css";

import { typography } from "@/styles/typography.css";

import { mediaUtils, vars } from "@/styles";

const mediaQuery = mediaUtils.mobile;

export const styles = {
    root: style({
        position: "relative",
        top: 0,
        width: "100%",
        height: "100%",
        background: vars.color.gray_light,
        borderRadius: vars.radius.xl,
        overflow: "hidden",
    }),
    imageContainer: style({
        width: "100%",
        borderRadius: vars.radius.xl,
        position: "relative",
    }),
    image: style({
        width: "100%",
        objectFit: "cover",
        borderRadius: vars.radius.xl,
        filter: "grayscale(100%)",
        transition: "filter 0.3s ease",
        ":hover": {
            filter: "grayscale(0%)",
        },

        "@media": {
            [mediaQuery]: {},
        },
    }),
    overlay: style({
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
    }),
    inner: style({
        padding: `${vars.spacing.sm} ${vars.spacing.lg} ${vars.spacing.md} ${vars.spacing.lg}`,

        "@media": {
            [mediaQuery]: {
                paddingBottom: vars.spacing.lg,
            },
        },
    }),
    title: style({
        borderBottom: `1px solid ${vars.color.text}`,
    }),
    member: style([
        typography({ fontSize: "base" }),
        {
            display: "flex",
            flexWrap: "wrap",
            gap: vars.spacing.xs,
            minHeight: `calc(2 * ${vars.lineHeight.xs})`,
        },
    ]),
    place: style([
        typography({ fontSize: "xs" }),
        {
            marginTop: vars.spacing.xs,
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
            padding: `${vars.spacing.xs} ${vars.spacing.md}`,
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
