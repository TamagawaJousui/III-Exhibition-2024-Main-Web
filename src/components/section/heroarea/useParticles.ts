import { BloomEffect, EffectComposer, EffectPass, RenderPass } from "postprocessing";
import { useEffect } from "react";
import * as THREE from "three";

import { AfterimagePass } from "./internal/AfterimagePass.js";
import { initStats } from "./internal/controls.js";
import { initSpherePoints } from "./internal/geometry.js";
import { initGPUComputationRenderer } from "./internal/gpgpu.js";
import { initGUI } from "./internal/lilGUI.js";
import { initParticle } from "./internal/particle.js";
import { initScene } from "./internal/scene.js";
import { generateTransformationMatrices } from "./internal/transformationMatrix.js";

export const useParticles = (
    canvasRef: React.RefObject<HTMLDivElement>,
    size: number,
    radius: number
) => {
    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;

        const { scene, camera, renderer } = initScene(canvas);

        const params = initGUI(renderer);

        // const controls = initControls(camera, renderer);
        const stats = initStats();
        // initAxes(scene);
        // initRuler(scene);
        // initCaption(scene);

        // 设置纹理大小
        // 初始化球体上的点
        initSpherePoints(size * size, radius);

        const { gpuCompute, colorVariable, positionVariable, backgroundPositionVariable } =
            initGPUComputationRenderer(size, renderer);

        const points = initParticle(size);
        scene.add(points);

        const composer = new EffectComposer(renderer);
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);
        const afterImagePass = new AfterimagePass(params.afterImage.damp);
        composer.addPass(afterImagePass);
        const bloomPass = new BloomEffect(params.bloom);
        composer.addPass(new EffectPass(camera, bloomPass));

        const startTime = performance.now();
        const targetFPS = 70; // 目标帧率
        const frameDuration = 1000 / targetFPS; // 每帧的时间（毫秒）
        let lastFrameTime = performance.now();

        const animate = () => {
            if (!params.isPaused) {
                const currentTime = performance.now();
                const elapsedTime = currentTime - startTime;
                // 计算从上一帧到现在的时间差（毫秒）
                const deltaTime = currentTime - lastFrameTime;
                if (deltaTime >= frameDuration) {
                    lastFrameTime = currentTime;

                    params.noiseMatrix.translationValues.y = (elapsedTime / 1000) * 0.08;

                    afterImagePass.uniforms["damp"].value = params.afterImage.damp;
                    afterImagePass.enabled = params.afterImage.enabled;

                    bloomPass.luminanceMaterial.threshold = params.bloom.luminanceThreshold;
                    bloomPass.luminanceMaterial.smoothing = params.bloom.luminanceSmoothing;
                    bloomPass.intensity = params.bloom.intensity;
                    bloomPass.mipmapBlurPass.radius = params.bloom.radius;
                    bloomPass.blendMode.opacity.value = params.bloom.opacity;

                    const {
                        noiseTransformationMatrix,
                        positionTransformationMatrix,
                        backgroundTransformationMatrix,
                    } = generateTransformationMatrices(
                        params.backgroundMatrix,
                        params.noiseMatrix,
                        params.positionMatrix,
                        deltaTime
                    );
                    const rep = new THREE.Vector3(
                        params.noiseParams.periodX,
                        params.noiseParams.periodY,
                        params.noiseParams.periodZ
                    );

                    // 设置 Uniforms
                    colorVariable.material.uniforms.colors = {
                        value: Object.values(params.colorParams).map(
                            (color) => new THREE.Vector3(color.r, color.g, color.b)
                        ),
                    };
                    colorVariable.material.uniforms.radius = { value: radius };
                    colorVariable.material.uniforms.colorPattern = {
                        value: params.particleParams.colorPattern === "area" ? 0 : 1,
                    };
                    positionVariable.material.uniforms.noiseTransformMatrix = {
                        value: noiseTransformationMatrix,
                    };
                    positionVariable.material.uniforms.positionTransformMatrix = {
                        value: positionTransformationMatrix,
                    };
                    positionVariable.material.uniforms.rep = { value: rep };
                    positionVariable.material.uniforms.seed = {
                        value: params.noiseParams.seed,
                    };
                    backgroundPositionVariable.material.uniforms.backgroundTransformMatrix = {
                        value: backgroundTransformationMatrix,
                    };

                    // 计算下一帧的位置
                    gpuCompute.compute();

                    // 获取计算后的颜色
                    const colorTexture = gpuCompute.getCurrentRenderTarget(colorVariable).texture;

                    // 获取计算后的纹理
                    const posTexture = gpuCompute.getCurrentRenderTarget(positionVariable).texture;

                    // 获取背景点云的位置纹理
                    // const backgroundPositionTexture = gpuCompute.getCurrentRenderTarget(
                    //     backgroundPositionVariable
                    // ).texture;

                    // 更新材质的 Uniform
                    points.material.uniforms.positionTexture.value = posTexture;
                    points.material.uniforms.colorTexture.value = colorTexture;
                    points.material.uniforms.pointSize.value = params.particleParams.pointSize;
                    points.material.uniforms.transparent.value = params.particleParams.transparent;
                    points.material.uniforms.useColor.value = params.particleParams.useColor;

                    // 更新 OrbitControls
                    // controls.update();
                    stats.update();
                    composer.render();
                }
            }
        };

        renderer.setAnimationLoop(animate);

        return () => {
            renderer.setAnimationLoop(null); // 停止动画循环
            canvas.removeChild(renderer.domElement);
        };
    }, [canvasRef, radius, size]);
};
