import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        gap: vars.spacing.sm,
    }),
    team: style({
        width: "fit-content",
        borderBottom: `1px solid ${vars.color.textSecondary}`,
    }),
    members: style({
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: vars.spacing.md,
    }),
};
