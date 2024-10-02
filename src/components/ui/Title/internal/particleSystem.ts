import * as THREE from "three";
import { Font } from "three/examples/jsm/Addons.js";

import { ParticleData } from "@/models/global";

import { vertexShader, fragmentShader } from "./shader";

export class particleSystem {
    scene: THREE.Scene;
    font: Font;
    particleImg: THREE.Texture;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    raycaster: THREE.Raycaster;
    mouse: THREE.Vector2;
    colorChange: THREE.Color;
    buttom: boolean;
    particleOptions: ParticleData;
    planeArea: THREE.Mesh = new THREE.Mesh();
    currenPosition: THREE.Vector3 = new THREE.Vector3();
    particles: THREE.Points = new THREE.Points();
    geometryCopy: THREE.BufferGeometry = new THREE.BufferGeometry();
    constructor(
        scene: THREE.Scene,
        font: Font,
        particleImg: THREE.Texture,
        camera: THREE.PerspectiveCamera,
        renderer: THREE.WebGLRenderer,
        particleOptions: ParticleData
    ) {
        this.scene = scene;
        this.font = font;
        this.particleImg = particleImg;
        this.camera = camera;
        this.renderer = renderer;

        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2(-200, 200);

        this.colorChange = new THREE.Color();

        this.buttom = false;

        this.particleOptions = particleOptions;

        this.setup();
        this.bindEvents();
    }

