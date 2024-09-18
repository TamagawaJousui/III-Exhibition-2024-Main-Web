export const placeList = [
    "工学部2号館フォーラム",
    "工学部2号館9階92B",
    "工学部2号館展示室",
    "情報学環オープンスタジオ",
] as const;

export type Place = (typeof placeList)[number];

export const placeColorPalette = {
    工学部2号館フォーラム: "#5F5A62",
    工学部2号館9階92B: "#7D7E73",
    工学部2号館展示室: "#7E7873",
    情報学環オープンスタジオ: "#7E7373",
} as const satisfies Record<Place, string>;
