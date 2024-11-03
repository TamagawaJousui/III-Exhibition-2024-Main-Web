import { style } from "@vanilla-extract/css";

import { typography } from "@/styles/typography.css";

import { mediaUtils, vars } from "@/styles";

export const styles = {
    root: style([
        typography({}),
        {
            width: "100%",
            position: "relative",
            background: vars.color.background.mobile,
            "@media": {
                [mediaUtils.md]: {
                    background: vars.color.background.desktop,
                },
            },
        },
    ]),
    wrapper: style({
        display: "flex",
    }),
    container: style({
        display: "flex",
        width: "100%",

        background: "none",
        flexDirection: "column",

        "@media": {
            [mediaUtils.md]: {
                background: vars.color.background.desktop,
                flexDirection: "row",
            },
        },
    }),
};
