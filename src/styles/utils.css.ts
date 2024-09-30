import { style } from "@vanilla-extract/css";

import { breakpoint } from "./theme.css";

export const mediaUtils = {
    mobile: `screen and (max-width: ${breakpoint.mobile}px)`,
} as const;

export const styleUtils = {
    alignVertical: style({
        "@media": {
            [mediaUtils.mobile]: {
                flexDirection: "column",
            },
        },
    }),
};
