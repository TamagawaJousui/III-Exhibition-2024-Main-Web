import { style } from "@vanilla-extract/css";

import { mediaUtils } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        position: "relative",
        width: "100vw",
        height: "100vh",
        "@media": {
            [mediaUtils.mobile]: {
                overflow: "hidden",
            },
        },
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
        top: "90px",
        left: "5px",
        zIndex: 1,
    }),
    titleEnglish: style({
        position: "absolute",
        top: 0,
        right: "5px",
        zIndex: 1,
    }),
    dateAndVenue: style({
        position: "absolute",
        right: "5px",
        top: "310px",
        zIndex: 1,
    }),
    particle: style({
        position: "absolute",
        left: "-250px",
        top: "-150px",
        overflow: "hidden",
        zIndex: 0,
    }),
};
