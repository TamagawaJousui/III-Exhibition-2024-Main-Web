import type { FC } from "react";

import { styles } from "./PlaceCard.css";

type Props = { name: string };

const breakPoint = "・" as const;

export const PlaceCard: FC<Props> = ({ name }) => (
    <div className={styles.root}>
        <h4 className={styles.wordBreak}>
            {name.includes(breakPoint) ? (
                <>
                    {name.split(breakPoint)[0]}
                    <br />
                    {name.split(breakPoint)[1]}
                </>
            ) : (
                name
            )}
        </h4>
    </div>
);
