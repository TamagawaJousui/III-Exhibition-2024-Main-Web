import { AccessSection } from "@/components/section/access";
import { ConceptSection } from "@/components/section/concept";
import { MembersSection } from "@/components/section/members";
import { WorksSection } from "@/components/section/works";

export const sectionInfo = [
    {
        id: "concept",
        title: "CONCEPT",
        node: ConceptSection,
    },
    {
        id: "access",
        title: "ACCESS",
        node: AccessSection,
    },
    {
        id: "works",
        title: "WORKS",
        node: WorksSection,
    },
    {
        id: "members",
        title: "MEMBERS",
        node: MembersSection,
    },
] as const;

export type Section = (typeof sectionInfo)[number];
