declare type RecursiveLeafKeys<T, Prefix = ""> = {
    [K in keyof T]: T[K] extends Record<string, unknown>
        ? `${Prefix}${K}` extends keyof T[K]
            ? never
            : RecursiveLeafKeys<T[K], `${Prefix}${K}.`>
        : `${Prefix}${K}`;
}[keyof T];

export interface ParticleData {
    text: string;
    planeParticleAmount: number;
    outlineParticleAmount: number;
    particleSize: number;
    particleColor: number;
    textSize: number;
    area: number;
    ease: number;
}
