import { MapPin, X } from "@phosphor-icons/react/dist/ssr";

import { useWindow } from "@/hooks/window";
import { WorkData } from "@/models/works";

import { typography } from "@/styles";

import type { FC } from "react";

import { styles } from "./ModalHeader.css";

type Props = { work: WorkData; onClose: () => void };

export const ModalHeader: FC<Props> = ({ work, onClose: handleClose }) => {
    const { isMobile } = useWindow();
    return (
        <>
            <header className={styles.heading}>
                {isMobile ? (
                    <div className={styles.headingContent({ align: "left" })} />
                ) : (
                    <LeftHeader work={work} className={styles.headingContent({ align: "left" })} />
                )}
                <div className={styles.headingContent({ align: "center" })}>
                    <h2 className={styles.title}>{work?.title}</h2>
                </div>
                <RightHeader
                    onClick={handleClose}
                    className={styles.headingContent({ align: "right" })}
                />
            </header>
            {isMobile && (
                <div className={styles.subHeading}>
                    <LeftHeader work={work} />
                </div>
            )}
        </>
    );
};

type LeftProps = { work: WorkData; className?: string };
const LeftHeader: FC<LeftProps> = ({ work, className }) => (
    <div className={className}>
        <h5 className={typography({ fontFamily: "notoSerif" })}>展示場所</h5>
        <div className={styles.place}>
            <MapPin weight="fill" />
            <p className={typography({ fontSize: "sm" })}>{work?.place}</p>
        </div>
    </div>
);

type RightProps = { onClick: () => void; className?: string };
const RightHeader: FC<RightProps> = ({ onClick: handleClick, className }) => (
    <div className={className}>
        <X onClick={handleClick} size="2rem" className={styles.closeButton} />
    </div>
);
