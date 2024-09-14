import { FC } from "react";

import { sectionInfo } from "@/models/section";

import { styles } from "./Header.css";

export const Header: FC = () => (
    <header className={styles.root}>
        <nav>
            <ul className={styles.ul}>
                {sectionInfo.map((section) => (
                    <li key={section.id}>
                        <a href={`#${section.id}`}>{section.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);
