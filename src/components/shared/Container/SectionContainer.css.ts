import { ComplexStyleRule, style, styleVariants } from "@vanilla-extract/css";

import { color, colorType, vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        width: "100dvw",
        flexDirection: "column",
        height: "100%",
        padding: `${vars.spacing.lg} ${vars.spacing.xl}`,
    }),
};

export const backgroundStyle = styleVariants<Record<colorType, ComplexStyleRule>>({
    "primary.dark": { background: color.primary.dark },
    "primary.main": { background: color.primary.main },
    "primary.light": { background: color.primary.light },
    "primary.ultraLight": { background: color.primary.ultraLight },
    "secondary.dark": { background: color.secondary.dark },
    "secondary.main": { background: color.secondary.main },
    "secondary.light": { background: color.secondary.light },
    "background.default": { background: color.background.default },
    red: { background: color.red },
    green: { background: color.green },
    blue: { background: color.blue },
    orange: { background: color.orange },
    gray: { background: color.gray },
    white: { background: color.white },
    black: { background: color.black },
    text: { background: color.text },
    textSecondary: { background: color.textSecondary },
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
    "background.default": { color: color.background.default },
    red: { color: color.red },
    green: { color: color.green },
    blue: { color: color.blue },
    orange: { color: color.orange },
    gray: { color: color.gray },
    white: { color: color.white },
    black: { color: color.black },
    text: { color: color.text },
    textSecondary: { color: color.textSecondary },
});
