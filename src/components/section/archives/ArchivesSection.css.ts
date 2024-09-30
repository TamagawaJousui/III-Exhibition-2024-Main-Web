import { globalStyle, style } from "@vanilla-extract/css";

import { styleUtils, vars } from "@/styles";

export const styles = {
    root: style([
        styleUtils.alignVertical,
        {
            display: "flex",
            padding: `${vars.spacing.md} 0`,
            height: "100%",
            gap: vars.spacing.lg,
        },
    ]),
};

globalStyle(`${styles.root} ul`, {
    display: "flex",
    flexDirection: "column",
    gap: vars.spacing.sm,
    paddingLeft: vars.spacing.xs,
    listStyle: "none",
});

globalStyle(`${styles.root} a`, {
    whiteSpace: "nowrap",
    margin: 0,
});

globalStyle(`${styles.root} a:hover`, {
    textDecoration: "underline",
});
