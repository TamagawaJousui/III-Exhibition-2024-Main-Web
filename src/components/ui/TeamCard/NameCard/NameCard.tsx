import type { FC } from "react";

import { styles } from "./NameCard.css";

type Props = { name: { ja: string; en: string } };

const breakPoint = "・" as const;

export const NameCard: FC<Props> = ({ name }) => (
    <div className={styles.root}>
        <h4 className={styles.wordBreak}>
            {name.ja.includes(breakPoint) ? (
                <>
                    {name.ja.split(breakPoint)[0]}
                    <wbr />
                    {name.ja.split(breakPoint)[1]}
                </>
            ) : (
                name.ja
            )}
        </h4>

        <p className={styles.en}>{name.en}</p>
    </div>
);
