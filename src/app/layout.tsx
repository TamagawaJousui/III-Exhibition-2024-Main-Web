import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import React from "react";

import { guardUndef } from "@/utils";
import "./globals.css";

const siteName = "東京大学制作展";
const description = "東京大学制作展 2024 Extraのホームページです。";
const url = "https://iiiexhibition.com";

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
        <body>{children}</body>
        <GoogleAnalytics gaId={guardUndef(process.env.NEXT_PUBLIC_GA_ID)} />
    </html>
);

export default RootLayout;
