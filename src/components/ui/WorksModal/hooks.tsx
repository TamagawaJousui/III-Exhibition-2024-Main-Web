import { atom, useAtom } from "jotai";
import { useCallback } from "react";

import { WorksModal } from "./WorksModal";

import { WorkData } from "@/components/section/works/model";

const modalAtom = atom<boolean>(false);
const workAtom = atom<WorkData | null>(null);

export const useWorksModal = () => {
    const [isOpen, setIsOpen] = useAtom(modalAtom);
    const [work, setWork] = useAtom(workAtom);

    const handleOpen = useCallback(
        (work: WorkData) => {
            setIsOpen(true);
            setWork(work);
        },
        [setIsOpen, setWork]
    );

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const renderModal = () => {
        if (work) {
            return <WorksModal isOpen={isOpen} onClose={handleClose} currentWork={work} />;
        }
    };

    return {
        isOpen,
        renderModal,
        mutator: {
            handleOpen,
            handleClose,
        },
    };
};
