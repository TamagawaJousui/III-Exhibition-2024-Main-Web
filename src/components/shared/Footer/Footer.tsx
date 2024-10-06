import { FC } from "react";

import { Sns } from "../Sns";

import { styles } from "./Footer.css";

export const Footer: FC = () => (
    <footer className={styles.root}>
        <h3>iiiExhibition 2024</h3>
        <Sns gap="md" />
        <p>© 2024 - iii exhibition</p>
    </footer>
);
