import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const styles = {
    root: style({
        display: "flex",
        position: "relative",
        width: "100vw",
        height: "100vh",
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
                    top: 0,
                    right: 10,
                    width: "60%",
                    height: "20%",
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
