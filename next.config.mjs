import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /.(vert|frag)$/,
            use: "raw-loader",
        });
        return config;
    },
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
};

export default withVanillaExtract(nextConfig);
