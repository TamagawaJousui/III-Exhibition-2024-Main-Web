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
            "@media": {
                [mediaUtils.mdMax]: {
                    background: vars.color.background.mobile,
                },
            },
        },
    ]),

    header: style({
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: vars.zIndex.header,
        "@media": {
            [mediaUtils.mdMax]: {
                position: "sticky",
            },
        },
    }),
    wrapper: style({
        display: "flex",
        height: "100%",
    }),
    container: style({
        display: "flex",
        background: vars.color.background.desktop,

        "@media": {
            [mediaUtils.mdMax]: {
                background: "none",
                flexDirection: "column",
            },
        },
    }),

    registerButton: style({
        position: "sticky",
        bottom: "0", // 下端に固定
        left: "100vw", // 右端に固定
    }),
};
