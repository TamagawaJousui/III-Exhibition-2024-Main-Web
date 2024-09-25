// src/components/ui/TitleTest/TitleTest.tsx

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

import { styles } from "./Title.css";

// シェーダーコードを文字列として定義
const vertexShader = `
    attribute float size;
    attribute vec3 customColor;
    varying vec3 vColor;
    void main() {
        vColor = customColor;
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
        gl_PointSize = size * ( 300.0 / -mvPosition.z );
        gl_Position = projectionMatrix * mvPosition;
    }
`;

const fragmentShader = `
    uniform sampler2D pointTexture;
    varying vec3 vColor;
    void main() {
        gl_FragColor = vec4( vColor, 1.0 );
        gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
    }
`;

// データ型の定義（TypeScriptの場合）
interface ParticleData {
    text: string;
    amount: number;
    particleSize: number;
    particleColor: number;
    textSize: number;
    area: number;
    ease: number;
}

export const Title: React.FC = () => {
    const magicRef = useRef<HTMLDivElement>(null);
    const environmentRef = useRef<Environment | null>(null); // クラスインスタンスを保持

    useEffect(() => {
        if (!magicRef.current) return;

        // クラスベースのEnvironmentの定義
        class Environment {
            scene: THREE.Scene;
            camera: THREE.PerspectiveCamera;
            renderer: THREE.WebGLRenderer;
            particles: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;
            raycaster: THREE.Raycaster;
            mouse: THREE.Vector2;
            colorChange: THREE.Color;
            velocities: THREE.Vector3[];
            planeArea: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
            data: ParticleData;
            font: THREE.Font;
            geometryCopy: THREE.BufferGeometry | null = null;
            frustumHeight: number;
            frustumWidth: number;

            constructor(font: THREE.Font, particleImg: THREE.Texture, data: ParticleData) {
                this.data = data;
                this.font = font;

                // シーンの作成
                this.scene = new THREE.Scene();

                // カメラの設定
                const fov = 60;
                const aspect = magicRef.current!.clientWidth / magicRef.current!.clientHeight;
                const fovRad = (fov / 2) * (Math.PI / 180);
                const dist = magicRef.current!.clientHeight / 2 / Math.tan(fovRad);
                this.camera = new THREE.PerspectiveCamera(
                    fov,
                    magicRef.current!.clientWidth / magicRef.current!.clientHeight,
                    1,
                    dist * 2
                );
                this.camera.position.set(0, 0, dist);

                // フラスタムサイズの計算
                this.frustumHeight = 2 * dist * Math.tan(fovRad);
                this.frustumWidth = this.frustumHeight * aspect;

                // レンダラーの設定
                this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                this.renderer.setSize(
                    magicRef.current!.clientWidth,
                    magicRef.current!.clientHeight
                );
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                this.renderer.outputColorSpace = THREE.SRGBColorSpace;
                magicRef.current!.appendChild(this.renderer.domElement);

                // Raycasterとマウスベクトルの初期化
                this.raycaster = new THREE.Raycaster();
                this.mouse = new THREE.Vector2(-100, 100); // 初期位置

                // 色変更用カラー
                this.colorChange = new THREE.Color();

                // planeAreaの作成（隠し平面）
                const geometry = new THREE.PlaneGeometry(
                    this.visibleWidthAtZDepth(0, this.camera),
                    this.visibleHeightAtZDepth(0, this.camera)
                );
                const material = new THREE.MeshBasicMaterial({
                    color: 0x000000,
                    transparent: true,
                });
                this.planeArea = new THREE.Mesh(geometry, material);
                this.planeArea.visible = false;
                this.scene.add(this.planeArea);

                // パーティクルの作成
                this.createParticles(particleImg);

                // 初期速度の設定
                this.velocities = [];
                const pos = this.particles.geometry.attributes.position;
                for (let i = 0; i < pos.count; i++) {
                    this.velocities.push(
                        new THREE.Vector3(
                            (Math.random() - 0.5) * 0.5,
                            (Math.random() - 0.5) * 0.5,
                            0
                        )
                    );
                }

                // ジオメトリのコピーを作成
                this.geometryCopy = new THREE.BufferGeometry();
                this.geometryCopy.copy(this.particles.geometry);

                // アニメーションループの開始
                this.animate = this.animate.bind(this);
                this.renderer.setAnimationLoop(this.animate);
            }

            createParticles(particleImg: THREE.Texture) {
                const text = this.data.text;
                const fontSize = this.data.textSize;
                const shapes = this.font.generateShapes(text, fontSize);

                // ホールシェイプの処理
                const allShapes: THREE.Shape[] = [];
                shapes.forEach((shape) => {
                    allShapes.push(shape);
                    if (shape.holes && shape.holes.length > 0) {
                        shape.holes.forEach((hole) => {
                            allShapes.push(hole);
                        });
                    }
                });

                // パーティクルデータの準備
                const points: THREE.Vector3[] = [];
                const colors: number[] = [];
                const sizes: number[] = [];

                const particleCountPerShape = this.data.amount; // シェイプごとのパーティクル数

                allShapes.forEach((shape) => {
                    const sampledPoints = shape.getSpacedPoints(particleCountPerShape);
                    sampledPoints.forEach((point) => {
                        points.push(new THREE.Vector3(point.x, point.y, 0));
                        colors.push(0, 0, 0); // 白色
                        sizes.push(this.data.particleSize); // パーティクルサイズを設定
                    });
                });

                const geoParticles = new THREE.BufferGeometry().setFromPoints(points);
                geoParticles.setAttribute(
                    "customColor",
                    new THREE.Float32BufferAttribute(colors, 3)
                );
                geoParticles.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));

                const material = new THREE.ShaderMaterial({
                    uniforms: {
                        color: { value: new THREE.Color(0xffffff) },
                        pointTexture: { value: particleImg },
                    },
                    vertexShader: vertexShader,
                    fragmentShader: fragmentShader,
                    blending: THREE.NormalBlending,
                    depthTest: true,
                    transparent: true,
                });

                this.particles = new THREE.Points(geoParticles, material);

                // シェイプのバウンディングボックスを計算
                const geometry = new THREE.ShapeGeometry(shapes);
                geometry.computeBoundingBox();
                const xMin = geometry.boundingBox!.min.x;
                const yMin = geometry.boundingBox!.min.y;
                const yMax = geometry.boundingBox!.max.y;
                const yMid = -0.5 * (yMax - yMin);

                // Recompute offset based on new frustumWidth
                const offsetX = -this.frustumWidth * 0.25; // 同じ割合でシフト
                const offsetY = 0; // 必要に応じて調整

                // ジオメトリを左寄せにシフト
                geometry.translate(-xMin + offsetX, yMid + offsetY, 0);

                // パーティクルジオメトリに移動を適用
                geoParticles.translate(-xMin + offsetX, yMid + offsetY, 0);

                // オブジェクトの位置をリセット（必要に応じて）
                this.particles.position.set(0, 0, 0);

                // シーンに追加
                this.scene.add(this.particles);
            }

            animate() {
                // パーティクルの位置を更新
                this.renderParticles();

                // レンダリング
                this.renderer.render(this.scene, this.camera);
            }

            renderParticles() {
                this.raycaster.setFromCamera(this.mouse, this.camera);

                const intersects = this.raycaster.intersectObject(this.planeArea!);
                // リロード時の応急処置
                if (this.mouse.x === -100 && this.mouse.y === 100) {
                    intersects.length = 0;
                }

                if (this.particles && this.geometryCopy) {
                    const pos = this.particles.geometry.attributes.position;
                    const copy = this.geometryCopy.attributes.position;
                    const colors = this.particles.geometry.attributes.customColor;
                    const size = this.particles.geometry.attributes.size;

                    if (intersects.length > 0) {
                        const mx = intersects[0].point.x;
                        const my = intersects[0].point.y;

                        for (let i = 0, l = pos.count; i < l; i++) {
                            const initX = copy.getX(i);
                            const initY = copy.getY(i);
                            const initZ = copy.getZ(i);

                            let px = pos.getX(i);
                            let py = pos.getY(i);
                            let pz = pos.getZ(i);

                            // 色を変更
                            this.colorChange.setHSL(0.1, 0.8, 0.5); // 前の文字色
                            colors.setXYZ(
                                i,
                                this.colorChange.r,
                                this.colorChange.g,
                                this.colorChange.b
                            );
                            colors.needsUpdate = true;

                            // サイズをリセット
                            size.array[i] = this.data.particleSize;
                            size.needsUpdate = true;

                            const dx = mx - px;
                            const dy = my - py;

                            // const mouseDistance = this.distance(mx, my, px, py);
                            const d = dx * dx + dy * dy;
                            // const f = -this.data.area / d;
                            const f = Math.abs(d) < 20 ? -this.data.area / 20 : -this.data.area / d;

                            if (i % 5 === 0) {
                                const t = Math.atan2(dy, dx);
                                px -= 0.03 * Math.cos(t);
                                py -= 0.03 * Math.sin(t);

                                this.colorChange.setHSL(0, 0, 0.9); // 後ろの文字色
                                colors.setXYZ(
                                    i,
                                    this.colorChange.r,
                                    this.colorChange.g,
                                    this.colorChange.b
                                );
                                colors.needsUpdate = true;

                                size.array[i] = this.data.particleSize / 1.5;
                                size.needsUpdate = true;
                            } else {
                                const t = Math.atan2(dy, dx);
                                px += f * Math.cos(t);
                                py += f * Math.sin(t);
                                pz += 0.001;

                                pos.setXYZ(i, px, py, pz);
                                pos.needsUpdate = true;

                                size.array[i] = this.data.particleSize * 1.5;
                                size.needsUpdate = true;
                            }

                            if (
                                px > initX + 10 ||
                                px < initX - 10 ||
                                py > initY + 10 ||
                                py < initY - 10
                            ) {
                                this.colorChange.setHSL(0, 0, 0.9); // カーソル付近の文字色
                                colors.setXYZ(
                                    i,
                                    this.colorChange.r,
                                    this.colorChange.g,
                                    this.colorChange.b
                                );
                                colors.needsUpdate = true;

                                size.array[i] = this.data.particleSize / 1.8;
                                size.needsUpdate = true;
                            }

                            // イージング
                            px += (initX - px) * this.data.ease;
                            py += (initY - py) * this.data.ease;
                            pz += (initZ - pz) * this.data.ease;

                            pos.setXYZ(i, px, py, pz);
                            pos.needsUpdate = true;
                        }
                    } else {
                        // マウスが平面に触れていない場合
                        for (let i = 0, l = pos.count; i < l; i++) {
                            const initX = copy.getX(i);
                            const initY = copy.getY(i);
                            const initZ = copy.getZ(i);

                            let px = pos.getX(i);
                            let py = pos.getY(i);
                            let pz = pos.getZ(i);

                            if (i % 5 !== 0) {
                                if (this.distance(initX, initY, px, py) < 10) {
                                    pz += 0.001;

                                    this.colorChange.setHSL(0.1, 0.8, 0.5); // 前の文字色
                                    colors.setXYZ(
                                        i,
                                        this.colorChange.r,
                                        this.colorChange.g,
                                        this.colorChange.b
                                    );
                                    colors.needsUpdate = true;

                                    size.array[i] = this.data.particleSize * 1.5;
                                    size.needsUpdate = true;
                                }
                            }

                            px += (initX - px) * this.data.ease;
                            py += (initY - py) * this.data.ease;
                            pz += (initZ - pz) * this.data.ease;

                            pos.setXYZ(i, px, py, pz);
                            pos.needsUpdate = true;
                        }
                    }
                }
            }

            distance(x1: number, y1: number, x2: number, y2: number): number {
                return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
            }

            visibleHeightAtZDepth(depth: number, camera: THREE.PerspectiveCamera): number {
                const cameraOffset = camera.position.z;
                if (depth < cameraOffset) depth -= cameraOffset;
                else depth += cameraOffset;

                const vFOV = (camera.fov * Math.PI) / 180;

                return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
            }

            visibleWidthAtZDepth(depth: number, camera: THREE.PerspectiveCamera): number {
                const height = this.visibleHeightAtZDepth(depth, camera);
                return height * camera.aspect;
            }

            onWindowResize() {
                if (!magicRef.current) return;

                const aspect = magicRef.current.clientWidth / magicRef.current.clientHeight;
                this.camera.aspect = aspect;
                this.camera.updateProjectionMatrix();

                // フラスタムサイズの再計算
                const fovRad = (this.camera.fov / 2) * (Math.PI / 180);
                const dist = this.camera.position.z;
                this.frustumHeight = 2 * dist * Math.tan(fovRad);
                this.frustumWidth = this.frustumHeight * aspect;

                // レンダラーのサイズを更新
                this.renderer.setSize(magicRef.current.clientWidth, magicRef.current.clientHeight);

                // パーティクルのオフセットを再計算
                if (this.particles && this.geometryCopy) {
                    const text = this.data.text;
                    const fontSize = this.data.textSize;
                    const shapes = this.font.generateShapes(text, fontSize);

                    // Reset geometry to original
                    this.particles.geometry.dispose();
                    this.particles.geometry = this.geometryCopy.clone();

                    // Recompute the translation
                    const geometry = new THREE.ShapeGeometry(shapes);
                    geometry.computeBoundingBox();
                    const xMin = geometry.boundingBox!.min.x;
                    const yMin = geometry.boundingBox!.min.y;
                    const yMax = geometry.boundingBox!.max.y;
                    const yMid = -0.5 * (yMax - yMin);

                    // Recompute offset based on new frustumWidth
                    const offsetX = -this.frustumWidth * 0.25; // 同じ割合でシフト
                    const offsetY = 0; // 必要に応じて調整

                    // Apply translation
                    (this.particles.geometry as THREE.BufferGeometry).translate(
                        -xMin + offsetX,
                        yMid + offsetY,
                        0
                    );

                    this.geometryCopy = new THREE.BufferGeometry();
                    this.geometryCopy.copy(this.particles.geometry);
                }
            }

            bindEvents() {
                const handleMouseMove = (event: MouseEvent) => {
                    this.updateMousePosition(event);
                };

                magicRef.current!.addEventListener("mousemove", handleMouseMove);

                window.addEventListener("resize", this.onWindowResize.bind(this));
            }

            updateMousePosition(event: MouseEvent) {
                if (!magicRef.current) return;

                const rect = magicRef.current.getBoundingClientRect();

                // マウスの位置をキャンバス要素内の相対座標に変換
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                // キャンバス内の相対位置を正規化された座標（-1から1）に変換
                this.mouse.x = (x / rect.width) * 2 - 1;
                this.mouse.y = -(y / rect.height) * 2 + 1;
            }

            dispose() {
                // イベントリスナーの削除
                magicRef.current?.removeEventListener("mousemove", () => {});
                window.removeEventListener("resize", this.onWindowResize.bind(this));

                // レンダラーのDOM要素を削除
                magicRef.current?.removeChild(this.renderer.domElement);
            }
        }

        // フォントとテクスチャのプリロード
        const preload = () => {
            const manager = new THREE.LoadingManager();
            let typo: THREE.Font | null = null;
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
                textSize: 40,
                area: 1000,
                ease: 0.05,
            };

            manager.onLoad = () => {
                if (typo && particle) {
                    environmentRef.current = new Environment(typo, particle, data);
                    environmentRef.current.bindEvents();
                }
            };
        };

        if (
            document.readyState === "complete" ||
            (document.readyState !== "loading" && !document.documentElement.doScroll)
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
