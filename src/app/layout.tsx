import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import Local from "next/font/local";
import React from "react";

import { guardUndef } from "@/utils";
import "./global.css";

const siteName = "東京大学制作展";
const description = "東京大学制作展 2024 Mainのホームページです。";
const url = "https://iiiexhibition.com";

const playfairDisplay = Local({
    src: "../../public/fonts/PlayfairDisplaySC-Italic.ttf",
    display: "swap",
    variable: "--font-playfair",
});

const kleeOne = Local({
    src: "../../public/fonts/KleeOne-Regular.ttf",
    display: "swap",
    variable: "--font-klee",
});

const notoSansCh = Local({
    src: "../../public/fonts/CactusClassicalSerif-Regular.ttf",
    display: "swap",
    variable: "--font-noto-sans-ch",
});

export const metadata: Metadata = {
    title: "東京大学制作展",

    robots: {
        index: process.env.NEXT_PUBLIC_CLIENT_ENV === "prod",
        googleBot: {
            index: process.env.NEXT_PUBLIC_CLIENT_ENV === "prod",
        },
    },
    description,
    openGraph: {
        title: siteName,
        description,
        url,
        siteName,
        locale: "ja_JP",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: siteName,
        description,
        site: "@iiiexhibition",
    },
    // verification: {
    //   google: 'サーチコンソールのやつ',
    // },
    // alternates: {
    //   canonical: url,
    // },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="ja">
        <body
            suppressHydrationWarning
            className={`${playfairDisplay.variable} ${kleeOne.variable} ${notoSansCh.variable}`}
        >
            {children}
        </body>
        <GoogleAnalytics gaId={guardUndef(process.env.NEXT_PUBLIC_GA_ID)} />
    </html>
);

export default RootLayout;
