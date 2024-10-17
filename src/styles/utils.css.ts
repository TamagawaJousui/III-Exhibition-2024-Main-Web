import { style } from "@vanilla-extract/css";

import { breakpoint } from "./theme.css";

export const mediaUtils = {
    sm: `screen and (min-width: ${breakpoint.sm}px)`,
    md: `screen and (min-width: ${breakpoint.md}px)`,
    lg: `screen and (min-width: ${breakpoint.lg}px)`,
    xl: `screen and (min-width: ${breakpoint.xl}px)`,
    "2xl": `screen and (min-width: ${breakpoint["2xl"]}px)`,
} as const;

export const styleUtils = {
    alignVertical: style({
        width: "100%",
        flexDirection: "column",
        "@media": {
            [mediaUtils.md]: {
                width: "inhiert",
                flexDirection: "row",
            },
        },
    }),
};
