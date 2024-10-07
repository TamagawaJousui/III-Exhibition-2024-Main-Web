// シェーダーコードを文字列として定義
export const vertexShader = /* glsl */ `
    attribute float size;
    attribute vec3 customColor;
    attribute float opacity;
    varying vec3 vColor;
    varying float vOpacity;

    void main() {
        vOpacity = opacity;
        vColor = customColor;
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
        gl_PointSize = size * ( 300.0 / -mvPosition.z );
        gl_Position = projectionMatrix * mvPosition;
    }
`;

export const fragmentShader = /* glsl */ `
    uniform vec3 color;
    uniform sampler2D pointTexture;

    varying vec3 vColor;
    varying float vOpacity;

    void main() {
        gl_FragColor = vec4(color * vColor, vOpacity);
        // gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
    }
`;
