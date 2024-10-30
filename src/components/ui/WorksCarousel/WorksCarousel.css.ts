import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { typography } from "@/styles/typography.css";

import { mediaUtils, vars } from "@/styles";

const slideHeight = createVar();
const slideSpacing = createVar();
const slideSize = createVar();

export const styles = {
    root: style({
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        width: "20em",
        maxWidth: "100%",
        border: `1px solid ${vars.color.textSecondary}`,
        height: "100%",
    }),
    heading: style({
        height: vars.spacing.xl,
        flexShrink: 0,
        borderBottom: `1px solid ${vars.color.textSecondary}`,
        margin: 0,
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
    embla: style([
        typography({
            color: "text.secondary",
        }),
        {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            overflow: "hidden",
            width: "100%",
            vars: {
                [slideHeight]: "100%",
                [slideSpacing]: "1rem",
                [slideSize]: "180px",
            },
        },
    ]),
    emblaViewport: style({
        padding: slideSpacing,
        flex: 1,
        overflow: "hidden",
        perspective: "1000px",
    }),
    emblaContainer: style({
        display: "flex",
        flexDirection: "column",
        touchAction: "pan-x pinch-zoom",
        marginTop: `calc(${slideSpacing} * -1)`,
        height: `calc(2 * ${slideSize})`,
        width: "fit-content",
        transformStyle: "preserve-3d",
    }),
    emblaSlide: recipe({
        base: {
            transform: "translateZ(-200px) rotateX(0deg)",
            transition: "transform 0.6s ease-in-out",
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
};
