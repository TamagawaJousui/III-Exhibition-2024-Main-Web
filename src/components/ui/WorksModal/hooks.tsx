import { atom, useAtom } from "jotai";
import { useCallback } from "react";

import { WorksModal } from "./WorksModal";

import { WorkData } from "@/components/section/works/model";

import { styles } from "./WorksModal.css";

type ModalOption = {
    onClose?: () => void;
};

const modalAtom = atom<boolean>(false);
const workAtom = atom<WorkData | null>(null);
const optionAtom = atom<ModalOption | null>(null);

export const useWorksModal = (optionInput?: ModalOption) => {
    const [isOpen, setIsOpen] = useAtom(modalAtom);
    const [work, setWork] = useAtom(workAtom);
    const [option, setOption] = useAtom(optionAtom);

    const handleOpen = useCallback(
        (work: WorkData) => {
            setIsOpen(true);
            setWork(work);
            setOption(optionInput ? optionInput : null);
        },
        [setIsOpen, setWork, optionInput, setOption]
    );

    const handleClose = useCallback(() => {
        setIsOpen(false);
        option?.onClose?.();
    }, [setIsOpen, option]);

    const renderModal = useCallback(() => {
        if (work) {
            return (
                <div className={styles.overlay} onClick={handleClose}>
                    <WorksModal isOpen={isOpen} currentWork={work} />
                </div>
            );
        }
    }, [handleClose, isOpen, work]);

    return {
        isOpen,
        renderModal,
        mutator: {
            handleOpen,
            handleClose,
        },
    };
};
