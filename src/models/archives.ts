import { match } from "ts-pattern";

export const extraPageInfo = [
    { id: 2024, concept: "なにいう展" },
    { id: 2023, concept: "voidage" },
    { id: 2022, concept: "Emulsion" },
    { id: 2021, concept: "0PUNK" },
    { id: 2020, concept: "WHO ZIPS YOU?" },
    { id: 2019, concept: "enact one's self" },
    { id: 2018, concept: "Dest-logy" },
    { id: 2017, concept: "SUKIMANIAC" },
    { id: 2016, concept: "補序線" },
    { id: 2015, concept: "グッバイ・マイ・ボディ" },
    { id: 2014, concept: "リアルからちょっと離れてる空間" },
] as const;

export const mainPageInfo = [
    { id: 25, concept: "學藝運動" },
    { id: 24, concept: "Emulsion" },
    { id: 23, concept: "キョリブレーション" },
    { id: 22, concept: "弛む" },
    { id: 21, concept: "ああ言えば、こう言う。こう言えば、どう言う？" },
    { id: 20, concept: "Dest-logy REBUILD" },
    { id: 19, concept: "WYSIWIG?" },
    { id: 18, concept: "FAKE FUTURE" },
    { id: 17, concept: "わたしエクステンション" },
    { id: 16, concept: "!!!" },
] as const;

export const getExtraPageLink = (id: (typeof extraPageInfo)[number]["id"]) =>
    match(id)
        .with(2024, () => "https://iii-exhibition-2024-web.vercel.app/")
        .with(2023, () => "https://iii-exhibition2023.vercel.app/")
        .otherwise((id) => `https://archive.iiiexhibition.com/log/iiiEx${id}`);

export const getMainPageLink = (id: (typeof mainPageInfo)[number]["id"]) =>
    match(id)
        .with(25, () => `https://iii-exhibition2023-main.vercel.app/`)
        .otherwise((id) => `https://archive.iiiexhibition.com/log/i3e${id}`);
