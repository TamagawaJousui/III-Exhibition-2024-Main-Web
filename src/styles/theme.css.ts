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

    font: {
        display: "",
        highlight: "",
    },

    fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        hg: "3rem",
    },

    breakpoint: breakpoint,

    zIndex: {
        background: "10",
        content: "50",
        header: "100",
        drawer: "200",
    },
});
