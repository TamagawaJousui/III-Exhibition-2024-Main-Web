import { style } from "@vanilla-extract/css";

import { mediaUtils } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        position: "relative",
        width: "100vw",
        height: "100vh",
        "@media": {
            [mediaUtils.md]: {
                overflow: "hidden",
            },
        },
    }),
    desktopView: style({
        display: "block",
        "@media": {
            [mediaUtils.md]: {
                display: "none",
            },
        },
    }),
    mobileView: style({
        display: "none",
        "@media": {
            [mediaUtils.md]: {
                display: "block",
            },
        },
    }),
    title: style({
        position: "absolute",
        zIndex: 1,
        "@media": {
            [mediaUtils.md]: {
                top: "90px",
                left: "5px",
                width: "90px",
            },
        },
    }),
    titleEnglish: style({
        position: "absolute",
        zIndex: 1,
        "@media": {
            [mediaUtils.md]: {
                top: "0",
                right: "5px",
                width: "270px",
            },
        },
    }),
    dateAndVenue: style({
        position: "absolute",
        zIndex: 1,
        "@media": {
            [mediaUtils.md]: {
                right: "5px",
                top: "310px",
                width: "170px",
            },
        },
    }),
    particleImg: style({
        position: "absolute",
        left: "-250px",
        top: "-150px",
        overflow: "hidden",
        zIndex: 0,
    }),
};
