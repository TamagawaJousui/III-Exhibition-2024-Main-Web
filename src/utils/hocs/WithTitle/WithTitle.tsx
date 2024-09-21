import clsx from "clsx";

import { typography } from "@/styles/typography.css";

import type { FC } from "react";

import { styles } from "./WithTitle.css";

type Props = {
    title: string;
    size: NonNullable<React.ComponentProps<typeof typography>>["fontSize"];
    fit?: boolean;
    children: React.ReactNode;
};

export const WithTitle: FC<Props> = ({ title, size, fit = false, children }) => (
    <div className={styles.root}>
        <h3 className={clsx(typography({ fontSize: size }), styles.heading({ fit: fit }))}>
            {title}
        </h3>
        <div className={styles.content}>{children}</div>
    </div>
);
