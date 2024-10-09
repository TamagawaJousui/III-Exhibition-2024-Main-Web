import Image from "next/image";
import { FC } from "react";

import { useWindow } from "@/hooks/window";
import { WorkData } from "@/models/works";
import { WithTitle } from "@/utils/hocs/WithTitle";

import { ModalHeader } from "./internal/ModalHeader";
import { WorksAuthor } from "./internal/WorksAuthor";

import { styles } from "./WorksModal.css";

type Props = {
    isOpen: boolean;
    currentWork: WorkData;
    onClose: () => void;
};

export const WorksModal: FC<Props> = ({ isOpen, currentWork, onClose: handleClose }) => {
    const { isMobile } = useWindow();
    return (
        <dialog open={isOpen} className={styles.modal}>
            <div className={styles.wrapper}>
                <ModalHeader work={currentWork} onClose={handleClose} />
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
                            <WithTitle title="コンセプト" withScroll className={styles.description}>
                                <p className={styles.descriptionText}>
                                    {currentWork.description.ja}
                                </p>
                            </WithTitle>
                            {!isMobile && <WorksAuthor work={currentWork} />}
                        </div>
                    </div>
                    {isMobile && <WorksAuthor work={currentWork} />}
                </div>
            </div>
        </dialog>
    );
};
