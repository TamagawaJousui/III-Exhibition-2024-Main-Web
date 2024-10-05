import { style } from "@vanilla-extract/css";

import { mediaUtils, vars } from "@/styles";

const TEAM_CARD_WIDTH = "40em" as const;

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        gap: vars.spacing.sm,
        padding: `0 ${vars.spacing.lg}`,
        flex: 1,
        "@media": {
            [mediaUtils.mobile]: {
                width: "100%",
                padding: 0,
            },
        },
    }),
    members: style({
        display: "flex",
        flexWrap: "wrap",
        width: TEAM_CARD_WIDTH,
        maxWidth: "100%",
        gap: vars.spacing.md,
        "@media": {
            [mediaUtils.mobile]: {
                justifyContent: "flex-start",
                width: "100%",
            },
        },
    }),
};
