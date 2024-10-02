declare type RecursiveLeafKeys<T, Prefix = ""> = {
    [K in keyof T]: T[K] extends Record<string, unknown>
        ? `${Prefix}${K}` extends keyof T[K]
            ? never
            : RecursiveLeafKeys<T[K], `${Prefix}${K}.`>
        : `${Prefix}${K}`;
}[keyof T];

declare module "*.vert" {
    const src: string;
    export default src;
}
declare module "*.frag" {
    const src: string;
    export default src;
}
