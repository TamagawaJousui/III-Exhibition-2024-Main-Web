import Image from "next/image";
import { FC } from "react";

import { useWindow } from "@/hooks/window";
import { WorkData } from "@/models/works";
import { WithTitle } from "@/utils/hocs/WithTitle";

import { ModalHeader } from "./internal/ModalHeader";

import { styles } from "./WorksModal.css";

type Props = {
    isOpen: boolean;
    currentWork: WorkData;
};

export const WorksModal: FC<Props> = ({ isOpen, currentWork }) => {
    const { isMobile } = useWindow();
    return (
        <dialog open={isOpen} className={styles.modal}>
            <div className={styles.wrapper}>
                <ModalHeader work={currentWork} />
                <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                        <div className={styles.leftContent}>
                            <Image
                                src={currentWork.imagePath}
                                alt="modal work image"
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className={styles.rightContent}>
                            <WithTitle
                                title="コンセプト"
                                size="xl"
                                withScroll
                                className={styles.description}
                            >
                                <p className={styles.descriptionText}>
                                    {currentWork.description.ja}
                                </p>
                            </WithTitle>
                            {!isMobile && <AuthorContent work={currentWork} />}
                        </div>
                    </div>
                    {isMobile && <AuthorContent work={currentWork} />}
                </div>
            </div>
        </dialog>
    );
};

type WorkProps = {
    work: WorkData;
};

const AuthorContent: FC<WorkProps> = ({ work }) => (
    <ul className={styles.author}>
        {work.member.map((name) => (
            <li key={`${name}-${work.place}`}>{name}</li>
        ))}
    </ul>
);
