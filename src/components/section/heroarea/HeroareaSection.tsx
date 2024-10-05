import { FC, useRef } from "react";

import { useParticles } from "./useParticles";

import { Title } from "@/components/ui/Title";

import { styles } from "./HeroareaSection.css";

export const HeroareaSection: FC = () => {
    const canvasRef = useRef<HTMLDivElement>(null);
    useParticles(canvasRef, 1024, 0.7);

    return (
        <div style={{ position: "relative" }}>
            <div
                className={styles.root}
                ref={canvasRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                }}
            >
                ついて離れて
            </div>
            <Title />
        </div>
    );
};
