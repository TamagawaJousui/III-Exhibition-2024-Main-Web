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

import { breakpoint } from "@/styles";

import { styles } from "./HeroareaSection.css";

export const HeroareaSection: FC = () => {
    const [isWebGlSupported, setIsWebGlSupported] = useState(false);
    const [isLgBreakpoint, setIsLgBreakpoint] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsWebGlSupported(isWebGlCapable());

            const mediaQuery = window.matchMedia(`(min-width: ${breakpoint.lg}px)`);

            const handleMediaChange = (event: MediaQueryListEvent) => {
                setIsLgBreakpoint(event.matches);
            };

            // Initial check
            setIsLgBreakpoint(mediaQuery.matches);

            // Add listener
            mediaQuery.addEventListener("change", handleMediaChange);

            return () => {
                mediaQuery.removeEventListener("change", handleMediaChange);
            };
        }
    }, []);

    return (
        <div className={styles.root}>
            {/* Desktop View */}
            <div className="hidden lg:block">
                {isWebGlSupported && isLgBreakpoint ? (
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
