import clsx from "clsx";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FC, useCallback } from "react";

import { useWindow } from "@/hooks/window";
import { sectionInfo } from "@/models";

import { styles } from "./Header.css";

type Props = React.ComponentProps<"header">;

gsap.registerPlugin(ScrollToPlugin);

export const Header: FC<Props> = (props) => {
    const { className, ...otherProps } = props;

    const { isMobile } = useWindow();

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
    return (
        <header className={clsx(styles.root, className)} {...otherProps}>
            <nav>
                <ul className={styles.ul}>
                    {sectionInfo.map((section, index) => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                onClick={(e) => {
                                    if (!isMobile) {
                                        e.preventDefault();
                                        handleScrollToSection(section.id);
                                    }
                                }}
                            >
                                {section.title}
                            </a>
                            <span className={styles.separator}>
                                {index < sectionInfo.length - 1 && "・"}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
