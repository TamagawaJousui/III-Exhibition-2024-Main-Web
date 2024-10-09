import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { mediaUtils } from "@/styles";

const HEADER_HEIGHT = "2rem" as const;

export const styles = {
    root: style({
        display: "flex",
        position: "relative",
        width: "100vw",
        height: "100%",
        "@media": {
            [mediaUtils.mobile]: {
                height: `calc(100vh - ${HEADER_HEIGHT})`,
            },
        },
    }),
    container: recipe({
        base: {
            position: "absolute",
        },
        variants: {
            label: {
                title: {
                    bottom: 20,
                    left: 0,
                    width: "30%",
                    height: "90%",
                },
                titleEnglish: {
                    top: 30,
                    right: 20,
                    width: "50%",
                    height: "30%",
                },
                dateAndVenue: {
                    bottom: 0,
                    right: 0,
                    width: "40%",
                    height: "50%",
                },
            },
        },
    }),
    text: style({
        position: "relative",
        width: "100%",
        height: "100%",
    }),
};
