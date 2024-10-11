import { createGlobalTheme } from "@vanilla-extract/css";
export type colorType = RecursiveLeafKeys<typeof color>;

export const color = {
    primary: {
        dark: "#384A5E",
        main: "#6C9CC4",
        light: "#6DAAD6",
    },
    secondary: {
        dark: "#515050",
        main: "#979693",
        light: "#DDDCD6",
    },
    background: {
        desktop:
            "linear-gradient(to right, rgb(237, 231, 233) 0%, rgb(109, 170, 214) 15%, rgb(103, 100, 120) 65%, rgb(69, 60, 60) 85%, rgb(20, 20, 20) 100%)",
        mobile: "linear-gradient(to bottom, rgb(237, 231, 233) 0%, rgb(109, 170, 214) 15%, rgb(103, 100, 120) 65%, rgb(69, 60, 60) 85%, rgb(20, 20, 20) 100%)",
        dark: "#3B3B3B",
    },

    orange: "#EA542F",
    red: "#C12A20",
    green: "#6EC2AB",
    blue: "#6690B4",
    white: "#f4f4f4",
    black: "#424242",
    gray: "#E4E2E2",

    text: "#F9F6F7",
    textSecondary: "#C4C4C4",
} as const;

export const breakpoint = {
    mobile: 750,
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
         * 30px
         */
        "2xl": "1.875rem",
        /**
         * 45px
         */
        "3xl": "2.8125rem",
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

    fontFamily: {
        playfair: "var(--font-playfair)",
        kleeOne: "var(--font-klee)",
        kleeOneCh: "var(--font-klee-ch)",
    },

    lineHeight: {
        xs: "0.75rem",
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

    zIndex: {
        background: "10",
        content: "50",
        header: "100",
        modal: "200",
    },
});
