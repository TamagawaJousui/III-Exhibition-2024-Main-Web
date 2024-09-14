import { FC } from "react";

import { styles } from "./Footer.css";

export const Footer: FC = () => (
    <footer className={styles.root}>
        <p className={styles.title}>iiiExhibition 2024</p>
        <div className={styles.copyRight}>© 2024 - iii exhibition</div>
    </footer>
);
