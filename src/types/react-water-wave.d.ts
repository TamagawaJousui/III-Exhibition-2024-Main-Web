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
