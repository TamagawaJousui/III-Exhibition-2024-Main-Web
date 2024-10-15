import { recipe } from "@vanilla-extract/recipes";

import { mediaUtils } from "@/styles";

export const styles = {
    root: recipe({
        base: {
            wordBreak: "keep-all",
            overflowWrap: "anywhere",
        },
        variants: {
            align: {
                center: {
                    textAlign: "center",
                },
                flexible: {
                    textAlign: "left",
                    "@media": {
                        [mediaUtils.mdMax]: {
                            textAlign: "center",
                        },
                    },
                },
                left: {
                    textAlign: "left",
                },
            },
        },
    }),
};
