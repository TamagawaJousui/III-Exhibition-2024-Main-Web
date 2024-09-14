"use client";

import { useEffect, useRef } from "react";

import { ConceptSection } from "@/components/section/concept";
import { WorksSection } from "@/components/section/works";
import { Footer } from "@/components/shared/Footer";

import { styles } from "./page.css";

export const HomePage = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);

    /**
     * NOTE: 横スクロールにするための処理
     * スマホ版対応の際に変更するかも
     */
    useEffect(() => {
        const container = scrollContainer.current;
        if (container) {
            const handleWheel = (event: WheelEvent) => {
                event.preventDefault();
                container.scrollLeft += event.deltaY;
            };

            container.addEventListener("wheel", handleWheel);
            return () => container.removeEventListener("wheel", handleWheel);
        }
    }, []);

    return (
        <div className={styles.root} ref={scrollContainer}>
            <ConceptSection />
            <WorksSection />
            <Footer />
        </div>
    );
};
