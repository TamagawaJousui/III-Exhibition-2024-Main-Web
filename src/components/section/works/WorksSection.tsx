import { FC } from "react";

import { workList } from "./model";

import { SectionContainer } from "@/components/shared/Container";
import { WorksCarousel } from "@/components/ui/WorksCarousel";
import { WorksPickUp } from "@/components/ui/WorksPickUp";

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
                <SubContainer label="ピックアップ" withBorder>
                    <WorksPickUp slides={workList} />
                </SubContainer>
                <SubContainer label="全作品">
                    <WorksCarousel slides={SLIDES} />
                </SubContainer>
            </div>
        </SectionContainer>
    );
};

type SubContainerProps = {
    label: string;
    children: React.ReactNode;
    withBorder?: boolean;
};

export const SubContainer: FC<SubContainerProps> = ({ label, withBorder = false, children }) => (
    <div>
        <h2 className={styles.subLabel({ withBorder })}>{label}</h2>
        {children}
    </div>
);
