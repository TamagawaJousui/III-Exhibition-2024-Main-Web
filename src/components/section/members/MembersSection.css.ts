import { style } from "@vanilla-extract/css";

import { vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: vars.spacing.md,
        height: "90%",
        padding: `${vars.spacing.md} 0`,
        width: "200vw", // NOTE: flex columnにするとwrapがうまく機能しなくなるみたいなので直書き https://stackoverflow.com/questions/33891709/when-flexbox-items-wrap-in-column-mode-container-does-not-grow-its-width
    }),
};
