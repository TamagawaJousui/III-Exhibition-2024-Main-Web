"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";

import { isWebGlCapable } from "@/utils/responsive/checkWebGLCapability";

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
            {/* Particle Background */}
            <div className={styles.particle}>
                {isWebGlSupported ? (
                    <Particles />
                ) : (
                    <Image
                        src="/heroarea/particle_backgroud.png"
                        alt="iii exhibition background"
                        fill
                        style={{ objectFit: "contain" }}
                        className={styles.particleBackground}
                    />
                )}
            </div>

            {/* Desktop View */}
            <div className={styles.desktopView}>
                {isWebGlSupported ? (
                    <>
                        <Title />
                        <TitleEnglish />
                        <DateAndVenue />
                    </>
                ) : (
                    <>
                        <StaticTitle className={styles.title} />
                        <StaticTitleEnglish className={styles.titleEnglish} />
                        <StaticDateAndVenue className={styles.dateAndVenue} />
                    </>
                )}
            </div>

            {/* Mobile View */}
            <div className={styles.mobileView}>
                <StaticTitle className={styles.title} />
                <StaticTitleEnglish className={styles.titleEnglish} />
                <StaticDateAndVenue className={styles.dateAndVenue} />
            </div>

            {/* Mobile Particle Image */}
            <Image
                className={styles.particleImg}
                src={"/heroarea/particle_mobile.png"}
                alt="particle"
                width={1000}
                height={1000}
            />
        </div>
    );
};
