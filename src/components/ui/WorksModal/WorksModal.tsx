import { FacebookLogo, InstagramLogo, MapPin, XLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { FC } from "react";

import { typography } from "@/styles/typography.css";
import { WithTitle } from "@/utils/hocs/WithTitle";

import { WorkData } from "@/components/section/works/model";

import { styles } from "./WorksModal.css";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    currentWork: WorkData;
};

export const WorksModal: FC<Props> = ({ isOpen, onClose: handleClose, currentWork }) => (
    <div className={styles.overlay} onClick={handleClose}>
        <dialog open={isOpen} className={styles.modal}>
            <div className={styles.wrapper}>
                <div className={styles.heading}>
                    <div className={styles.headingContent({ align: "left" })}>
                        <h5>展示場所</h5>
                        <div className={styles.place}>
                            <MapPin weight="fill" />
                            <p className={typography({ fontSize: "sm" })}>{currentWork?.place}</p>
                        </div>
                    </div>
                    <p className={styles.headingContent({ align: "center" })}>
                        <h2 className={styles.title}>{currentWork?.title}</h2>
                    </p>
                    <div className={styles.headingContent({ align: "right" })}>
                        <InstagramLogo size={36} />
                        <XLogo size={36} />
                        <FacebookLogo size={36} />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.imageAuthor}>
                        <div className={styles.image}>
                            <Image
                                src={currentWork.imagePath}
                                alt="modal work image"
                                fill
                                objectFit="cover"
                            />
                        </div>
                        <ul className={styles.author}>
                            {currentWork.member.map((name) => (
                                <li key={name}>{name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.description}>
                        <WithTitle title="コンセプト" size="xl">
                            <p>{currentWork.description.ja}</p>
                        </WithTitle>
                        <WithTitle title="CONCEPT" size="lg">
                            <p>{currentWork.description.en}</p>
                        </WithTitle>
                    </div>
                </div>
            </div>
        </dialog>
    </div>
);
