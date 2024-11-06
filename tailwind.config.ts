import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        fontFamily: {
            "conpect-ja": ["Klee One Regular"],
            "conpect-en": ["Playfair Light"],
            serif: ["游明朝体", "Yu Mincho", "YuMincho"],
            gothic: ["Zen Kaku Gothic Antique"],
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
export default config;
