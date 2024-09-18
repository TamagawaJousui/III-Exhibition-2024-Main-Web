import Image from "next/image";
import { FC } from "react";

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
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <div className={styles.headingContent({ align: "left" })}>
                            <p>展示場所</p>
                            <p>{currentWork?.place}</p>
                        </div>
                        <p className={styles.headingContent({ align: "center" })}>
                            {currentWork?.title}
                        </p>
                        <p className={styles.headingContent({ align: "right" })}>hoge</p>
                    </div>
                    <div className={styles.works}>
                        <Image
                            src={currentWork.imagePath}
                            alt="dummy"
                            width={128}
                            height={128}
                            className={styles.image}
                        />
                        <div className={styles.description}>hogehoge</div>
                    </div>
                </div>
            </div>
        </dialog>
    </div>
);
