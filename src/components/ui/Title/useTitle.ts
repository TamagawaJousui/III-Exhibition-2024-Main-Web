import { useEffect } from "react";
import * as THREE from "three";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

import { ParticleData } from "@/models/global";

import { Environment } from "./internal/environment";

export const useTitle = (magicRef: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
        let environment: Environment | null = null;
        if (!magicRef.current) return;

        const particleOptions: ParticleData = {
            text: "FUTURE\nIS NOW",
            amount: 1500,
            particleSize: 1,
            particleColor: 0xffffff,
            textSize: 16,
            area: 250,
            ease: 0.05,
        };

        // フォントとテクスチャのプリロード
        const preload = () => {
            const manager = new THREE.LoadingManager();

            let typo: Font | null = null;
            let particle: THREE.Texture | null = null;
            manager.onLoad = () => {
                if (typo && particle) {
                    environment = new Environment(typo, particle, magicRef, particleOptions);
                }
            };

            const fontUrl = "/fonts/KleeOne-Regular.json";
            new FontLoader(manager).load(fontUrl, (font) => {
                typo = font;
            });

            const particleImgUrl =
                "https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png";
            new THREE.TextureLoader(manager).load(particleImgUrl, (texture) => {
                particle = texture;
            });
        };

        if (
            document.readyState === "complete" ||
            (document.readyState !== "loading" && !document.documentElement.scrollTop)
        ) {
            preload();
        } else {
            document.addEventListener("DOMContentLoaded", preload);
        }

        // クリーンアップ
        return () => {
            if (environment) {
                environment = null;
            }
            document.removeEventListener("DOMContentLoaded", preload);
        };
    }, [magicRef]);
};
