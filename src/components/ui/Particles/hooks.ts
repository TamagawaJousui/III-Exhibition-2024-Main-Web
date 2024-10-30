import { useEffect } from "react";

import { isWebGlCapable } from "@/utils/responsive/checkUserEnv";

import { trigger } from "./internal/trigger";

import { breakpoint } from "@/styles";

export const useParticles = (
    particlesDivRef: React.RefObject<HTMLDivElement>,
    size: number,
    radius: number
) => {
    useEffect(() => {
        const mediaQuery = window.matchMedia(`(min-width: ${breakpoint.lg}px)`);

        if (!mediaQuery.matches) {
            console.log("mediaQuery not passed");
            return;
        }

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
