"use client";

import { useLayoutEffect, useRef } from "react";

import { sectionInfo } from "@/models"; // Assuming sectionInfo is typed

import { HeroareaSection } from "@/components/section/heroarea";
import { Header } from "@/components/shared/Header";
import { RegisterButton } from "@/components/ui/RegisterButton";
import { useWorksModal } from "@/components/ui/WorksModal";

import { breakpoint } from "@/styles";

import { styles } from "./page.css";

export const HomePage = () => {
    const { isOpen, renderModal } = useWorksModal();
    const component = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const mediaQuery = window.matchMedia(`(min-width: ${breakpoint.md}px)`);

        const handleScroll = (event: WheelEvent) => {
            event.preventDefault();
            if (!slider.current) {
                return;
            }

            let currentTranslateX = 0;
            const scrollWidth = slider.current.scrollWidth - window.innerWidth;
            if (slider.current.style.transform) {
                try {
                    currentTranslateX = parseFloat(
                        slider.current.style.transform.split("(")[1].split(")")[0]
                    );
                } catch (error) {
                    console.error(error);
                }
            }

            // Adjust the translateX value based on the wheel delta
            currentTranslateX -= event.deltaY;
            currentTranslateX -= event.deltaX;

            // Constrain the translateX value between -totalWidth and 0
            currentTranslateX = Math.max(Math.min(currentTranslateX, 0), -scrollWidth);

            slider.current.style.transform = `translateX(${currentTranslateX}px)`;
        };

        const handleMediaChange = (event: MediaQueryListEvent) => {
            console.log("handleMediaChange");
            console.log(event);
            if (event.matches) {
                window.addEventListener("wheel", handleScroll, { passive: false });
            } else {
                window.removeEventListener("wheel", handleScroll);
                if (!slider.current) {
                    return;
                }
                slider.current.style.transform = ``;
            }
        };

        // Initial check
        handleMediaChange({ matches: mediaQuery.matches } as MediaQueryListEvent);

        // Add event listener for media query changes
        mediaQuery.addEventListener("change", handleMediaChange);

        return () => {
            window.removeEventListener("wheel", handleScroll);
            mediaQuery.removeEventListener("change", handleMediaChange);
        };
    }, []);

    return (
        <div className={styles.root} ref={component}>
            {isOpen && renderModal()}
            <Header className={styles.header} />
            <div className={styles.wrapper}>
                <div className={styles.container} ref={slider}>
                    <HeroareaSection />
                    {sectionInfo.map((section: (typeof sectionInfo)[number]) => (
                        <section.node key={section.id} />
                    ))}
                </div>
            </div>
            <RegisterButton />
        </div>
    );
};
