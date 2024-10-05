import { useCallback, useState } from "react";

export const useHeader = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleOpen = useCallback(() => setIsOpen(true), []);
    const handleClose = useCallback(() => setIsOpen(false), []);

    const handleScrollToSection = useCallback((id: string) => {
        const targetElem = document.getElementById(id);
        if (targetElem) {
            const offset = targetElem.offsetLeft;
            gsap.to(window, {
                scrollTo: { y: offset, autoKill: false },
                duration: 1, // Scroll duration
                ease: "power2.inOut",
            });
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
