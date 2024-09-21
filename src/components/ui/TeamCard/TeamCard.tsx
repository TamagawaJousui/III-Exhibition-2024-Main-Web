import { NameCard } from "./NameCard";

import type { FC } from "react";

import { styles } from "./TeamCard.css";

type Props = { name: string; members: React.ComponentProps<typeof NameCard>["name"][] };

export const TeamCard: FC<Props> = ({ name, members }) => (
    <div className={styles.root}>
        <h3 className={styles.team}>{name}</h3>
        <div className={styles.members}>
            {members.map((name) => (
                <NameCard key={name.ja} name={{ ja: name.ja, en: name.en }} />
            ))}
        </div>
    </div>
);
