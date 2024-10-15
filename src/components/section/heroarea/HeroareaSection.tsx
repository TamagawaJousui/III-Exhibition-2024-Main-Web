import Image from "next/image";
import { FC } from "react";

import StaticDateAndVenue from "@/assets/svg/DateAndVenue.svg";
import StaticTitle from "@/assets/svg/Title.svg";
import StaticTitleEnglish from "@/assets/svg/TitleEnglish.svg";

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
            <StaticTitle className={styles.title} width={90} />
            <StaticTitleEnglish className={styles.titleEnglish} width={270} />
            <StaticDateAndVenue className={styles.dateAndVenue} width={170} />
            <Image
                className={styles.particleImg}
                src={"/heroarea/particle_mobile.png"}
                alt="particle"
                width={1000}
                height={1000}
            />
        </div>
    </div>
);
