import dynamic from "next/dynamic";
import { FC } from "react";

// SSRを無効にしてreact-water-waveを動的にインポート
const WaterWave = dynamic(() => import("react-water-wave"), { ssr: false });

export const HeroareaSection: FC = () => (
    <WaterWave imageUrl="/bg.jpg">
        {() => (
            <div style={{ width: "100%", height: "100vh" }}>
                {/* children components */}
                <h1 style={{ color: "white" }}>Welcome to My Website</h1>
            </div>
        )}
    </WaterWave>
);
