"use client";

import { isWebglCompatible } from "@/utils/responsive/checkWebGLCompatibility";

import { isMobileDevice } from "./checkDeviceType";

export const isWebGlCapable = () => {
    const isWebGlSupported = isWebglCompatible();
    const isMobile = isMobileDevice();
    return !isMobile && isWebGlSupported;
};
