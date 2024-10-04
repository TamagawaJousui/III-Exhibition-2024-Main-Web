import { style } from "@vanilla-extract/css";

import { mediaUtils, vars } from "@/styles";

const MEMBER_SECTION_WIDTH = "180em" as const;

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: vars.spacing.sm,
        height: "100%",
        overflow: "hidden",
        padding: `${vars.spacing.md} 0`,
        width: MEMBER_SECTION_WIDTH,
        "@media": {
            [mediaUtils.mobile]: {
                width: "100%",
            },
        },
    }),
};
