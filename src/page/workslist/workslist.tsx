"use client";

import { StaticWorksSection } from "@/components/section/staticworks";
import { useWorksModal } from "@/components/ui/WorksModal";

import { styles } from "./workslist.css";

export const WorksListPage = () => {
    const { isOpen, renderModal } = useWorksModal();

    return (
        <div className={styles.root}>
            {isOpen && renderModal()}
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <StaticWorksSection />
                </div>
            </div>
        </div>
    );
};
