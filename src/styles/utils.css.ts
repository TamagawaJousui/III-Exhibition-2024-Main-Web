import { style } from "@vanilla-extract/css";

import { breakpoint } from "./theme.css";

export const mediaUtils = {
    sm: `screen and (max-width: ${breakpoint.sm}px)`,
    md: `screen and (max-width: ${breakpoint.md}px)`,
    lg: `screen and (max-width: ${breakpoint.lg}px)`,
    xl: `screen and (max-width: ${breakpoint.xl}px)`,
    "2xl": `screen and (max-width: ${breakpoint["2xl"]}px)`,
} as const;

export const styleUtils = {
    alignVertical: style({
        "@media": {
            [mediaUtils.md]: {
                width: "100%",
                flexDirection: "column",
            },
        },
    }),
};
