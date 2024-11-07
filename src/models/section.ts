import { AccessSection } from "@/components/section/access";
import { AnnounceSection } from "@/components/section/announce";
import { ArchivesSection } from "@/components/section/archives";
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
        id: "works",
        title: "WORKS",
        node: WorksSection,
    },
    {
        id: "access",
        title: "ACCESS",
        node: AccessSection,
    },
    {
        id: "announce",
        title: "ANNOUNCE",
        node: AnnounceSection,
    },
    {
        id: "members",
        title: "MEMBERS",
        node: MembersSection,
    },
    {
        id: "archives",
        title: "ARCHIVES",
        node: ArchivesSection,
    },
] as const;

export type Section = (typeof sectionInfo)[number];
