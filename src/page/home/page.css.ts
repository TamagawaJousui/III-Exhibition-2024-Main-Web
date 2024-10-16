import { style } from "@vanilla-extract/css";

import { typography } from "@/styles/typography.css";

import { mediaUtils, vars } from "@/styles";

export const styles = {
    root: style([
        typography({}),
        {
            height: "100%",
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

    header: style({
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: vars.zIndex.header,
    }),
    wrapper: style({
        display: "flex",
        height: "100%",
    }),
    container: style({
        display: "flex",

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
