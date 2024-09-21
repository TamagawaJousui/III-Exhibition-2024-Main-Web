import { FC } from "react";

import { placeList } from "@/models/place";

import { workList } from "./model";

import { SectionContainer } from "@/components/shared/Container";
import { WorksCarousel } from "@/components/ui/WorksCarousel";
import { WorksPickUp } from "@/components/ui/WorksPickUp";

import { styles } from "./WorksSection.css";

export const WorksSection: FC = () => (
    <SectionContainer id="works" title="WORKS">
        <div className={styles.root}>
            <SubContainer label="ピックアップ" withBorder>
                <WorksPickUp slides={workList} />
            </SubContainer>
            <SubContainer label="全作品">
                <div className={styles.allWorks}>
                    {placeList.map((place) => {
                        const works = workList.filter((work) => work.place === place);
                        return <WorksCarousel works={works} place={place} key={place} />;
                    })}
                </div>
            </SubContainer>
        </div>
    </SectionContainer>
);

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
