import { recipe } from "@vanilla-extract/recipes";

import { vars } from "./theme.css";

export const typography = recipe({
    variants: {
        /**
         * sm: 12px, base: 14px, lg: 16px, xl: 18px, 2xl: 20px, 3xl: 24px
         */
        fontSize: {
            /**
             * 10px
             */
            xs: {
                fontSize: vars.fontSize.xs,
                lineHeight: vars.lineHeight.xs,
            },
            /**
             * 12px
             */
            sm: {
                fontSize: vars.fontSize.sm,
                lineHeight: vars.lineHeight.sm,
            },
            /**
             * 14px
             */
            base: {
                fontSize: vars.fontSize.base,
                lineHeight: vars.lineHeight.base,
            },
            /**
             * 16px
             */
            lg: {
                fontSize: vars.fontSize.lg,
                lineHeight: vars.lineHeight.lg,
            },
            /**
             * 18px
             */
            xl: {
                fontSize: vars.fontSize.xl,
                lineHeight: vars.lineHeight.xl,
            },
            /**
             * 20px
             */
            "2xl": {
                fontSize: vars.fontSize["2xl"],
                lineHeight: vars.lineHeight["2xl"],
            },
            /**
             * 24px
             */
            "3xl": {
                fontSize: vars.fontSize["3xl"],
                lineHeight: vars.lineHeight["3xl"],
            },
        },

        fontWeight: {
            regular: {
                fontWeight: "normal",
            },
            bold: {
                fontWeight: "bold",
            },
        },

        color: {
            primary: {
                color: vars.color.primary.main,
            },

            text: {
                color: vars.color.text,
            },

            "text.secondary": {
                color: vars.color.textSecondary,
            },
            black: {
                color: vars.color.black,
            },
        },

        defaultVariants: {
            fontSize: "base",
            fontWeight: "regular",
            color: "text",
        },
    },
});
