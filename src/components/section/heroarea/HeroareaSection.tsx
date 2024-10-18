import Image from "next/image";
import { FC, useState } from "react";

import { isWebGlCapable } from "@/utils/responsive/checkWebGLCapability";

import { Particles } from "@/components/ui/Particles";

import { styles } from "./HeroareaSection.css";

type TextProps = {
    label: string;
    className?: string;
};
const HeroareaText: FC<TextProps> = ({ label, className }) => {
    const svgPath = `/heroarea/static-${label}.svg`;
    return (
        <div className={className}>
            <Image
                src={svgPath}
                alt={`${label} of iii exhibition`}
                fill
                style={{ objectFit: "contain" }}
            />
        </div>
    );
};

export const HeroareaSection: FC = () => {
    const [isWebGlSupported] = useState(isWebGlCapable());

    return (
        <div className={styles.root}>
            {isWebGlSupported ? (
                <Particles />
            ) : (
                <Image
                    src="/heroarea/particle_backgroud.png"
                    alt="iii exhibition background"
                    fill
                    style={{ objectFit: "contain" }}
                    className={styles.particleBackground}
                />
            )}

            <div className={styles.container({ label: "title" })}>
                <HeroareaText label="title" className={styles.text} />
            </div>
            <div className={styles.container({ label: "titleEnglish" })}>
                <HeroareaText label="titleEnglish" className={styles.text} />
            </div>
            <div className={styles.container({ label: "dateAndVenue" })}>
                <HeroareaText label="dateAndVenue" className={styles.text} />
            </div>
        </div>
    );
};
