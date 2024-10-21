"use client";

import * as THREE from "three";
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

const isWebGLSupported = (() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
        return false;
    }
    try {
        const canvas = document.createElement("canvas");
        return !!window.WebGLRenderingContext && !!canvas.getContext("webgl");
    } catch (e) {
        console.error(e);
        return false;
    }
})();

const isDataTextureSupported = (() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
        return false;
    }
    try {
        const texture = new THREE.DataTexture(new Uint8Array(4), 1, 1, THREE.RGBAFormat);
        return texture instanceof THREE.DataTexture;
    } catch (e) {
        console.error(e);
        return false;
    }
})();

export const isWebglCompatible = () => isWebGLSupported && isDataTextureSupported;

export const isWebGlCapable = () => {
    if (typeof window !== "undefined") {
        const isMobile = isMobileDevice();
        const isWebGlSupported = isWebglCompatible();
        return !isMobile && isWebGlSupported;
    }
    return false;
};
