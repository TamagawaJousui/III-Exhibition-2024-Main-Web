import { style } from "@vanilla-extract/css";

import { mediaUtils, vars } from "@/styles";

const TEAM_CARD_WIDTH = "40em" as const;

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        gap: vars.spacing.sm,
        padding: 0,
        width: "100%",
        flex: 1,
        "@media": {
            [mediaUtils.md]: {
                width: "auto",
                padding: `0 ${vars.spacing.lg}`,
            },
        },
    }),
    members: style({
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "100%",
        gap: vars.spacing.md,
        width: "100%",
        justifyContent: "flex-start",
        "@media": {
            [mediaUtils.md]: {
                width: TEAM_CARD_WIDTH,
                justifyContent: "normal",
            },
        },
    }),
};
