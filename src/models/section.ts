import { FunctionComponent } from "react";

import { ConceptSection } from "@/components/section/concept";
import { WorksSection } from "@/components/section/works";

type SectionData = {
    id: string;
    label: string;
    node: FunctionComponent;
};

export const sectionInfo = [
    {
        id: "concept",
        label: "CONCEPT",
        node: ConceptSection,
    },
    {
        id: "works",
        label: "WORKS",
        node: WorksSection,
    },
] as const satisfies SectionData[];
