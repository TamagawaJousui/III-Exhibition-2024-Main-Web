"use client";

import clsx from "clsx";
import { FC, ReactNode } from "react";

import { backgroundStyle, container, wrapper } from "./SectionContainer.css";

type Props = {
    children: ReactNode;
    title?: string;
    backgroundColor?: keyof typeof backgroundStyle;
};

export const SectionContainer: FC<Props> = ({
    children,
    title,
    backgroundColor = "primaryBackground",
}) => (
    <div className={wrapper}>
        <section className={clsx(container, backgroundStyle[backgroundColor])}>
            {title && <h1>{title}</h1>}
            {children}
        </section>
    </div>
);
