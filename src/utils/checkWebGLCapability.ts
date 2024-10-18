import { isMobileDevice } from "@/utils/responsive";
import { isWebglCompatible } from "@/utils/webglCompatibility";

export const isWebGlCapable = async () => {
    const isWebGlSupported = isWebglCompatible();
    const isMobile = await isMobileDevice();
    return !isMobile && isWebGlSupported;
};
