import { style } from "@vanilla-extract/css";

import { mediaUtils, vars } from "@/styles";

export const styles = {
    modal: style({
        backgroundColor: vars.color.background.dark,
        width: "80vw",
        height: "70vh",
        "@media": {
            [mediaUtils.md]: {
                height: "80vh",
            },
        },
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
        padding: `${vars.spacing.sm} ${vars.spacing.md}`,
        height: "100%",
        "@media": {
            [mediaUtils.md]: {
                padding: `${vars.spacing.lg} ${vars.spacing.xl}`,
            },
        },
    }),
    contentWrapper: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "100%",
        padding: `${vars.spacing.sm} 0`,
        borderBottom: `1px solid ${vars.color.text}`,
        flexGrow: 1,
        overflow: "hidden",
    }),
    content: style({
        display: "flex",
        alignItems: "center",
        gap: vars.spacing.md,
        flexGrow: 1,
        overflow: "hidden",
        maxHeight: "max-content",
        "@media": {
            [mediaUtils.md]: {
                maxHeight: "inherit",
            },
        },
    }),
    leftContent: style({
        alignSelf: "center",
        position: "relative",
        aspectRatio: "1/1",
        maxWidth: "50%",
        width: "50%",
        height: "auto",
        flexShrink: 0,
        "@media": {
            [mediaUtils.md]: {
                width: "inherit",
                height: "80%",
            },
        },
    }),
    rightContent: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        flex: "auto",
        height: "80%",
        overflow: "hidden",
    }),
    description: style({
        width: "100%",
        flexGrow: 1,
        overflow: "hidden",
    }),
    descriptionText: style({
        whiteSpace: "pre-line",
    }),
};
