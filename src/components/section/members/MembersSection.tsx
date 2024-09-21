import { FC } from "react";

import { teamList } from "@/models/member";

import { SectionContainer } from "@/components/shared/Container";
import { TeamCard } from "@/components/ui/TeamCard";

import { styles } from "./MembersSection.css";

export const MembersSection: FC = () => (
    <SectionContainer id="members" title="MEMBERS">
        <div className={styles.root}>
            {teamList.map((team) => (
                <TeamCard
                    key={team.name}
                    name={team.name}
                    members={team.members.map((member) => ({
                        ja: member.nameJa,
                        en: member.nameEn,
                    }))}
                />
            ))}
        </div>
    </SectionContainer>
);
