import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

const TEAM_CARD_WIDTH = "40em" as const;

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        gap: vars.spacing.sm,
        padding: `0 ${vars.spacing.lg}`,
    }),
    members: style({
        display: "flex",
        flexWrap: "wrap",
        width: TEAM_CARD_WIDTH,
        gap: vars.spacing.md,
    }),
};
