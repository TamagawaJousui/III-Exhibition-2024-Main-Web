import { useEffect } from "react";
import * as THREE from "three";
import { SVGLoader, SVGResult } from "three/addons/loaders/SVGLoader.js";
import { match } from "ts-pattern";

import { ParticleData } from "@/models/heroarea";
import { isWebGlCapable } from "@/utils/responsive/checkUserEnv";

import { Environment } from "./internal/titleEnglishEnvironment";

import { breakpoint } from "@/styles";

export const useTitleEnglish = (titleEnglishDivRef: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
        let environment: Environment | null = null;

        const mediaQuery = window.matchMedia(`(min-width: ${breakpoint.lg}px)`);

        if (!mediaQuery.matches) {
            console.log("mediaQuery not passed");
            return;
        }
        if (!titleEnglishDivRef.current) {
            console.error("titleEnglishDivRef is not found");
            return;
        }
        if (!isWebGlCapable()) {
            console.error("WebGL is not supported or the device is mobile.");
            return;
        }

        // フォントとテクスチャのプリロード
        const preload = (particleOptions: ParticleData) => {
            const manager = new THREE.LoadingManager();

            let svg: SVGResult | null = null;
            let particle: THREE.Texture | null = null;
            manager.onLoad = () => {
                if (svg && particle) {
                    environment = new Environment(
                        svg,
                        particle,
                        titleEnglishDivRef,
                        particleOptions
                    );
                }
            };

            const svgUrl = "/heroarea/TitleEnglish.svg";
            new SVGLoader(manager).load(svgUrl, (data) => {
                svg = data;
            });

            const particleImgUrl = "/heroarea/particle_texture.png";
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

        (() => {
            const state = document.readyState;
            match(state)
                .with("complete", () => {
                    preload(particleOptions);
                })
                .with("loading", () => {
                    match(document.documentElement.scrollTop === 0)
                        .with(false, () => {
                            preload(particleOptions);
                        })
                        .otherwise(() => {
                            document.addEventListener("DOMContentLoaded", () =>
                                preload(particleOptions)
                            );
                        });
                })
                .otherwise(() => {
                    preload(particleOptions);
                });
        })();

        // クリーンアップ
        return () => {
            if (environment) {
                environment = null;
            }
            document.removeEventListener("DOMContentLoaded", () => preload(particleOptions));
        };
    }, [titleEnglishDivRef]);
};
