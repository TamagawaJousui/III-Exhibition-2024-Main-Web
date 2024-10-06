import Image from "next/image";
import React from "react";

import { styles } from "./TitleEnglish.css";

export const TitleEnglish: React.FC = () => (
    <div className={styles.root}>
        <Image src="/DurationUndulation.svg" alt="DURATION UNDULATION" width={581} height={231} />
    </div>
);
