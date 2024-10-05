import { List, X } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
import { FC } from "react";

import { useWindow } from "@/hooks/window";
import { sectionInfo } from "@/models";

import { useHeader } from "./hooks";

import { styles } from "./Header.css";

type Props = React.ComponentProps<"header">;

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
            <HeaderContent onClick={desktop.handleScrollToSection} preventDefault />
        </header>
    );
};

type HeaderContentProps = {
    onClick: (id: string) => void;
    preventDefault?: boolean;
};

const HeaderContent: FC<HeaderContentProps> = ({
    onClick: handleClick,
    preventDefault = false,
}) => (
    <nav>
        <ul className={styles.ul}>
            {sectionInfo.map((section, index) => (
                <li key={section.id} className={styles.li}>
                    <a
                        href={`#${section.id}`}
                        onClick={(e) => {
                            if (preventDefault) e.preventDefault();
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
