import * as THREE from "three";
import { Font, SVGResult } from "three/examples/jsm/Addons.js";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";

import { vertexShader, fragmentShader } from "./shader";

export class particleSystem {
    scene: THREE.Scene;
    svg: SVGResult;
    font: Font;
    particleImg: THREE.Texture;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    raycaster: THREE.Raycaster;
    mouse: THREE.Vector2;
    colorChange: THREE.Color;
    mouseDown: boolean;
    particleOptions: ParticleData;
    container: HTMLElement;
    planeArea: THREE.Mesh = new THREE.Mesh();
    currenPosition: THREE.Vector3 = new THREE.Vector3();
    particles: THREE.Points = new THREE.Points();
    outlineParticles: THREE.Group<THREE.Object3DEventMap> = new THREE.Group();
    planeParticles: THREE.Points = new THREE.Points();
    planeParticlesGeometryCopy: THREE.BufferGeometry = new THREE.BufferGeometry();
    // outlineParticlesGeometryCopy: THREE.BufferGeometry = new THREE.BufferGeometry();
    constructor(
        scene: THREE.Scene,
        svg: SVGResult,
        font: Font,
        particleImg: THREE.Texture,
        camera: THREE.PerspectiveCamera,
        renderer: THREE.WebGLRenderer,
        particleOptions: ParticleData,
        container: HTMLElement
    ) {
        this.scene = scene;
        this.svg = svg;
        this.font = font;
        this.particleImg = particleImg;
        this.camera = camera;
        this.renderer = renderer;

        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2(-1, -1);

        this.colorChange = new THREE.Color();

        this.mouseDown = false;

        this.particleOptions = particleOptions;
        this.container = container;

        this.setup();
        this.bindEvents();
    }

