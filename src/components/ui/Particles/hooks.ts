import { useEffect } from "react";

import { trigger } from "./internal/trigger";

export const useParticles = (
    particlesDivRef: React.RefObject<HTMLDivElement>,
    size: number,
    radius: number
) => {
    useEffect(() => {
        let dispose: () => void = () => {};
        const checkWebGLAndTrigger = async () => {
            if (!particlesDivRef.current) return;

            // const webGLCapable = await isWebGlCapable();
            // if (!webGLCapable) {
            //     console.error("WebGL is not supported or the device is mobile.");
            //     return;
            // }

            dispose = trigger(particlesDivRef.current, size, radius);
        };

        checkWebGLAndTrigger();

        return dispose;
    }, [particlesDivRef, radius, size]);
};
