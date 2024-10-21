"use client";

import dynamic from "next/dynamic";
import { FC, useEffect, useState } from "react";

import { conceptData } from "@/models/concept";
import { isWebGlCapable } from "@/utils/responsive/checkUserEnv";

// SSRを無効にしてreact-water-waveを動的にインポート
const WaterWave = dynamic(() => import("react-water-wave"), { ssr: false });

const ConceptElement = () => (
    <div className="flex flex-col h-full pt-20">
        <div className="flex flex-col gap-10 md:gap-8 ">
            {conceptData.ja.map((concept) => (
                <h4
                    key={concept}
                    className="text-left font-conpect-ja font-semibold text-2xl md:whitespace-pre-wrap md:text-lg"
                >
                    {concept}
                </h4>
            ))}
        </div>
        <div className="flex flex-col gap-6 pt-[4.5rem] md:gap-6">
            {conceptData.en.map((concept) => (
                <h4
                    key={concept}
                    className="text-left font-conpect-en font-light text-2xl md:whitespace-pre-wrap md:text-lg"
                >
                    {concept}
                </h4>
            ))}
        </div>
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
        <section
            id="concept"
            className="flex flex-col w-full min-h-screen p-[2rem] py-6 md:w-screen"
        >
            <h1 className="font-normal">CONCEPT</h1>
            {isWebGlSupported ? (
                <WaterWave className="h-full w-full" dropRadius={50}>
                    {ConceptElement}
                </WaterWave>
            ) : (
                <ConceptElement />
            )}
        </section>
    );
};
