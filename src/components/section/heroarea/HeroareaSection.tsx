import Image from "next/image";
import { FC } from "react";

import { DateAndVenue } from "@/components/ui/DateAndVenue";
import { Particles } from "@/components/ui/Particles";
import { Title } from "@/components/ui/Title";
import { TitleEnglish } from "@/components/ui/TitleEnglish";

import { styles } from "./HeroareaSection.css";

export const HeroareaSection: FC = () => (
    <div className={styles.root}>
        <div className={styles.desktopView}>
            <Particles />
            <Title />
            <TitleEnglish />
            <DateAndVenue />
        </div>
        <div className={styles.mobileView}>
            <div className={styles.container({ label: "title" })}>
                <HeroareaText label="title" className={styles.text} />
            </div>
            <div className={styles.container({ label: "titleEnglish" })}>
                <HeroareaText label="titleEnglish" className={styles.text} />
            </div>
            <div className={styles.container({ label: "dateAndVenue" })}>
                <HeroareaText label="dateAndVenue" className={styles.text} />
            </div>
        </div>
    </div>
);

type TextProps = {
    label: string;
    className?: string;
};
const HeroareaText: FC<TextProps> = ({ label, className }) => {
    const svgPath = `/heroarea/static-${label}.svg`;
    return (
        <div className={className}>
            <Image
                src={svgPath}
                alt={`${label} of iii exhibition`}
                fill
                style={{ objectFit: "contain" }}
            />
        </div>
    );
};
