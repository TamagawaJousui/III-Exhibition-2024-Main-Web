import { FC } from "react";

import { Place, placeList } from "@/models/place";
import { WorkData, workList } from "@/models/works";

import { SectionContainer } from "@/components/shared/Container";
import { StaticWorksList } from "@/components/ui/StaticWorksList";

import { styles } from "./StaticWorksSection.css";

export const StaticWorksSection: FC = () => (
    <SectionContainer id="works" title="WORKS" className={styles.root}>
        {placeList.map((place: Place) => {
            const works = workList.filter((work: WorkData) => work.place === place);
            return <StaticWorksList works={works} place={place} key={place} />;
        })}
    </SectionContainer>
);
