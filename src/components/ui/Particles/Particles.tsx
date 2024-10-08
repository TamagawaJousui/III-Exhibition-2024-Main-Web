import { FC, useRef } from "react";

import { useParticles } from "./hooks";

import { styles } from "./Particles.css";

export const Particles: FC = () => {
    const particlesDivRef = useRef<HTMLDivElement>(null);
    useParticles(particlesDivRef, 1024, 0.7);

    return <div className={styles.root} ref={particlesDivRef}></div>;
};
