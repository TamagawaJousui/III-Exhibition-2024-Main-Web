import { style } from "@vanilla-extract/css";

import { typography } from "@/styles/typography.css";

import { vars } from "@/styles";

export const styles = {
    root: style([
        typography({}),
        {
            display: "flex",
            background: vars.color.background.default,
            height: "100vh",
            overflowX: "scroll",
            /*スクロールバー非表示（IE・Edge）*/
            msOverflowStyle: "none",
            /*スクロールバー非表示（Firefox）*/
            scrollbarWidth: "none",
            whiteSpace: "nowrap",
        },
    ]),
};
