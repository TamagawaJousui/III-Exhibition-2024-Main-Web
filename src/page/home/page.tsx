"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import { sectionInfo } from "@/models"; // Assuming sectionInfo is typed

import { HeroareaSection } from "@/components/section/heroarea";
import { Header } from "@/components/shared/Header";
import { RegisterButton } from "@/components/ui/RegisterButton";
import { useWorksModal } from "@/components/ui/WorksModal";

import { breakpoint } from "@/styles";

import { styles } from "./page.css";

gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
    const { isOpen, renderModal } = useWorksModal();
    const component = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint.mobile}px)`);

        if (mediaQuery.matches) {
            return;
        }

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

            // console.log(currentTranslateX);
            slider.current.style.transform = `translateX(${currentTranslateX}px)`;
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
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
            <RegisterButton className={styles.registerButton} />
        </div>
    );
};
