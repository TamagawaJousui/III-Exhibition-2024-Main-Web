import * as THREE from "three";
import { SVGResult } from "three/examples/jsm/Addons.js";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";

import { vertexShader, fragmentShader } from "./shader";

export class particleSystem {
    scene: THREE.Scene;
    svg: SVGResult;
    xLength: number = 0;
    yLength: number = 0;
    startTime: number = 0;
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
    outlineContours: THREE.Group<THREE.Object3DEventMap> = new THREE.Group();
    planeParticles: THREE.Points = new THREE.Points();
    planeParticlesGeometryCopy: THREE.BufferGeometry = new THREE.BufferGeometry();
    colorStops: THREE.Color[] = [
        // new THREE.Color(0xede7e9),
        new THREE.Color(0xea3b4d),
        new THREE.Color(0xfb7c39),
        new THREE.Color(0xc4ded0),
        new THREE.Color(0xe4c2ca),
        new THREE.Color(0xe4c2ca),
    ];
    constructor(
        scene: THREE.Scene,
        svg: SVGResult,
        particleImg: THREE.Texture,
        camera: THREE.PerspectiveCamera,
        renderer: THREE.WebGLRenderer,
        particleOptions: ParticleData,
        container: HTMLElement
    ) {
        this.scene = scene;
        this.svg = svg;
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
        if (!this.startTime) {
            this.startTime = performance.now();
        }
    }

    bindEvents() {
        document.addEventListener("mousemove", this.onMouseMove.bind(this));
    }

    onMouseMove(event: MouseEvent) {
        const rect = this.renderer.domElement.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    }

    render() {
        this.raycaster.setFromCamera(this.mouse, this.camera);

        const intersects = this.raycaster.intersectObject(this.planeArea);

        if (intersects.length === 0) return;

        const pos = this.planeParticles.geometry.attributes.position;
        const copy = this.planeParticlesGeometryCopy.attributes.position;
        const coulors = this.planeParticles.geometry.attributes.customColor;
        const opacities = this.planeParticles.geometry.attributes.opacity;
        const size = this.planeParticles.geometry.attributes.size;

        const mx = intersects[0].point.x;
        const my = intersects[0].point.y;

        for (let i = 0, l = pos.count; i < l; i++) {
            const initX = copy.getX(i);
            const initY = copy.getY(i);

            let px = pos.getX(i);
            let py = pos.getY(i);

            this.colorChange.setRGB(1, 1, 1);
            coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
            coulors.needsUpdate = true;

            size.array[i] = this.particleOptions.particleSize;
            size.needsUpdate = true;

            let dx = mx - px;
            let dy = my - py;

            const mouseDistance = this.distance(mx, my, px, py);
            const d = (dx = mx - px) * dx + (dy = my - py) * dy;
            const f = -this.particleOptions.area / d;

            if (mouseDistance < this.particleOptions.area) {
                const t = Math.atan2(dy, dx);
                px += f * Math.cos(t);
                py += f * Math.sin(t);

                pos.setXYZ(i, px, py, 0);
                pos.needsUpdate = true;

                size.array[i] = this.particleOptions.particleSize * 1.3;
                size.needsUpdate = true;

                if (px > initX || px < initX || py > initY || py < initY) {
                    const distance = mouseDistance / this.particleOptions.area;
                    const weight = this.smoothstep(0, 1, distance);
                    const colorIndex = Math.floor(weight * (this.colorStops.length - 1));
                    const color = this.colorStops[colorIndex];

                    coulors.setXYZ(i, color.r, color.g, color.b);
                    coulors.needsUpdate = true;

                    size.array[i] = this.particleOptions.particleSize / 1.8;
                    size.needsUpdate = true;

                    const opacityWeight = this.smoothstep(0, 0.1, weight);
                    opacities.setX(i, opacityWeight);
                    opacities.needsUpdate = true;
                }
            }

            px += (initX - px) * this.particleOptions.ease;
            py += (initY - py) * this.particleOptions.ease;

            pos.setXYZ(i, px, py, 0);
            pos.needsUpdate = true;
        }
    }

    createText() {
        const shapes: THREE.Shape[] = [];
        this.svg.paths.forEach((path) => {
            const shape = SVGLoader.createShapes(path);
            shapes.push(...shape);
        });
        const geometry = new THREE.ShapeGeometry(shapes);
        geometry.computeBoundingBox();

        if (!geometry.boundingBox) {
            throw new Error("Geometry bounding box is null");
        }
        const xLength = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        const yLength = geometry.boundingBox.max.y - geometry.boundingBox.min.y;

        this.xLength = xLength;
        this.yLength = yLength;

        this.outlineContours = this.outlineContour(shapes, xLength, yLength);
        this.planeParticles = this.planeParticle(shapes, xLength, yLength);

        this.particles = this.planeParticles;

        this.scene.add(this.outlineContours);
        this.scene.add(this.planeParticles);

        this.planeParticlesGeometryCopy = new THREE.BufferGeometry();
        this.planeParticlesGeometryCopy.copy(this.particles.geometry);
    }

    outlineContour(shapes: THREE.Shape[], xLength: number, yLength: number) {
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
        lineSegments.forEach((segment) => {
            segment.translateX(-xLength - 10);
            segment.translateY(yLength + 10);
            outlineGroup.add(segment);
        });

        return outlineGroup;
    }

    planeParticle(shapes: THREE.Shape[], xLength: number, yLength: number) {
        const points: THREE.Vector3[] = [];
        const colors: number[] = [];
        const opacities: number[] = [];
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
                    opacities.push(1);
                    sizes.push(1);
                }
            });
        }

        const geoParticles = new THREE.BufferGeometry().setFromPoints(points);

        geoParticles.translate(-xLength - 10, yLength + 10, 0);

        geoParticles.setAttribute("customColor", new THREE.Float32BufferAttribute(colors, 3));
        geoParticles.setAttribute("opacity", new THREE.Float32BufferAttribute(opacities, 1));
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

    smoothstep(edge0: number, edge1: number, x: number) {
        const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
        return t * t * (3 - 2 * t);
    }

    customSmoothstep(edge0: number, edge1: number, x: number) {
        const t = Math.max(-1, Math.min(1, (x - edge0) / (edge1 - edge0)));
        return t * t * (3 - 2 * Math.abs(t));
    }
}
