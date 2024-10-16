import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useCallback, useState } from "react";

gsap.registerPlugin(ScrollToPlugin);

export const useHeader = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleOpen = useCallback(() => setIsOpen(true), []);
    const handleClose = useCallback(() => setIsOpen(false), []);

    const handleScrollToSection = useCallback((id: string) => {
        const targetElem = document.getElementById(id);
        if (targetElem) {
            const offset = targetElem.offsetLeft;
            const slider = targetElem.parentElement;
            if (slider) {
                const minTranslateX = -(slider.scrollWidth - window.innerWidth);
                const maxTranslateX = 0;
                const clampedTranslateX = Math.max(minTranslateX, Math.min(maxTranslateX, -offset));

                gsap.to(slider, { duration: 1, x: clampedTranslateX, ease: "power2.out" });
            }
        }
    }, []);

    return {
        mobile: {
            isOpen,
            handleOpen,
            handleClose,
        },
        desktop: {
            handleScrollToSection,
        },
    };
};
