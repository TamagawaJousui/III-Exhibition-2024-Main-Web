import { MapPin } from "@phosphor-icons/react/dist/ssr";

import { useWindow } from "@/hooks/window";
import { WorkData } from "@/models/works";

import { Sns } from "@/components/shared/Sns";

import { typography } from "@/styles";

import type { FC } from "react";

import { styles } from "./ModalHeader.css";

type Props = { work: WorkData };

export const ModalHeader: FC<Props> = ({ work }) => {
    const { isMobile } = useWindow();
    return (
        <>
            <header className={styles.heading}>
                {!isMobile && <LeftHeader work={work} />}
                <div className={styles.headingContent({ align: "center" })}>
                    <h2 className={styles.title}>{work?.title}</h2>
                </div>
                {!isMobile && <RightHeader />}
            </header>
            {isMobile && (
                <div className={styles.subHeading}>
                    <LeftHeader work={work} />
                    <RightHeader />
                </div>
            )}
        </>
    );
};

const LeftHeader: FC<Props> = ({ work }) => (
    <div className={styles.headingContent({ align: "left" })}>
        <h5>展示場所</h5>
        <div className={styles.place}>
            <MapPin weight="fill" />
            <p className={typography({ fontSize: "sm" })}>{work?.place}</p>
        </div>
    </div>
);

const RightHeader: FC = () => (
    <div className={styles.headingContent({ align: "right" })}>
        <Sns />
    </div>
);
