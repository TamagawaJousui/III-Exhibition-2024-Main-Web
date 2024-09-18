import { Place } from "@/models/place";

export type WorkData = {
    title: string;
    member: string[];
    place: Place;
    description: string;
    imagePath: string;
};

export const workList = [
    {
        title: "Prismatic Diary",
        member: ["横井 総太朗", "小西 優多郎", "李 伊婧", "平林 晴馬", "吉田 翼", "都築 あい"],
        place: "工学部2号館フォーラム",
        description: `本作品では、日記の執筆中に生成AIによる複数の解釈を展開し、少し違う「私」へ出会う体験を実現した。出来事の異なった解釈の可能性に気付いた瞬間、あなたの世界の見え方は虹色に変わっていくだろう。`,
        imagePath: "/works/prismatic-bw.png",
    },
    {
        title: "zip or",
        member: ["増田 凌", "大平 麻以", "加藤 遼真", "石川 虎之介", "永田 莉紗", "金田 昌也"],
        place: "情報学環オープンスタジオ（中山未来ファクトリー）",
        description: `ジッパーは「金属やプラスチック製の角張った構造が互いに噛み合い、直線を形成する」という強い人工物らしさをもっている。そんなジッパーを用いながら自然がもつ有機的な形を表現することはできるのだろうか。
        本作品では所望の曲線に沿うようコンピュテーショナルに設計・製造されたジッパーによって形作られた立体を提示する。ジッパーは布を支える骨格となり、その開閉によって立体の形を変化させる。
        服を着る。
        鞄にものをしまう。
        日常に埋もれていた｢ジッパーを開閉する｣という行為に新たな意味を見出すことができるかもしれない。`,
        imagePath: "/works/zip-bw.png",
    },
] as const satisfies WorkData[];
