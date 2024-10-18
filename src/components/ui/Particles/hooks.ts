import { useEffect } from "react";

import { isWebGlCapable } from "@/utils/responsive/checkWebGLCapability";

import { trigger } from "./internal/trigger";

export const useParticles = (
    particlesDivRef: React.RefObject<HTMLDivElement>,
    size: number,
    radius: number
) => {
    useEffect(() => {
        if (!particlesDivRef.current) {
            console.error("particlesDivRef is not found");
            return;
        }

        if (!isWebGlCapable()) {
            console.error("WebGL is not supported or the device is mobile.");
            return;
        }

        const dispose = trigger(particlesDivRef.current, size, radius);

        return dispose;
    }, [particlesDivRef, radius, size]);
};
