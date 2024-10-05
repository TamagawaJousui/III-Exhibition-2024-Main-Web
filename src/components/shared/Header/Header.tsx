import { List, X } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FC } from "react";

import { useWindow } from "@/hooks/window";
import { sectionInfo } from "@/models";

import { useHeader } from "./hooks";

import { styles } from "./Header.css";

type Props = React.ComponentProps<"header">;

gsap.registerPlugin(ScrollToPlugin);

export const Header: FC<Props> = (props) => {
    const { className, ...otherProps } = props;
    const { isMobile } = useWindow();

    const { mobile, desktop } = useHeader();

    return isMobile ? (
        <>
            <List weight="bold" size={36} className={className} onClick={mobile.handleOpen} />
            <dialog open={mobile.isOpen} className={styles.modal}>
                <X weight="bold" size={32} onClick={mobile.handleClose} />
                <HeaderContent onClick={mobile.handleClose} />
            </dialog>
        </>
    ) : (
        <header className={clsx(styles.root, className)} {...otherProps}>
            <HeaderContent onClick={desktop.handleScrollToSection} />
        </header>
    );
};

type HeaderContentProps = {
    onClick: (id: string) => void;
};

const HeaderContent: FC<HeaderContentProps> = ({ onClick: handleClick }) => (
    <nav>
        <ul className={styles.ul}>
            {sectionInfo.map((section, index) => (
                <li key={section.id} className={styles.li}>
                    <a
                        href={`#${section.id}`}
                        onClick={() => {
                            handleClick(section.id);
                        }}
                    >
                        {section.title}
                    </a>
                    {index < sectionInfo.length - 1 && "・"}
                </li>
            ))}
        </ul>
    </nav>
);
