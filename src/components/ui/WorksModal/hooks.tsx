import { atom, useAtom } from "jotai";
import { useCallback, useEffect } from "react";

import { WorkData } from "@/models/works";

import { WorksModal } from "./WorksModal";

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

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

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
                    <WorksModal isOpen={isOpen} currentWork={work} onClose={handleClose} />
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
