import { WithWordBreak } from "@/utils/hocs/WithWordBreak";
import { BreakWord } from "@/utils/wordBreak";

import type { FC } from "react";

import { styles } from "./NameCard.css";

type Props = { name: { ja: string; en: string } };

export const NameCard: FC<Props> = ({ name }) => (
    <div className={styles.root}>
        <WithWordBreak as="a">
            <BreakWord content={name.ja} />
        </WithWordBreak>
        <p className={styles.en}>{name.en}</p>
    </div>
);
