import clsx from "clsx";
import { ElementType, FC } from "react";

import { styles } from "./WithWordBreak.css";

type Props = {
    children: React.ReactNode;
    align?: "center" | "left";
    className?: string;
    as?: ElementType;
};

export const WithWordBreak: FC<Props> = ({
    children,
    align = "center",
    className,
    as: Component = "p",
}) => <Component className={clsx(styles.root({ align }), className)}>{children}</Component>;
