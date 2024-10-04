import { style } from "@vanilla-extract/css";

import { typography } from "@/styles/typography.css";

import { mediaUtils, vars } from "@/styles";

export const styles = {
    root: style([
        typography({}),
        {
            display: "flex",
            height: "100%",
            width: "100%",
            // overflowX: "scroll",
        },
    ]),
    wrapper: style({
        display: "flex",
        height: "100%",
    }),
    container: style({
        display: "flex",
        background: vars.color.background.desktop,

        "@media": {
            [mediaUtils.mobile]: {
                flexDirection: "column",
                background: vars.color.background.mobile,
            },
        },
    }),
};
