import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "grid",
        gridAutoFlow: "column", // 縦に並べる
        gridTemplateColumns: "auto",
        gridTemplateRows: "repeat(auto-fill, minmax(10rem, max-content))",
        gap: vars.spacing.md,
        height: "100%",
        padding: `${vars.spacing.xl} 0`,
    }),
};
