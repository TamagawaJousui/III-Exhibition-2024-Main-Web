"use client";

import { isWebglCompatible } from "@/utils/responsive/checkWebGLCompatibility";

import { isMobileDevice } from "./checkDeviceType";

export const isWebGlCapable = () => {
    if (typeof window !== "undefined") {
        const isMobile = isMobileDevice();
        const isWebGlSupported = isWebglCompatible();
        return !isMobile && isWebGlSupported;
    }
    return false;
};
