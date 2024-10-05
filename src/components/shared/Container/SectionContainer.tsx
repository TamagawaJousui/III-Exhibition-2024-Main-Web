"use client";

import clsx from "clsx";
import { FC, ReactNode } from "react";

import type { Section } from "@/models";

import { styles } from "./SectionContainer.css";

type Props = {
    id: Section["id"];
    title?: Section["title"];
    children: ReactNode;
    className?: string;
};

export const SectionContainer: FC<Props> = ({ id, title, children, className }) => (
    <section id={id} className={styles.root}>
        {title && <h1>{title}</h1>}
        <div className={clsx(styles.container, className)}>{children}</div>
    </section>
);
