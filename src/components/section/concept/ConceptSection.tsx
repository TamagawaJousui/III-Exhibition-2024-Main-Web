import dynamic from "next/dynamic";
import { FC } from "react";

import { conceptData } from "@/models/concept";
import { WithWordBreak } from "@/utils/hocs/WithWordBreak";
import { BreakWord } from "@/utils/wordBreak";

import { SectionContainer } from "@/components/shared/Container";

import { styles } from "./ConceptSection.css";

// SSRを無効にしてreact-water-waveを動的にインポート
const WaterWave = dynamic(() => import("react-water-wave"), { ssr: false });

export const ConceptSection: FC = () => (
    <SectionContainer id="concept" title="CONCEPT" className={styles.root}>
        <WaterWave className={styles.wrapper} dropRadius={100}>
            {() => (
                <div className={styles.container}>
                    <div className={styles.concept}>
                        {conceptData.ja.map((concept) => (
                            <WithWordBreak key={concept} as="h4">
                                <BreakWord content={concept} optional />
                            </WithWordBreak>
                        ))}
                    </div>
                    <p className={styles.concept}>{conceptData.en}</p>
                </div>
            )}
        </WaterWave>
    </SectionContainer>
);
