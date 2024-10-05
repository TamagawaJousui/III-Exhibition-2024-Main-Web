import clsx from "clsx";

import { typography } from "@/styles/typography.css";

import { vars } from "@/styles";

import type { FC } from "react";

import { styles } from "./WithTitle.css";

type Props = {
    title: string;
    size: NonNullable<React.ComponentProps<typeof typography>>["fontSize"];
    padding?: Extract<keyof (typeof vars)["spacing"], "sm" | "md">;
    fit?: boolean;
    children: React.ReactNode;
    className?: string;
};

export const WithTitle: FC<Props> = ({
    title,
    size,
    padding = "md",
    fit = false,
    children,
    className,
}) => (
    <div className={clsx(styles.root, className)}>
        <h3 className={clsx(typography({ fontSize: size }), styles.heading({ fit: fit }))}>
            {title}
        </h3>
        <div className={styles.content({ padding: padding })}>{children}</div>
    </div>
);
