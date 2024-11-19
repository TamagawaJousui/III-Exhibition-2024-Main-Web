import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import glsl from 'vite-plugin-glsl'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        glsl(),
        ViteImageOptimizer({
            webp: { quality: 50, lossless: false, smartSubsample: true },
        }),
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
})
