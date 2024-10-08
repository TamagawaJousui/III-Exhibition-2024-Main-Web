import { style } from "@vanilla-extract/css";

import { mediaUtils } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        position: "relative",
        width: "100vw",
        height: "100vh",
    }),
    desktopView: style({
        display: "block",
        "@media": {
            [mediaUtils.mobile]: {
                display: "none",
            },
        },
    }),
    mobileView: style({
        display: "none",
        "@media": {
            [mediaUtils.mobile]: {
                display: "block",
            },
        },
    }),
    title: style({
        position: "absolute",
        top: "170px",
        left: "5px",
    }),
    titleEnglish: style({
        position: "absolute",
        top: "70px",
        right: "5px",
    }),
    dateAndVenue: style({
        position: "absolute",
        right: "5px",
        bottom: "60px",
    }),
    particle: style({
        position: "absolute",
        left: "-200px",
        top: "-100px",
        overflow: "hidden",
    }),
};