    setup() {
        const geometry = new THREE.PlaneGeometry(
            this.visibleWidthAtZDepth(100, this.camera),
            this.visibleHeightAtZDepth(100, this.camera)
        );
        const material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
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
    //     this.mouseDown = true;
    //     this.particleOptions.ease = 0.01;
    // }

    // disable mouse click event
    // onMouseUp() {
    //     this.mouseDown = false;
    //     this.particleOptions.ease = 0.05;
    // }

    onMouseMove(event: MouseEvent) {
        const rect = this.renderer.domElement.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    }

    render(/* level */) {
        // disable zigzag
        // const time = ((0.001 * performance.now()) % 12) / 12;
        // const zigzagTime = (1 + Math.sin(time * 2 * Math.PI)) / 6;

        this.raycaster.setFromCamera(this.mouse, this.camera);

        const intersects = this.raycaster.intersectObject(this.planeArea);

        if (intersects.length > 0) {
            // plane particles
            {
                const pos = this.planeParticles.geometry.attributes.position;
                const copy = this.planeParticlesGeometryCopy.attributes.position;
                const coulors = this.planeParticles.geometry.attributes.customColor;
                const size = this.planeParticles.geometry.attributes.size;

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

                    this.colorChange.setRGB(1, 1, 1);
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

                    if (this.mouseDown) {
                        // disable mouse click event
                        // const t = Math.atan2(dy, dx);
                        // px -= f * Math.cos(t);
                        // py -= f * Math.sin(t);
                        // this.colorChange.setHSL(0.5 + zigzagTime, 1.0, 0.5);
                        // coulors.setXYZ(
                        //     i,
                        //     this.colorChange.r,
                        //     this.colorChange.g,
                        //     this.colorChange.b
                        // );
                        // coulors.needsUpdate = true;
                        // if (
                        //     px > initX + 70 ||
                        //     px < initX - 70 ||
                        //     py > initY + 70 ||
                        //     py < initY - 70
                        // ) {
                        //     this.colorChange.setHex(0xc4ded0);
                        //     coulors.setXYZ(
                        //         i,
                        //         this.colorChange.r,
                        //         this.colorChange.g,
                        //         this.colorChange.b
                        //     );
                        //     coulors.needsUpdate = true;
                        // }
                    } else {
                        if (mouseDistance < this.particleOptions.area) {
                            // plane particles logic
                            {
                                const t = Math.atan2(dy, dx);
                                px += f * Math.cos(t);
                                py += f * Math.sin(t);

                                pos.setXYZ(i, px, py, pz);
                                pos.needsUpdate = true;

                                size.array[i] = this.particleOptions.particleSize * 1.3;
                                size.needsUpdate = true;
                            }

                            if (
                                px > initX + 1.5 ||
                                px < initX - 1.5 ||
                                py > initY + 1.5 ||
                                py < initY - 1.5
                            ) {
                                this.colorChange.setRGB(1, 1, 1);
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
            // outline particles
            // {
            //     const pos = this.outlineParticles.geometry.attributes.position;
            //     const copy = this.outlineParticlesGeometryCopy.attributes.position;
            //     const coulors = this.outlineParticles.geometry.attributes.customColor;
            //     const size = this.outlineParticles.geometry.attributes.size;

            //     const mx = intersects[0].point.x;
            //     const my = intersects[0].point.y;
            //     // const mz = intersects[0].point.z;

            //     for (let i = 0, l = pos.count; i < l; i++) {
            //         const initX = copy.getX(i);
            //         const initY = copy.getY(i);
            //         const initZ = copy.getZ(i);

            //         let px = pos.getX(i);
            //         let py = pos.getY(i);
            //         let pz = pos.getZ(i);

            //         this.colorChange.setRGB(1, 1, 1);
            //         coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
            //         coulors.needsUpdate = true;

            //         size.array[i] = this.particleOptions.particleSize;
            //         size.needsUpdate = true;

            //         const dx = mx - px;
            //         const dy = my - py;
            //         // const dz = mz - pz;

            //         const mouseDistance = this.distance(mx, my, px, py);
            //         // const d = (dx = mx - px) * dx + (dy = my - py) * dy;
            //         // const f = -this.particleOptions.area / d;

            //         if (this.mouseDown) {
            //             // disable mouse click event
            //             // const t = Math.atan2(dy, dx);
            //             // px -= f * Math.cos(t);
            //             // py -= f * Math.sin(t);
            //             // this.colorChange.setHSL(0.5 + zigzagTime, 1.0, 0.5);
            //             // coulors.setXYZ(
            //             //     i,
            //             //     this.colorChange.r,
            //             //     this.colorChange.g,
            //             //     this.colorChange.b
            //             // );
            //             // coulors.needsUpdate = true;
            //             // if (
            //             //     px > initX + 70 ||
            //             //     px < initX - 70 ||
            //             //     py > initY + 70 ||
            //             //     py < initY - 70
            //             // ) {
            //             //     this.colorChange.setHSL(0.15, 1.0, 0.5);
            //             //     coulors.setXYZ(
            //             //         i,
            //             //         this.colorChange.r,
            //             //         this.colorChange.g,
            //             //         this.colorChange.b
            //             //     );
            //             //     coulors.needsUpdate = true;
            //             // }
            //         } else {
            //             if (mouseDistance < this.particleOptions.area) {
            //                 // outline particles logic
            //                 {
            //                     const t = Math.atan2(dy, dx);
            //                     px -= 0.03 * Math.cos(t);
            //                     py -= 0.03 * Math.sin(t);

            //                     this.colorChange.setRGB(1, 1, 1);
            //                     coulors.setXYZ(
            //                         i,
            //                         this.colorChange.r,
            //                         this.colorChange.g,
            //                         this.colorChange.b
            //                     );
            //                     coulors.needsUpdate = true;

            //                     size.array[i] = this.particleOptions.particleSize / 1.2;
            //                     size.needsUpdate = true;
            //                 }

            //                 if (
            //                     px > initX + 1 ||
            //                     px < initX - 1 ||
            //                     py > initY + 1 ||
            //                     py < initY - 1
            //                 ) {
            //                     this.colorChange.setRGB(1, 1, 1);
            //                     coulors.setXYZ(
            //                         i,
            //                         this.colorChange.r,
            //                         this.colorChange.g,
            //                         this.colorChange.b
            //                     );
            //                     coulors.needsUpdate = true;

            //                     size.array[i] = this.particleOptions.particleSize / 1.8;
            //                     size.needsUpdate = true;
            //                 }
            //             }
            //         }

            //         px += (initX - px) * this.particleOptions.ease;
            //         py += (initY - py) * this.particleOptions.ease;
            //         pz += (initZ - pz) * this.particleOptions.ease;

            //         pos.setXYZ(i, px, py, pz);
            //         pos.needsUpdate = true;
            //     }
            // }
        }
    }

    createText() {
        const shapes: THREE.Shape[] = [];
        this.svg.paths.forEach((path) => {
            const shape = SVGLoader.createShapes(path);
            shapes.push(...shape);
        });
        // const geometry = new THREE.ShapeGeometry(shapes);
        // geometry.computeBoundingBox();

        // if (!geometry.boundingBox) {
        //     throw new Error("Geometry bounding box is null");
        // }
        // don't cacu
        // const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
        // const yMid = (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2.85;

        // geometry.center();

        this.outlineParticles = this.outlineParticle(shapes);
        this.planeParticles = this.planeParticle(shapes);

        this.particles = this.planeParticles;

        this.scene.add(this.outlineParticles);
        this.scene.add(this.planeParticles);

        this.planeParticlesGeometryCopy = new THREE.BufferGeometry();
        this.planeParticlesGeometryCopy.copy(this.particles.geometry);
        // this.outlineParticlesGeometryCopy = new THREE.BufferGeometry();
        // this.outlineParticlesGeometryCopy.copy(this.outlineParticles.geometry);
    }

    outlineParticle(shapes: THREE.Shape[] /* xMid: number, yMid: number */) {
        const lineSegments: THREE.LineSegments[] = [];

        for (let x = 0; x < shapes.length; x++) {
            const shape = shapes[x];

            const shapeGeometry = new THREE.ShapeGeometry(shape);
            const edgesGeometry = new THREE.EdgesGeometry(shapeGeometry);

            const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 10 });
            const line = new THREE.LineSegments(edgesGeometry, lineMaterial);

            lineSegments.push(line);
        }

        const outlineGroup = new THREE.Group();
        lineSegments.forEach((segment) => outlineGroup.add(segment));

        return outlineGroup;
    }

    planeParticle(shapes: THREE.Shape[] /* xMid: number, yMid: number */) {
        const points: THREE.Vector3[] = [];
        const colors: number[] = [];
        const sizes: number[] = [];

        for (let x = 0; x < shapes.length; x++) {
            const shape = shapes[x];

            // Get contour and holes points
            const { shape: shapeVertices, holes: holeVertices } = shape.extractPoints(12);

            // Triangulate the shape to get the interior points
            const triangles = THREE.ShapeUtils.triangulateShape(shapeVertices, holeVertices);
            const vertices = [...shapeVertices];
            vertices.push(...holeVertices.flat(2));

            // Add points inside the shape
            triangles.forEach((triangle) => {
                const [a, b, c] = triangle.map((index) => vertices[index]);

                // Calculate the area of the triangle
                const area = Math.abs((b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y)) / 2;

                // Determine the number of points based on the area
                const numPoints = Math.floor(this.particleOptions.planeParticleAmount * area);

                // Generate random points inside the triangle
                for (let i = 0; i < numPoints; i++) {
                    const r1 = Math.random();
                    const r2 = Math.random();
                    const sqrtR1 = Math.sqrt(r1);

                    const x = (1 - sqrtR1) * a.x + sqrtR1 * (1 - r2) * b.x + sqrtR1 * r2 * c.x;
                    const y = (1 - sqrtR1) * a.y + sqrtR1 * (1 - r2) * b.y + sqrtR1 * r2 * c.y;

                    const point = new THREE.Vector3(x, y, 0);
                    points.push(point);
                    colors.push(this.colorChange.r, this.colorChange.g, this.colorChange.b);
                    sizes.push(1);
                }
            });
        }

        const geoParticles = new THREE.BufferGeometry().setFromPoints(points);
        // diable translate
        // geoParticles.translate(xMid, yMid, 0);

        geoParticles.setAttribute("customColor", new THREE.Float32BufferAttribute(colors, 3));
        geoParticles.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Color(0xea3b4d) },
                pointTexture: { value: this.particleImg },
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,

            blending: THREE.AdditiveBlending,
            depthTest: false,
            transparent: true,
        });

        const planeParticles = new THREE.Points(geoParticles, material);

        return planeParticles;
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
