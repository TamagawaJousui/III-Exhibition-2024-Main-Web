import clsx from "clsx";
import { FC } from "react";

import { styles } from "./WithWordBreak.css";

type Props = {
    children: React.ReactNode;
    className?: string;
};

export const WithWordBreak: FC<Props> = ({ children, className }) => (
    <p className={clsx(styles.root, className)}>{children}</p>
);
