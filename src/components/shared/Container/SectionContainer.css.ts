import { ComplexStyleRule, globalStyle, style, styleVariants } from "@vanilla-extract/css";

import { color, colorType } from "@/styles";

export const wrapper = style({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 0",
});

export const container = style({
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    // maxWidth: vars.breakpoint.xl,
    alignItems: "center",
});

globalStyle(`${container} h2`, {
    alignSelf: "center",
});

export const backgroundStyle = styleVariants<Record<colorType, ComplexStyleRule>>({
    "primary.dark": { background: color.primary.dark },
    "primary.main": { background: color.primary.main },
    "primary.light": { background: color.primary.light },
    "primary.ultraLight": { background: color.primary.ultraLight },
    "secondary.dark": { background: color.secondary.dark },
    "secondary.main": { background: color.secondary.main },
    "secondary.light": { background: color.secondary.light },
    red: { background: color.red },
    green: { background: color.green },
    blue: { background: color.blue },
    orange: { background: color.orange },
    gray: { background: color.gray },
    white: { background: color.white },
    black: { background: color.black },
    text: { background: color.text },
    textSecondary: { background: color.textSecondary },
    primaryBackground: { background: color.primaryBackground },
    secondaryBackground: { background: color.secondaryBackground },
});

export const textColorStyle = styleVariants<Record<colorType | "inherit", ComplexStyleRule>>({
    inherit: { color: "inherit" },
    "primary.dark": { color: color.primary.dark },
    "primary.main": { color: color.primary.main },
    "primary.light": { color: color.primary.light },
    "primary.ultraLight": { color: color.primary.ultraLight },
    "secondary.dark": { color: color.secondary.dark },
    "secondary.main": { color: color.secondary.main },
    "secondary.light": { color: color.secondary.light },
    red: { color: color.red },
    green: { color: color.green },
    blue: { color: color.blue },
    orange: { color: color.orange },
    gray: { color: color.gray },
    white: { color: color.white },
    black: { color: color.black },
    text: { color: color.text },
    textSecondary: { color: color.textSecondary },
    primaryBackground: { color: color.primaryBackground },
    secondaryBackground: { color: color.secondaryBackground },
});
