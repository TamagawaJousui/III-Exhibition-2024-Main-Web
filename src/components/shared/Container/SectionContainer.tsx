"use client";

import { FC, ReactNode } from "react";

import type { Section } from "@/models";

import { styles } from "./SectionContainer.css";

type Props = {
    id: Section["id"];
    title?: Section["title"];
    children: ReactNode;
};

export const SectionContainer: FC<Props> = ({ id, title, children }) => (
    <section id={id} className={styles.root}>
        {title && <h1>{title}</h1>}
        {children}
    </section>
);
