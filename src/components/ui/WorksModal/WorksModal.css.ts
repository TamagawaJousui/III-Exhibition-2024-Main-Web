import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@/styles";

export const styles = {
    modal: style({
        backgroundColor: vars.color.background.dark,
        padding: `${vars.spacing.lg} ${vars.spacing.xl}`,
        width: "80%",
        height: "80%",
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
        justifyContent: "center",
        alignItems: "center",
        borderTop: `3px solid ${vars.color.text}`,
        borderBottom: `3px solid ${vars.color.text}`,
        width: "100%",
        height: "100%",
        padding: `${vars.spacing.sm} 0`,
    }),
    content: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTop: `1px solid ${vars.color.text}`,
        borderBottom: `1px solid ${vars.color.text}`,
        padding: `0 ${vars.spacing.lg}`,
        width: "100%",
        height: "100%",
    }),
    heading: style({
        display: "flex",
        gap: vars.spacing.md,
        borderBottom: `1px solid ${vars.color.text}`,
        padding: `${vars.spacing.md} 0`,
        width: "100%",
    }),
    headingContent: recipe({
        base: {
            flex: 1,
            height: "100%",
        },
        variants: {
            align: {
                left: {
                    textAlign: "left",
                    borderRight: `1px solid ${vars.color.text}`,
                },
                center: {
                    textAlign: "center",
                },
                right: {
                    textAlign: "right",
                    borderLeft: `1px solid ${vars.color.text}`,
                },
            },
        },
    }),
    works: style({
        display: "flex",
        flexWrap: "wrap",
    }),
    image: style({
        flex: 1,
    }),
    description: style({
        flex: 1,
    }),
};
