import { style } from "@vanilla-extract/css";

import { typography } from "@/styles/typography.css";

import { vars } from "@/styles";

export const styles = {
    root: style([
        typography({}),
        {
            display: "flex",
            height: "100vh",
            // overflowX: "scroll",
            /*スクロールバー非表示（IE・Edge）*/
            msOverflowStyle: "none",
            /*スクロールバー非表示（Firefox）*/
            scrollbarWidth: "none",
        },
    ]),
    wrapper: style({
        display: "flex",
        height: "100%",
    }),
    container: style({
        display: "flex",
        background: vars.color.background.default,
    }),
};
