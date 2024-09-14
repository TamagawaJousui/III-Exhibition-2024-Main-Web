import { style } from "@vanilla-extract/css";

import { typography } from "@/styles/typography.css";

export const styles = {
    root: style([
        typography({}),
        {
            display: "flex",
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
