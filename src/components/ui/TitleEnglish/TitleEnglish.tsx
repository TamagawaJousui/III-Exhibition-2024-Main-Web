import { FC, useRef } from "react";

import { useTitleEnglish } from "./useTitleEnglish";

import { styles } from "./TitleEnglish.css";

export const TitleEnglish: FC = () => {
    const titleEnglishDivRef = useRef<HTMLDivElement>(null);
    useTitleEnglish(titleEnglishDivRef);

    return <div className={styles.magic} ref={titleEnglishDivRef}></div>;
};
