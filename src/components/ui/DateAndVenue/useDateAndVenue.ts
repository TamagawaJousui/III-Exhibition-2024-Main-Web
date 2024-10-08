import { useEffect } from "react";
import * as THREE from "three";
import { SVGResult, SVGLoader } from "three/addons/loaders/SVGLoader.js";

import { Environment } from "./internal/environment";

export const useDateAndVenue = (titleDivRef: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
        let environment: Environment | null = null;
        if (!titleDivRef.current) return;

        // フォントとテクスチャのプリロード
        const preload = (particleOptions: ParticleData) => {
            const manager = new THREE.LoadingManager();

            let svg: SVGResult | null = null;
            let particle: THREE.Texture | null = null;
            manager.onLoad = () => {
                if (svg && particle) {
                    console.log(svg);
                    environment = new Environment(svg, particle, titleDivRef, particleOptions);
                }
            };

            const svgUrl = "/DateAndVenue.svg";
            new SVGLoader(manager).load(svgUrl, (data) => {
                svg = data;
            });

            const particleImgUrl =
                "https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png";
            new THREE.TextureLoader(manager).load(particleImgUrl, (texture) => {
                particle = texture;
            });
        };

        const getTextSize = () => {
            if (window.innerWidth > 1024) {
                return 12;
            } else if (window.innerWidth > 768) {
                return 6;
            } else if (window.innerWidth > 500) {
                return 4;
            } else {
                return 4;
            }
        };

        const particleOptions: ParticleData = {
            text: "付いて離れて",
            planeParticleAmount: 300,
            outlineParticleAmount: 20,
            particleSize: 1,
            particleColor: 0xffffff,
            textSize: getTextSize(),
            area: 100,
            ease: 0.05,
        };

        if (
            document.readyState === "complete" ||
            (document.readyState !== "loading" && !document.documentElement.scrollTop)
        ) {
            preload(particleOptions);
        } else {
            document.addEventListener("DOMContentLoaded", () => preload(particleOptions));
        }

        // クリーンアップ
        return () => {
            if (environment) {
                environment = null;
            }
            document.removeEventListener("DOMContentLoaded", () => preload(particleOptions));
        };
    }, [titleDivRef]);
};
