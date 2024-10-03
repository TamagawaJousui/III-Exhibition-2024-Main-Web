import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { typography } from "@/styles/typography.css";

import { vars } from "@/styles";

const slideHeight = createVar();
const slideSpacing = createVar();
const slideSize = createVar();

export const styles = {
    root: style({
        textAlign: "center",
        width: "20em",
        border: `1px solid ${vars.color.textSecondary}`,
    }),
    heading: style({
        height: vars.spacing.xl,
        borderBottom: `1px solid ${vars.color.textSecondary}`,
        margin: 0,
        padding: `${vars.spacing.xs} ${vars.spacing.md}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }),
    embla: style([
        typography({
            color: "text.secondary",
        }),
        {
            textAlign: "center",
            height: "100%",
            width: "100%",
            vars: {
                [slideHeight]: "350px",
                [slideSpacing]: "1rem",
                [slideSize]: "40%",
            },
        },
    ]),
    emblaViewport: style({
        padding: slideSpacing,
        overflow: "hidden",
        perspective: "1000px",
    }),
    emblaContainer: style({
        display: "flex",
        touchAction: "pan-x pinch-zoom",
        marginTop: `calc(${slideSpacing} * -1)`,
        height: `calc(${slideSpacing}  + ${slideHeight})`,
        flexDirection: "column",
        transformStyle: "preserve-3d",
    }),
    emblaSlide: recipe({
        base: {
            // transform: "translate3d(0, 0, 0)",
            transform: "translateZ(-200px) rotateX(0deg)",
            transition: "transform 0.6s ease",
            flex: `0 0 ${slideSize}`,
            minHeight: 0,
            paddingTop: `${slideSpacing}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        variants: {
            indexDiff: {
                "2": {
                    transform: "translateZ(-400px) rotateX(-60deg)", // Far next slide
                },
                "1": {
                    transform: "translateZ(-150px) rotateX(-20deg)", // Next slide
                },
                "0": {
                    transform: "translateZ(0px) rotateX(0deg)", // Center slide
                },
                "-1": {
                    transform: "translateZ(-150px) rotateX(20deg)", // Previous slide
                },
                "-2": {
                    transform: "translateZ(-400px) rotateX(60deg)", // Far previous slide
                },
            },
        },
    }),
    emblaSlideContent: style({
        boxShadow: "inset 0 0 0 0.2rem black",
        borderRadius: vars.radius["2xl"],
        userSelect: "none",
    }),
    arrowButtonContainer: style({
        textAlign: "center",
    }),
    emblaControls: style({
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        justifyContent: "space-between",
        gap: "1.2rem",
        marginTop: "1.8rem",
    }),
    emblaButtons: style({
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "0.6rem",
        alignItems: "center",
    }),
    emblaButton: style({
        WebkitTapHighlightColor: "rgba(orange, 0.5)",
        WebkitAppearance: "none",
        appearance: "none",
        backgroundColor: "transparent",
        touchAction: "manipulation",
        display: "inline-flex",
        textDecoration: "none",
        cursor: "pointer",
        border: 0,
        padding: 0,
        margin: 0,
        width: "3.6rem",
        height: "3.6rem",
        zIndex: 1,
        borderRadius: "50%",
        color: vars.color.text,
        alignItems: "center",
        justifyContent: "center",
        ":disabled": {
            color: "gray",
        },
    }),
    emblaButtonSvg: style({
        width: "35%",
        height: "35%",
    }),
    emblaDots: style({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: "calc((2.6rem - 1.4rem) / 2 * -1)",
    }),
    emblaDot: style({
        WebkitTapHighlightColor: "rgba(orange, 0.5)",
        WebkitAppearance: "none",
        appearance: "none",
        backgroundColor: "transparent",
        touchAction: "manipulation",
        display: "inline-flex",
        textDecoration: "none",
        cursor: "pointer",
        border: 0,
        padding: 0,
        margin: 0,
        width: "2.6rem",
        height: "2.6rem",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        ":after": {
            boxShadow: "inset 0 0 0 0.2rem orange",
            width: "1.4rem",
            height: "1.4rem",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            content: '""',
        },
        selectors: {
            "&.embla__dot--selected:after": {
                boxShadow: `inset 0 0 0 0.2rem ${vars.color.text}`,
            },
        },
    }),
};
