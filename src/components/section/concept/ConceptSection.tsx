import { FC } from "react";

import { SectionContainer } from "@/components/shared/Container";

import { styles } from "./ConceptSection.css";

export const ConceptSection: FC = () => (
    <SectionContainer title="Concept">
        <div className={styles.root}>Concept</div>
    </SectionContainer>
);
