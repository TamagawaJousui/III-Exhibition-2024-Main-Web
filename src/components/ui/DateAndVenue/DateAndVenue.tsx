import { useRef } from "react";

import { useDateAndVenue } from "./useDateAndVenue";

import { styles } from "./DateAndVenue.css";

export const DateAndVenue: React.FC = () => {
    const titleDivRef = useRef<HTMLDivElement>(null);
    useDateAndVenue(titleDivRef);

    return <div className={styles.magic} ref={titleDivRef}></div>;
};
