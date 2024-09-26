import clsx from "clsx";
import { FC } from "react";

import { Header } from "@/components/shared/Header";

import { styles } from "./WithHeader.css";

type Props = {
    children: React.ReactNode;
};

export const WithHeader: FC<Props> = ({ children }) => (
    <div className={clsx(styles.root)}>
        <Header className={styles.header} />
        <div className={styles.content}>{children}</div>
    </div>
);
