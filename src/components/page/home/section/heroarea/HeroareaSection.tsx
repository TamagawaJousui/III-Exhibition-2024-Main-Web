import { Canvas, extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useCallback, useMemo, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

import { wrapper } from "./HeroareaSection.css";

extend({ OrbitControls });

const CameraControls = () => {
    const {
        camera,
        gl: { domElement },
    } = useThree();

    const controlsRef = useRef<OrbitControls | null>(null);
    useFrame(() => controlsRef?.current?.update());

    return (
        <orbitControls
            ref={controlsRef}
            args={[camera, domElement]}
            autoRotate
            autoRotateSpeed={-0.2}
        />
    );
};

const Points = () => {
    const imgTex = useLoader(THREE.TextureLoader, "/circle.png");
    const bufferRef = useRef<THREE.BufferAttribute | null>(null);

    let t = 0;
    const f = 0.002;
    const a = 3;
    const graph = useCallback(
        (x: number, z: number) => Math.sin(f * (x ** 2 + z ** 2 + t)) * a,
        [t, f, a]
    );

    const count = 100;
    const sep = 3;
    const positions = useMemo(() => {
        const positions = [];

        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                const x = sep * (xi - count / 2);
                const z = sep * (zi - count / 2);
                const y = graph(x, z);
                positions.push(x, y, z);
            }
        }

        return new Float32Array(positions);
    }, [count, sep, graph]);

    useFrame(() => {
        t += 15;

        if (bufferRef.current) {
            const positions = bufferRef.current.array;

            if (positions) {
                let i = 0;
                for (let xi = 0; xi < count; xi++) {
                    for (let zi = 0; zi < count; zi++) {
                        const x = sep * (xi - count / 2);
                        const z = sep * (zi - count / 2);

                        positions[i + 1] = graph(x, z);
                        i += 3;
                    }
                }
                bufferRef.current.needsUpdate = true;
            }
        }
    });

    return (
        <points>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    ref={bufferRef}
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>

            <pointsMaterial
                attach="material"
                map={imgTex}
                color={0x00aaff}
                size={0.5}
                sizeAttenuation
                transparent={false}
                alphaTest={0.5}
                opacity={1.0}
            />
        </points>
    );
};

const AnimationCanvas = () => (
    <Canvas legacy camera={{ position: [100, 10, 0], fov: 75 }}>
        <Suspense fallback={null}>
            <Points />
        </Suspense>
        <CameraControls />
    </Canvas>
);

const HeroareaSection = () => (
    <div className={wrapper}>
        <Suspense fallback={<div>Loading...</div>}>
            <AnimationCanvas />
        </Suspense>
    </div>
);

export default HeroareaSection;
