import { FC } from "react";

import { DateAndVenue } from "@/components/ui/DateAndVenue";
import { Particles } from "@/components/ui/Particles";
import { Title } from "@/components/ui/Title";
import { TitleEnglish } from "@/components/ui/TitleEnglish";

export const HeroareaSection: FC = () => (
    <div style={{ position: "relative" }}>
        <Particles />
        <Title />
        <TitleEnglish />
        <DateAndVenue />
    </div>
);
