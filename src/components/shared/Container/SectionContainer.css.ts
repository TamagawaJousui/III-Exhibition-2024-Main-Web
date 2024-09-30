import { ComplexStyleRule, style, styleVariants } from "@vanilla-extract/css";

import { color, colorType, mediaUtils, vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
        "@media": {
            [mediaUtils.mobile]: {
                width: "100vw",
                maxWidth: "100vw",
                height: "fit-content",
            },
        },
    }),
};

export const backgroundStyle = styleVariants<Record<colorType, ComplexStyleRule>>({
    "primary.dark": { background: color.primary.dark },
    "primary.main": { background: color.primary.main },
    "primary.light": { background: color.primary.light },
    "secondary.dark": { background: color.secondary.dark },
    "secondary.main": { background: color.secondary.main },
    "secondary.light": { background: color.secondary.light },
    "background.desktop": { background: color.background.desktop },
    "background.mobile": { background: color.background.mobile },
    "background.dark": { background: color.background.dark },
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
    "secondary.dark": { color: color.secondary.dark },
    "secondary.main": { color: color.secondary.main },
    "secondary.light": { color: color.secondary.light },
    "background.desktop": { color: color.background.desktop },
    "background.mobile": { color: color.background.mobile },
    "background.dark": { background: color.background.dark },
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
