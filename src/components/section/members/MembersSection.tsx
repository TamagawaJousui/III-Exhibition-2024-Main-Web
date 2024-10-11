import { FC } from "react";

import { teamList } from "@/models/member";

import { SectionContainer } from "@/components/shared/Container";
import { TeamCard } from "@/components/ui/TeamCard";

import { styles } from "./MembersSection.css";

export const MembersSection: FC = () => (
    <SectionContainer id="members" title="MEMBERS" className={styles.root}>
        {teamList
            .filter((team) => team.name != "GUEST")
            .map((team) => (
                <TeamCard
                    key={team.name}
                    name={team.name}
                    members={team.members.map((member) => ({
                        name: member.name,
                        nameLang: member.nameLang,
                        en: member.nameEn,
                    }))}
                />
            ))}
    </SectionContainer>
);
