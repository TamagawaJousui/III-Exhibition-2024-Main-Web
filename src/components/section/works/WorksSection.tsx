import { FC } from "react";

import { SectionContainer } from "@/components/shared/Container";

import { styles } from "./WorksSection.css";

export const WorksSection: FC = () => (
    <SectionContainer title="Works">
        <div className={styles.root}>Works</div>
    </SectionContainer>
);
