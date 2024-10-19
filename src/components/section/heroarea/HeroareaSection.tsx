"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";

import { isWebGlCapable } from "@/utils/responsive/checkUserEnv";

import StaticDateAndVenue from "./svg/DateAndVenue.svg";
import StaticTitle from "./svg/Title.svg";
import StaticTitleEnglish from "./svg/TitleEnglish.svg";

import { DateAndVenue } from "@/components/ui/DateAndVenue";
import { Particles } from "@/components/ui/Particles";
import { Title } from "@/components/ui/Title";
import { TitleEnglish } from "@/components/ui/TitleEnglish";

import { styles } from "./HeroareaSection.css";

export const HeroareaSection: FC = () => {
    const [isWebGlSupported, setIsWebGlSupported] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsWebGlSupported(isWebGlCapable());
        }
    }, []);

    return (
        <div className={styles.root}>
            {/* Desktop View */}
            <div className="hidden lg:block">
                {isWebGlSupported ? (
                    <>
                        <Particles />
                        <Title />
                        <TitleEnglish />
                        <DateAndVenue />
                    </>
                ) : (
                    <>
                        <StaticTitle className={styles.title} />
                        <StaticTitleEnglish className={styles.titleEnglish} />
                        <StaticDateAndVenue className={styles.dateAndVenue} />
                        <Image
                            src="/heroarea/particle_backgroud.png"
                            alt="iii exhibition background"
                            fill
                            style={{ objectFit: "contain" }}
                            className={styles.particleBackgroundDesktop}
                        />
                    </>
                )}
            </div>

            {/* Mobile View */}
            <div className="block lg:hidden">
                <StaticTitle className={styles.title} />
                <StaticTitleEnglish className={styles.titleEnglish} />
                <StaticDateAndVenue className={styles.dateAndVenue} />
                <Image
                    className={styles.particleBackgroundMobile}
                    src={"/heroarea/particle_mobile.png"}
                    alt="particle"
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    );
};
