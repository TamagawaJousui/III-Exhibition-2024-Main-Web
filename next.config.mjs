import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import { FontOptimizationPlugin } from "./src/utils/FontOptimizationPlugin.mjs";
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
    reactStrictMode: true,
    images: {
        // FIXME: テスト用の設定追加なので、本番環境では削除する
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.jp",
                port: "",
            },
        ],
    },
    webpack: (config) => {
        config.plugins.push(
            new FontOptimizationPlugin({
                fontPath: "./public/fonts/KleeOne-Regular-Master.json",
                outputPath: "./public/fonts/KleeOne-Regular.json",
                chars: "付いて離れて",
            })
        );
        return config;
    },
};

export default withVanillaExtract(nextConfig);
