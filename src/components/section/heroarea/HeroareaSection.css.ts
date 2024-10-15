import { style } from "@vanilla-extract/css";

import { mediaUtils } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        position: "relative",
        width: "100vw",
        height: "100vh",
        "@media": {
            [mediaUtils.mdMax]: {
                overflow: "hidden",
            },
        },
    }),
    desktopView: style({
        display: "block",
        "@media": {
            [mediaUtils.mdMax]: {
                display: "none",
            },
        },
    }),
    mobileView: style({
        display: "none",
        "@media": {
            [mediaUtils.mdMax]: {
                display: "block",
            },
        },
    }),
    title: style({
        position: "absolute",
        zIndex: 1,
        "@media": {
            [mediaUtils.mdMax]: {
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
            [mediaUtils.mdMax]: {
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
            [mediaUtils.mdMax]: {
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
