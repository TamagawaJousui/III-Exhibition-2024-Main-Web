import { createGlobalTheme } from "@vanilla-extract/css";
export type colorType = RecursiveLeafKeys<typeof color>;

export const color = {
    primary: {
        dark: "#8E2B1D",
        main: "#C12A20",
        light: "#d84035",
        ultraLight: "#ccf0f2",
    },
    secondary: {
        dark: "#515050",
        main: "#979693",
        light: "#DDDCD6",
    },

    orange: "#EA542F",
    red: "#C12A20",
    green: "#6EC2AB",
    blue: "#6690B4",
    white: "#f4f4f4",
    black: "#000000",
    gray: "#E4E2E2",

    text: "#000000",
    textSecondary: "#909498",
    primaryBackground: "#E1DED9",
    secondaryBackground: "linear-gradient(to bottom,#DDDCD6, #767573)",
} as const;

export const breakpoint = {
    xs: "0px",
    sm: "650px",
    md: "960px",
    lg: "1100px",
    xl: "1440px",
} as const;

export const vars = createGlobalTheme(":root", {
    color: color,

    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
        xl: "4rem",
    },

    fontSize: {
        /**
         * 10px
         */
        xs: "0.625rem",
        /**
         * 12px
         */
        sm: "0.75rem",
        /**
         * 14px
         */
        base: "0.875rem",
        /**
         * 16px
         */
        lg: "1rem",
        /**
         * 18px
         */
        xl: "1.125rem",
        /**
         * 20px
         */
        "2xl": "1.25rem",
        /**
         * 24px
         */
        "3xl": "1.5rem",
    },

    fontWeight: {
        thin: "100",
        extraLight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semiBold: "600",
        bold: "600",
        extraBold: "800",
        black: "900",
    },

    lineHeight: {
        sm: "1rem",
        base: "1.25rem",
        lg: "1.5rem",
        xl: "1.75rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
    },

    radius: {
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
    },

    breakpoint: breakpoint,

    zIndex: {
        background: "10",
        content: "50",
        header: "100",
        drawer: "200",
    },
});
