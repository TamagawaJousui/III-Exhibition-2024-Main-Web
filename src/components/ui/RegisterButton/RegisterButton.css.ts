import { style } from "@vanilla-extract/css";

import { typography, vars } from "@/styles";

export const styles = {
    root: style([
        typography({ fontSize: "lg" }),
        {
            display: "flex",
            flexDirection: "column",
            padding: `${vars.spacing.sm} ${vars.spacing.md}`,
            borderRadius: "2rem",
            border: "none",
            transition: "all 0.1s ease-in-out",
            background: "linear-gradient(to bottom, #384A5E, #4C5E73)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            fontFamily: "var(--font-klee)",
            selectors: {
                "&:hover": {
                    background: "linear-gradient(to bottom, #384A5E, #759AC4)",
                    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
                    transform: "translateY(-1px)",
                },
                "&:active": {
                    background: "linear-gradient(to bottom, #203043, #4E76A3)",
                    boxShadow: "0 3px 4px rgba(0, 0, 0, 0.15)",
                    transform: "scale(0.98)",
                },
            },
        },
    ]),
};
