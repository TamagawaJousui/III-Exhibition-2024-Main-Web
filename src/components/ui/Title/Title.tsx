import { FC, useRef } from "react";

import { useTitle } from "./hooks";

import { styles } from "./Title.css";

export const Title: FC = () => {
    const titleDivRef = useRef<HTMLDivElement>(null);
    useTitle(titleDivRef);

    return <div className={styles.magic} ref={titleDivRef}></div>;
};
