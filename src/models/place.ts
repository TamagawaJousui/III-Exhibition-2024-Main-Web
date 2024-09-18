export const placeList = [
    "情報学環オープンスタジオ（中山未来ファクトリー）",
    "工学部2号館9階92B（未定）",
    "工学部2号館フォーラム",
    "工学部2号館展示室]",
] as const;

export type Place = (typeof placeList)[number];
