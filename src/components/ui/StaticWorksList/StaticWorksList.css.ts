import { style } from "@vanilla-extract/css";

import { mediaUtils, vars } from "@/styles";

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        width: "100%",
        margin: "0 auto",
        border: `1px solid ${vars.color.textSecondary}`,
    }),
    heading: style({
        height: vars.spacing.xl,
        flexShrink: 0,
        padding: `${vars.spacing.xs} ${vars.spacing.md}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }),
    headingText: style({
        fontSize: vars.fontSize.base,
        "@media": {
            [mediaUtils.md]: {
                fontSize: "inherit",
            },
        },
    }),
    worksGrid: style({
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        justifyItems: "center",
        gap: "1rem",
        padding: "1rem",
    }),
    workItem: style({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
    }),
    workImage: style({
        borderRadius: "8px",
        overflow: "hidden",
        maxWidth: "150px",
        transition: "transform 0.3s, box-shadow 0.3s",
        selectors: {
            "&:hover": {
                cursor: "pointer",
                transform: "scale(1.05)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            },
        },
    }),
    image: style({
        display: "block",
        width: "100%",
        height: "100%",
    }),
    title: style({
        marginTop: "0.5rem",
        fontSize: "1rem",
        fontWeight: "bold",
        textAlign: "center",
        color: vars.color.text,
        padding: "0 0.5rem",
    }),
};
