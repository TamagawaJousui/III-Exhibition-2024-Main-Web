import { styles } from "./DateAndVenue.css";

export const DateAndVenue: React.FC = () => (
    <div className={styles.root}>
        <span className={styles.span}>
            <span className={styles.PlayfairDisplay + " " + styles.fontSize}>Date</span>
            <span className={styles.YuMincho + " " + styles.fontSize}>
                11.7（Thu.）- 11.11（Mon.)
            </span>
        </span>
        <span className={styles.span}>
            <span className={styles.PlayfairDisplay + " " + styles.fontSize}>Venue</span>
            <span className={styles.YuMincho + " " + styles.fontSize}>東京大学本郷キャンパス</span>
        </span>
    </div>
);
