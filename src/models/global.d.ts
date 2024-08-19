declare type RecursiveLeafKeys<T, Prefix = ""> = {
    [K in keyof T]: T[K] extends Record<string, unknown>
        ? `${Prefix}${K}` extends keyof T[K]
            ? never
            : RecursiveLeafKeys<T[K], `${Prefix}${K}.`>
        : `${Prefix}${K}`;
}[keyof T];

// types/react-water-wave.d.ts
declare module "react-water-wave" {
    import * as React from "react";

    interface WaterWaveProps {
        imageUrl?: string;
        dropRadius?: number;
        perturbance?: number;
        resolution?: number;
        children?: () => React.ReactNode;
    }

    const WaterWave: React.FC<WaterWaveProps>;

    export default WaterWave;
}
