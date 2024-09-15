import { FC } from "react";

import { WorksCarousel } from "../ui/WorksCarousel";

import { SectionContainer } from "@/components/shared/Container";

import { styles } from "./WorksSection.css";

export const WorksSection: FC = () => {
    const SLIDES = [
        "https://placehold.jp/150x150.png",
        "https://placehold.jp/3d4070/ffffff/150x150.png",
        "https://placehold.jp/150x150.png",
        "https://placehold.jp/3d4070/ffffff/150x150.png",
        "https://placehold.jp/150x150.png",
        "https://placehold.jp/3d4070/ffffff/150x150.png",
    ];
    return (
        <SectionContainer title="Works">
            <div className={styles.root}>
                <WorksCarousel slides={SLIDES} />
            </div>
        </SectionContainer>
    );
};
