import { IOptions, RecursivePartial } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { FC, useEffect, useState } from "react";
import { loadFull } from "tsparticles";

import option from "@/asset/tsparticles-option.json"; //NOTE: https://particles.js.org/samples/index.html#Twinkle で作成

import { heroareaStyle } from "./HeroareaSection.css";

export const HeroareaSection: FC = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
            setInit(true);
        });
    }, []);

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    options={option as unknown as RecursivePartial<IOptions>}
                    className={heroareaStyle}
                />
            )}
        </>
    );
};
