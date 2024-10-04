import { recipe } from "@vanilla-extract/recipes";

export const styles = {
    root: recipe({
        base: {
            wordBreak: "keep-all",
            overflowWrap: "break-word",
        },
        variants: {
            align: {
                center: {
                    textAlign: "center",
                },
                left: {
                    textAlign: "left",
                },
            },
        },
    }),
};
