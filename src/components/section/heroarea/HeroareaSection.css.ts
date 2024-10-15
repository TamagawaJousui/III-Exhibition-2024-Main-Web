import { style } from "@vanilla-extract/css";

import { mediaUtils } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        "@media": {
            [mediaUtils.md]: {
                overflow: "auto",
            },
        },
    }),
    desktopView: style({
        visibility: "hidden",
        "@media": {
            [mediaUtils.lg]: {
                visibility: "visible",
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
    titleEnglish: style({
        position: "absolute",
        zIndex: 1,
        top: "2em",
        right: "5px",
        width: "65%",
        "@media": {
            [mediaUtils.md]: {
                top: "3em",
                right: "10px",
                width: "65%",
            },
        },
    }),
    dateAndVenue: style({
        position: "absolute",
        zIndex: 1,
        right: "5px",
        bottom: "50px",
        height: "45%",
        "@media": {
            [mediaUtils.md]: {
                right: "10px",
                bottom: "50px",
                height: "55%",
            },
        },
    }),
    particleImg: style({
        position: "absolute",
        left: "-250px",
        top: "-150px",
        overflow: "hidden",
        zIndex: 0,
        "@media": {
            [mediaUtils.sm]: {
                position: "absolute",
                left: "0px",
                top: "0px",
                transform: "scale(1.5)",
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
