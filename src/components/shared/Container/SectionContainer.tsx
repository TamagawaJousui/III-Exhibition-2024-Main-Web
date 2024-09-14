"use client";

import { FC, ReactNode } from "react";

import { styles } from "./SectionContainer.css";

type Props = {
    title?: string;
    children: ReactNode;
};

export const SectionContainer: FC<Props> = ({ title, children }) => (
    <section className={styles.root}>
        {title && <h1>{title}</h1>}
        {children}
    </section>
);
