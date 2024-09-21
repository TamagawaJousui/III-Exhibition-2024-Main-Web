import { ConceptSection } from "@/components/section/concept";
import { WorksSection } from "@/components/section/works";

export const sectionInfo = [
    {
        id: "concept",
        title: "CONCEPT",
        node: ConceptSection,
    },
    {
        id: "works",
        title: "WORKS",
        node: WorksSection,
    },
] as const;

export type Section = (typeof sectionInfo)[number];
