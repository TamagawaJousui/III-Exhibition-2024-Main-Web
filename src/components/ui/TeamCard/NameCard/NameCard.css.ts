import { style } from "@vanilla-extract/css";

import { typography } from "@/styles/typography.css";

import { vars } from "@/styles";

const NAME_CARD_WIDTH = "7em" as const;

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        width: NAME_CARD_WIDTH,
        gap: vars.spacing.xs,
    }),
    wordBreak: style({
        wordBreak: "keep-all",
        overflowWrap: "break-word",
    }),
    en: typography({ fontSize: "xs", color: "text.secondary" }),
};
