import React, { useRef } from "react";

import { useTitle } from "./useTitle";

import { styles } from "./Title.css";

export const Title: React.FC = () => {
    const titleDivRef = useRef<HTMLDivElement>(null);
    useTitle(titleDivRef);

    return <div className={styles.magic} ref={titleDivRef}></div>;
};
