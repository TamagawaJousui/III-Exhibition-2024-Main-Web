import { FC, useRef } from "react";

import { useParticles } from "./useParticles";

import { styles } from "./HeroareaSection.css";

export const HeroareaSection: FC = () => {
    const canvasRef = useRef<HTMLDivElement>(null);
    useParticles(canvasRef, 1024, 0.7);

    return (
        <div className={styles.root} ref={canvasRef}>
            ついて離れて
        </div>
    );
};
