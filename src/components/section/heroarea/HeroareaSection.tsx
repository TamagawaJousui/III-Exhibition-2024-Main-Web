import { FC, useRef } from "react";

import { useParticles } from "./useParticles";

import { DateAndVenue } from "@/components/ui/DateAndVenue";
import { Title } from "@/components/ui/Title";
import { TitleEnglish } from "@/components/ui/TitleEnglish";

import { styles } from "./HeroareaSection.css";

export const HeroareaSection: FC = () => {
    const particlesDivRef = useRef<HTMLDivElement>(null);
    useParticles(particlesDivRef, 1024, 0.7);

    return (
        <div style={{ position: "relative" }}>
            <div className={styles.root} ref={particlesDivRef}></div>
            <Title />
            <TitleEnglish />
            <DateAndVenue />
        </div>
    );
};
