import type { FC } from "react";

import { styles } from "./NameCard.css";

type Props = { name: { ja: string; en: string } };

export const NameCard: FC<Props> = ({ name }) => (
    <div className={styles.root}>
        <h4>{name.ja}</h4>
        <p className={styles.en}>{name.en}</p>
    </div>
);
