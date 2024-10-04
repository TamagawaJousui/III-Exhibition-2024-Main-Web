import clsx from "clsx";
import React, { FC } from "react";

import { styles } from "./WithScroll.css";

interface ScrollAreaProps {
    children: React.ReactNode;
    className?: string;
}

export const WithScroll: FC<ScrollAreaProps> = ({ children, className }) => (
    <div className={clsx(styles.root, className)}>{children}</div>
);
