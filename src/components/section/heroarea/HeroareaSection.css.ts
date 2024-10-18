import { style } from "@vanilla-extract/css";

import { mediaUtils } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        position: "relative",
        minWidth: "100vw",
        height: "100vh",
        overflow: "hidden",
        "@media": {
            [mediaUtils.md]: {
                overflow: "auto",
            },
        },
    }),
    desktopView: style({
        display: "none",
        "@media": {
            [mediaUtils.lg]: {
                display: "block",
            },
        },
    }),
    mobileView: style({
        display: "block",
        "@media": {
            [mediaUtils.lg]: {
                display: "none",
            },
        },
    }),
    title: style({
        position: "absolute",
        zIndex: 1,
        top: "10%",
        left: "5px",
        height: "60%",
        "@media": {
            [mediaUtils.md]: {
                top: "15%",
                left: "10px",
                height: "60%",
            },
        },
    }),

    particleBackground: style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    }),
    titleEnglish: style({
        position: "absolute",
        zIndex: 1,
        top: "3em",
        right: "5px",
        width: "65%",
        "@media": {
            [mediaUtils.md]: {
                right: "10px",
                width: "65%",
            },
            [mediaUtils.lg]: {
                right: "10px",
                width: "665px",
            },
        },
    }),
    dateAndVenue: style({
        position: "absolute",
        zIndex: 1,
        right: "5px",
        bottom: "20px",
        height: "45%",
        "@media": {
            [mediaUtils.md]: {
                right: "10px",
                bottom: "50px",
                height: "50%",
            },
        },
    }),
    particleImg: style({
        position: "absolute",
        right: "-300px",
        top: "-100px",
        overflow: "hidden",
        zIndex: 0,
        "@media": {
            [mediaUtils.sm]: {
                position: "absolute",
                left: "0px",
                top: "0px",
            },
            [mediaUtils.lg]: {
                display: "none",
            },
        },
    }),
    particle: style({
        display: "none",
        "@media": {
            [mediaUtils.lg]: {
                display: "block",
            },
        },
    }),
};
