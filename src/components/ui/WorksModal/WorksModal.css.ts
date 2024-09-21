import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { typography } from "@/styles/typography.css";

import { vars } from "@/styles";

export const styles = {
    modal: style({
        backgroundColor: vars.color.background.dark,
        padding: `${vars.spacing.lg} ${vars.spacing.xl}`,
        width: "80vw",
        maxHeight: "90vh",
        minHeight: "70vh",
    }),
    overlay: style({
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: vars.zIndex.modal,
    }),
    wrapper: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTop: `3px solid ${vars.color.text}`,
        borderBottom: `3px solid ${vars.color.text}`,
        width: "100%",
        height: "100%",
        padding: `${vars.spacing.md} 0`,
    }),
    heading: style({
        display: "flex",
        gap: vars.spacing.md,
        borderTop: `1px solid ${vars.color.text}`,
        borderBottom: `1px solid ${vars.color.text}`,
        padding: `${vars.spacing.md} 0`,
        width: "100%",
    }),
    headingContent: recipe({
        base: {
            flex: 1,
        },
        variants: {
            align: {
                left: {
                    textAlign: "left",
                },
                center: {
                    flexBasis: "fit-content",
                    textAlign: "center",
                    borderLeft: `1px solid ${vars.color.text}`,
                    borderRight: `1px solid ${vars.color.text}`,
                },
                right: {
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                },
            },
        },
    }),
    place: style({
        display: "flex",
    }),
    title: style([
        typography({ color: "background" }),
        {
            margin: `0 ${vars.spacing.lg}`,
            backgroundColor: vars.color.white,
        },
    ]),
    content: style({
        display: "flex",
        flexWrap: "wrap",
        borderBottom: `1px solid ${vars.color.text}`,
        height: "100%",
        width: "100%",
        padding: `${vars.spacing.sm} 0`,
    }),
    imageAuthor: style({
        display: "flex",
        flex: 1,
        height: "auto",
    }),
    image: style({
        position: "relative",
        height: "auto",
        width: "60%",
    }),
    author: style({
        display: "flex",
        flexDirection: "column",
        gap: vars.spacing.md,
        listStyle: "none",
    }),
    description: style({
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "auto",
    }),
};
