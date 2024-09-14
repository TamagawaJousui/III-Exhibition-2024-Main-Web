import { FC } from "react";

import { Header } from "@/components/shared/Header";

import { styles } from "./WithHeader.css";

type Props = {
    children: React.ReactNode;
};

export const WithHeader: FC<Props> = ({ children }) => (
    <div className={styles.root}>
        <Header />
        <div className={styles.content}>{children}</div>
    </div>
);
