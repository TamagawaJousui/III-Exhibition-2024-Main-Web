import clsx from "clsx";

import { typography } from "@/styles/typography.css";

import { WithScroll } from "../WithScroll";

import { vars } from "@/styles";

import type { FC } from "react";

import { styles } from "./WithTitle.css";

type Props = {
    title: string;
    font?: {
        family?: NonNullable<React.ComponentProps<typeof typography>>["fontFamily"];
        size?: NonNullable<React.ComponentProps<typeof typography>>["fontSize"];
        weight?: NonNullable<React.ComponentProps<typeof typography>>["fontWeight"];
    };
    padding?: Extract<keyof (typeof vars)["spacing"], "sm" | "md">;
    fit?: boolean;
    withScroll?: boolean;
    mobileAlign?: "left" | "center";
    children: React.ReactNode;
    className?: string;
    typographyClassName?: string;
};

export const WithTitle: FC<Props> = ({
    title,
    font = { family: "notoSerif", size: "xl", weight: "extraBold" },
    padding = "md",
    fit = false,
    withScroll = false,
    mobileAlign = "left",
    children,
    className,
    typographyClassName,
}) => {
    const Comp = withScroll ? WithScroll : "div";
    return (
        <div className={clsx(styles.root({ mobileAlign: mobileAlign }), className)}>
            <h3
                className={clsx(
                    typography({
                        fontFamily: font["family"],
                        fontSize: font["size"],
                        fontWeight: font["weight"],
                    }),
                    styles.heading({ fit: fit, mobileAlign: mobileAlign }),
                    typographyClassName
                )}
            >
                {title}
            </h3>
            <Comp className={styles.content({ padding: padding })}>{children}</Comp>
        </div>
    );
};
