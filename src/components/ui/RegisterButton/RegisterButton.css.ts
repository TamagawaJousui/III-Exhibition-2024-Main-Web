import { style } from "@vanilla-extract/css";

import { mediaUtils } from "@/styles/utils.css";

export const styles = {
    root: style({
        // display: "inline-block",
        // position: "relative",
        // aspectRatio: "1 / 1",
        // border: "none",
        // zIndex: 2,
    }),
    registerButton: style({
        //
        position: "fixed",
        bottom: "20px", // 下端に固定
        right: "5px", // 右端に固定
        height: "13vh",
        filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
        zIndex: 2,
        ":hover": {
            transform: "translateY(-1px)",
            transition: "all 0.1s ease-in-out",
            filter: "drop-shadow(0 6px 8px rgba(0, 0, 0, 0.3))",
        },
        ":active": {
            transform: "scale(0.98) translateY(0px)",
            transition: "all 0.1s ease-in-out",
            filter: "drop-shadow(0 3px 4px rgba(0, 0, 0, 0.15))",
        },
        "@media": {
            [mediaUtils.md]: {
                bottom: "5px", // 下端に固定
                right: "5px", // 右端に固定
                height: "13vh",
            },
        },
    }),
};
