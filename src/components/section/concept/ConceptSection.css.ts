import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        padding: `${vars.spacing.md} 0`,
        height: "100%",
    }),
};
