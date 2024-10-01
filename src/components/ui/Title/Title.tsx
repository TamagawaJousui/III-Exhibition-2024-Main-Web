// src/components/ui/TitleTest/TitleTest.tsx

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

import { Environment, ParticleData } from "./environment";

import { styles } from "./Title.css";

export const Title: React.FC = () => {
    const magicRef = useRef<HTMLDivElement>(null);
    const environmentRef = useRef<Environment | null>(null); // クラスインスタンスを保持

    useEffect(() => {
        if (!magicRef.current) return;

        // フォントとテクスチャのプリロード
        const preload = () => {
            const manager = new THREE.LoadingManager();
            let typo: Font | null = null;
            const loader = new FontLoader(manager);
            const fontUrl = "/fonts/KleeOne-Regular.json";
            loader.load(fontUrl, (font) => {
                typo = font;
            });

            const particleImgUrl =
                "https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png";
            const particle = new THREE.TextureLoader(manager).load(particleImgUrl);

            // データオブジェクトの定義
            const data: ParticleData = {
                text: "付いて離れて",
                amount: 10000,
                particleSize: 1,
                textSize: magicRef.current!.clientWidth / 13,
                area: 1000,
                ease: 0.05,
            };

            manager.onLoad = () => {
                if (typo && particle) {
                    environmentRef.current = new Environment(typo, particle, data, magicRef);
                    environmentRef.current.bindEvents();
                }
            };
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
            if (environmentRef.current) {
                environmentRef.current.dispose();
                environmentRef.current = null;
            }
            document.removeEventListener("DOMContentLoaded", preload);
        };
    }, []);

    return (
        <>
            <div style={styles.magic} ref={magicRef} id="magic"></div>
        </>
    );
};
