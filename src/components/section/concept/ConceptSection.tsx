"use client";

import dynamic from "next/dynamic";
import { FC, useEffect, useState } from "react";

import { conceptData } from "@/models/concept";
import { WithWordBreak } from "@/utils/hocs/WithWordBreak";
import { isWebGlCapable } from "@/utils/responsive/checkUserEnv";
import { BreakWord } from "@/utils/wordBreak";

import { SectionContainer } from "@/components/shared/Container";

import { styles } from "./ConceptSection.css";

// SSRを無効にしてreact-water-waveを動的にインポート
const WaterWave = dynamic(() => import("react-water-wave"), { ssr: false });

const ConceptElement = () => (
    <div className={styles.container}>
        <div className={styles.concept}>
            {conceptData.ja.map((concept) => (
                <WithWordBreak key={concept} as="h4" align="center">
                    <BreakWord content={concept} optional />
                </WithWordBreak>
            ))}
        </div>
        <p className={styles.concept}>{conceptData.en}</p>
    </div>
);

export const ConceptSection: FC = () => {
    const [isWebGlSupported, setIsWebGlSupported] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsWebGlSupported(isWebGlCapable());
        }
    }, []);

    return (
        <SectionContainer id="concept" title="CONCEPT" className={styles.root}>
            {isWebGlSupported ? (
                <WaterWave className={styles.wrapper} dropRadius={100}>
                    {ConceptElement}
                </WaterWave>
            ) : (
                <ConceptElement />
            )}
        </SectionContainer>
    );
};
