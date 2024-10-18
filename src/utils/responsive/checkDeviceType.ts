"use client";

import { UAParser } from "ua-parser-js";

export const isMobileDevice = () => {
    if (typeof window === "undefined") {
        throw new Error(
            "[Client method] This function should be called in a client-side environment"
        );
    }

    const ua = navigator.userAgent;
    const device = new UAParser(ua).getDevice();

    return device.type === "mobile";
};
