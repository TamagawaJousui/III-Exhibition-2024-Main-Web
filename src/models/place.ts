export const placeList = [
  "工学部2号館フォーラム",
  "工学部2号館展示室",
  "工学部2号館9階・Sky Presentation Room",
  "情報学環オープンスタジオ",
] as const;

export type Place = (typeof placeList)[number];

export const placeColorPalette = {
  工学部2号館フォーラム: "works-carousel-forum",
  "工学部2号館9階・Sky Presentation Room": "works-carousel-sky",
  工学部2号館展示室: "works-carousel-exhibition",
  情報学環オープンスタジオ: "works-carousel-open",
} as const satisfies Record<Place, string>;
