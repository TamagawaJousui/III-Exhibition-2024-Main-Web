import clsx from "clsx";

import { typography } from "@/styles/typography.css";

import { WithScroll } from "../WithScroll";

import { vars } from "@/styles";

import type { FC } from "react";

import { styles } from "./WithTitle.css";

type Props = {
    title: string;
    font?: Extract<keyof (typeof vars)["font"], "YuMincho">;
    size: NonNullable<React.ComponentProps<typeof typography>>["fontSize"];
    weight?: NonNullable<React.ComponentProps<typeof typography>>["fontWeight"];
    padding?: Extract<keyof (typeof vars)["spacing"], "sm" | "md">;
    fit?: boolean;
    withScroll?: boolean;
    mobileAlign?: "left" | "center";
    children: React.ReactNode;
    className?: string;
};

export const WithTitle: FC<Props> = ({
    title,
    font,
    size,
    weight,
    padding = "md",
    fit = false,
    withScroll = false,
    mobileAlign = "left",
    children,
    className,
}) => {
    const Comp = withScroll ? WithScroll : "div";
    return (
        <div className={clsx(styles.root({ mobileAlign: mobileAlign }), className)}>
            <h3
                className={clsx(
                    typography({ fontFamily: font, fontSize: size, fontWeight: weight }),
                    styles.heading({ fit: fit, mobileAlign: mobileAlign })
                )}
            >
                {title}
            </h3>
            <Comp className={styles.content({ padding: padding, mobileAlign: mobileAlign })}>
                {children}
            </Comp>
        </div>
    );
};
