import { style } from "@vanilla-extract/css";

import { mediaUtils, vars } from "@/styles";

export const styles = {
    modal: style({
        backgroundColor: vars.color.background.dark,
        width: "80vw",
        height: "80vh",
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
        borderTop: `3px solid ${vars.color.text}`,
        borderBottom: `3px solid ${vars.color.text}`,
        padding: `${vars.spacing.lg} ${vars.spacing.xl}`,
        height: "100%",
        "@media": {
            [mediaUtils.mobile]: {
                padding: `${vars.spacing.sm} ${vars.spacing.md}`,
            },
        },
    }),
    contentWrapper: style({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        padding: `${vars.spacing.sm} 0`,
        borderBottom: `1px solid ${vars.color.text}`,
        flexGrow: 1,
        overflow: "hidden",
    }),
    content: style({
        display: "flex",
        alignItems: "flex-start",
        gap: vars.spacing.md,
        flexGrow: 1,
        overflow: "hidden",
    }),
    leftContent: style({
        position: "relative",
        aspectRatio: "1/1",
        maxWidth: "50%",
        height: "80%",
        flexShrink: 0,
        "@media": {
            [mediaUtils.mobile]: {
                width: "50%",
                height: "auto",
            },
        },
    }),
    rightContent: style({
        display: "flex",
        flexDirection: "column",
        flex: "auto",
        height: "100%",
        overflow: "hidden",
    }),
    author: style({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        height: "max-content",
        flexShrink: 0,
        gap: vars.spacing.md,
        listStyle: "none",
        padding: 0,
    }),
    description: style({
        width: "100%",
        flexGrow: 1,
        overflow: "hidden",
    }),
    descriptionText: style({
        whiteSpace: "wrap",
    }),
};
