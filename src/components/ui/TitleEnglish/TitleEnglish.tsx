import React, { useRef } from "react";

import { useTitleEnglish } from "./useTitleEnglish";

import { styles } from "./TitleEnglish.css";

export const TitleEnglish: React.FC = () => {
    const titleDivRef = useRef<HTMLDivElement>(null);
    useTitleEnglish(titleDivRef);

    return <div className={styles.magic} ref={titleDivRef}></div>;
};
