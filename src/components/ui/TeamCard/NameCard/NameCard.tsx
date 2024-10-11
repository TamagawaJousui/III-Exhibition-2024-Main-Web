import { WithWordBreak } from "@/utils/hocs/WithWordBreak";
import { BreakWord } from "@/utils/wordBreak";

import type { FC } from "react";

import { styles } from "./NameCard.css";

type Props = { name: { name: string; nameLang: string; en: string } };

export const NameCard: FC<Props> = ({ name }) => (
    <div className={styles.root}>
        <WithWordBreak as="a">
            <span lang={name.nameLang}>
                <BreakWord content={name.name} />
            </span>
        </WithWordBreak>
        <p className={styles.en}>{name.en}</p>
    </div>
);
