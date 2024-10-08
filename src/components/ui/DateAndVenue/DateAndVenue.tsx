import { FC, useRef } from "react";

import { useDateAndVenue } from "./useDateAndVenue";

import { styles } from "./DateAndVenue.css";

export const DateAndVenue: FC = () => {
    const dateAndVenueDivRef = useRef<HTMLDivElement>(null);
    useDateAndVenue(dateAndVenueDivRef);

    return <div className={styles.magic} ref={dateAndVenueDivRef}></div>;
};
