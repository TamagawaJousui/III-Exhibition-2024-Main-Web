import { FC } from "react";

import { styles } from "./WithWordBreak.css";

type Props = {
    children: React.ReactNode;
};

export const WithWordBreak: FC<Props> = ({ children }) => <p className={styles.root}>{children}</p>;
