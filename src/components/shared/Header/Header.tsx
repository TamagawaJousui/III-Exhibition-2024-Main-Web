import { List, X } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
import { FC } from "react";

import { sectionInfo } from "@/models";

import { useHeader } from "./hooks";

import { vars } from "@/styles";

import { styles } from "./Header.css";

type Props = React.ComponentProps<"div">;

export const Header: FC<Props> = (props) => {
    const { className, ...otherProps } = props;

    const { mobile, desktop } = useHeader();

    return (
        <header className={clsx(styles.root, className)} {...otherProps}>
            <h4 className={styles.title}>iii exhibition 2024</h4>
            <div className={styles.mobileView}>
                <>
                    <List
                        size={36}
                        onClick={mobile.handleOpen}
                        color={vars.color.black}
                        weight="light"
                    />
                    <dialog open={mobile.isOpen} className={styles.modal}>
                        <X weight="bold" size={32} onClick={mobile.handleClose} />
                        <HeaderContent onClick={mobile.handleClose} />
                    </dialog>
                </>
            </div>
            <div className={styles.desktopView}>
                <HeaderContent onClick={desktop.handleScrollToSection} preventDefault />
            </div>
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
