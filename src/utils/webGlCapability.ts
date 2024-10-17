import * as THREE from "three";
const isWebGLSupported = (() => {
    try {
        const canvas = document.createElement("canvas");
        return !!window.WebGLRenderingContext && !!canvas.getContext("webgl");
    } catch (e) {
        console.error(e);
        return false;
    }
})();

const isDataTextureSupported = (() => {
    try {
        const texture = new THREE.DataTexture(new Uint8Array(4), 1, 1, THREE.RGBAFormat);
        return texture instanceof THREE.DataTexture;
    } catch (e) {
        console.error(e);
        return false;
    }
})();

export const useWebGlCapability = () => isWebGLSupported && isDataTextureSupported;