    setup() {
        const geometry = new THREE.PlaneGeometry(
            this.visibleWidthAtZDepth(100, this.camera),
            this.visibleHeightAtZDepth(100, this.camera)
        );
        const material = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            transparent: true,
        });
        this.planeArea = new THREE.Mesh(geometry, material);
        this.planeArea.visible = false;
        this.createText();
    }

    bindEvents() {
        // disable mouse click event
        // document.addEventListener("mousedown", this.onMouseDown.bind(this));
        // document.addEventListener("mouseup", this.onMouseUp.bind(this));
        document.addEventListener("mousemove", this.onMouseMove.bind(this));
    }

    // disable mouse down event
    // onMouseDown(event: MouseEvent) {
    //     this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    //     this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    //     const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
    //     vector.unproject(this.camera);
    //     const dir = vector.sub(this.camera.position).normalize();
    //     const distance = -this.camera.position.z / dir.z;
    //     this.currenPosition = this.camera.position.clone().add(dir.multiplyScalar(distance));

    //     // const pos = this.particles.geometry.attributes.position;
    //     this.buttom = true;
    //     this.particleOptions.ease = 0.01;
    // }

    // disable mouse click event
    // onMouseUp() {
    //     this.buttom = false;
    //     this.particleOptions.ease = 0.05;
    // }

    onMouseMove(event: MouseEvent) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    render(/* level */) {
        const time = ((0.001 * performance.now()) % 12) / 12;
        const zigzagTime = (1 + Math.sin(time * 2 * Math.PI)) / 6;

        this.raycaster.setFromCamera(this.mouse, this.camera);

        const intersects = this.raycaster.intersectObject(this.planeArea);

        if (intersects.length > 0) {
            const pos = this.particles.geometry.attributes.position;
            const copy = this.geometryCopy.attributes.position;
            const coulors = this.particles.geometry.attributes.customColor;
            const size = this.particles.geometry.attributes.size;

            const mx = intersects[0].point.x;
            const my = intersects[0].point.y;
            // const mz = intersects[0].point.z;

            for (let i = 0, l = pos.count; i < l; i++) {
                const initX = copy.getX(i);
                const initY = copy.getY(i);
                const initZ = copy.getZ(i);

                let px = pos.getX(i);
                let py = pos.getY(i);
                let pz = pos.getZ(i);

                this.colorChange.setHSL(0.5, 1, 1);
                coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
                coulors.needsUpdate = true;

                size.array[i] = this.particleOptions.particleSize;
                size.needsUpdate = true;

                let dx = mx - px;
                let dy = my - py;
                // const dz = mz - pz;

                const mouseDistance = this.distance(mx, my, px, py);
                const d = (dx = mx - px) * dx + (dy = my - py) * dy;
                const f = -this.particleOptions.area / d;

                if (this.buttom) {
                    const t = Math.atan2(dy, dx);
                    px -= f * Math.cos(t);
                    py -= f * Math.sin(t);

                    this.colorChange.setHSL(0.5 + zigzagTime, 1.0, 0.5);
                    coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
                    coulors.needsUpdate = true;

                    if (px > initX + 70 || px < initX - 70 || py > initY + 70 || py < initY - 70) {
                        this.colorChange.setHSL(0.15, 1.0, 0.5);
                        coulors.setXYZ(
                            i,
                            this.colorChange.r,
                            this.colorChange.g,
                            this.colorChange.b
                        );
                        coulors.needsUpdate = true;
                    }
                } else {
                    if (mouseDistance < this.particleOptions.area) {
                        if (i % 5 == 0) {
                            const t = Math.atan2(dy, dx);
                            px -= 0.03 * Math.cos(t);
                            py -= 0.03 * Math.sin(t);

                            this.colorChange.setHSL(0.15, 1.0, 0.5);
                            coulors.setXYZ(
                                i,
                                this.colorChange.r,
                                this.colorChange.g,
                                this.colorChange.b
                            );
                            coulors.needsUpdate = true;

                            size.array[i] = this.particleOptions.particleSize / 1.2;
                            size.needsUpdate = true;
                        } else {
                            const t = Math.atan2(dy, dx);
                            px += f * Math.cos(t);
                            py += f * Math.sin(t);

                            pos.setXYZ(i, px, py, pz);
                            pos.needsUpdate = true;

                            size.array[i] = this.particleOptions.particleSize * 1.3;
                            size.needsUpdate = true;
                        }

                        if (
                            px > initX + 10 ||
                            px < initX - 10 ||
                            py > initY + 10 ||
                            py < initY - 10
                        ) {
                            this.colorChange.setHSL(0.15, 1.0, 0.5);
                            coulors.setXYZ(
                                i,
                                this.colorChange.r,
                                this.colorChange.g,
                                this.colorChange.b
                            );
                            coulors.needsUpdate = true;

                            size.array[i] = this.particleOptions.particleSize / 1.8;
                            size.needsUpdate = true;
                        }
                    }
                }

                px += (initX - px) * this.particleOptions.ease;
                py += (initY - py) * this.particleOptions.ease;
                pz += (initZ - pz) * this.particleOptions.ease;

                pos.setXYZ(i, px, py, pz);
                pos.needsUpdate = true;
            }
        }
    }

    createText() {
        const thePoints: THREE.Vector3[] = [];

        const shapes = this.font.generateShapes(
            this.particleOptions.text,
            this.particleOptions.textSize
        );
        const geometry = new THREE.ShapeGeometry(shapes);
        geometry.computeBoundingBox();

        if (!geometry.boundingBox) {
            throw new Error("Geometry bounding box is null");
        }
        const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
        const yMid = (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2.85;

        geometry.center();

        const holeShapes = [];

        for (let q = 0; q < shapes.length; q++) {
            const shape = shapes[q];

            if (shape.holes && shape.holes.length > 0) {
                for (let j = 0; j < shape.holes.length; j++) {
                    const hole = shape.holes[j];
                    holeShapes.push(hole);
                }
            }
        }
        shapes.push(...(holeShapes as THREE.Shape[]));

        const colors: number[] = [];
        const sizes: number[] = [];

        for (let x = 0; x < shapes.length; x++) {
            const shape = shapes[x];

            const amountPoints =
                shape.type == "Path"
                    ? this.particleOptions.amount / 2
                    : this.particleOptions.amount;

            const points = shape.getSpacedPoints(amountPoints);

            points.forEach((element /*, z */) => {
                const a = new THREE.Vector3(element.x, element.y, 0);
                thePoints.push(a);
                colors.push(this.colorChange.r, this.colorChange.g, this.colorChange.b);
                sizes.push(1);
            });
        }

        const geoParticles = new THREE.BufferGeometry().setFromPoints(thePoints);
        geoParticles.translate(xMid, yMid, 0);

        geoParticles.setAttribute("customColor", new THREE.Float32BufferAttribute(colors, 3));
        geoParticles.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Color(0xffffff) },
                pointTexture: { value: this.particleImg },
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,

            blending: THREE.AdditiveBlending,
            depthTest: false,
            transparent: true,
        });

        this.particles = new THREE.Points(geoParticles, material);
        this.scene.add(this.particles);

        this.geometryCopy = new THREE.BufferGeometry();
        this.geometryCopy.copy(this.particles.geometry);
    }

    visibleHeightAtZDepth(depth: number, camera: THREE.PerspectiveCamera) {
        const cameraOffset = camera.position.z;
        if (depth < cameraOffset) depth -= cameraOffset;
        else depth += cameraOffset;

        const vFOV = (camera.fov * Math.PI) / 180;

        return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
    }

    visibleWidthAtZDepth(depth: number, camera: THREE.PerspectiveCamera) {
        const height = this.visibleHeightAtZDepth(depth, camera);
        return height * camera.aspect;
    }

    distance(x1: number, y1: number, x2: number, y2: number) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }
}
