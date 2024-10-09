import { Place } from "@/models/place";

export type WorkData = {
    title: string;
    member: string[];
    place: Place;
    description: {
        ja: string;
        en: string;
    };
    imagePath: string;
};

export const workList = [
    {
        title: "Area of Landscape",
        member: ["真田将太朗", "森達也", "八木新平", "桶家武尊", "池田翔"],
        place: "工学部2号館フォーラム",
        description: {
            ja: `絵画と人工知能を中心とした巨大作品。鑑賞者を巨大な抽象絵画のなかへと誘い込み、気づけば絵の世界を構築する一部となっている新しい知覚体験をもたらす。`,
            en: ``,
        },
        imagePath: "/works/landscape.jpg",
    },
    {
        title: "zip or",
        member: ["増田凌", "大平麻以", "加藤遼真", "石川虎之介", "永田莉紗", "金田昌也"],
        place: "工学部2号館展示室",
        description: {
            ja: `ジッパーは「金属やプラスチック製の角張った構造が互いに噛み合い、直線を形成する」という強い人工物らしさをもっている。そんなジッパーを用いながら自然がもつ有機的な形を表現することはできるのだろうか。 本作品では所望の曲線に沿うようコンピュテーショナルに設計・製造されたジッパーによって形作られた立体を提示する。ジッパーは布を支える骨格となり、その開閉によって立体の形を変化させる。 服を着る。鞄にものをしまう。日常に埋もれていた｢ジッパーを開閉する｣という行為に新たな意味を見出すことができるかもしれない。`,
            en: ``,
        },
        imagePath: "/works/zip.png",
    },
    {
        title: "Prismatic Diary",
        member: ["横井総太朗", "小西優多郎", "李伊婧", "平林晴馬", "吉田翼", "都築あい"],
        place: "情報学環オープンスタジオ",
        description: {
            ja: `人は出来事を解釈する際に、他に見え方があることを忘れがちだ。それは、虹の一部分だけを見て、虹が一色であると思い込むようなものと言える。 私たちは、日々の感情や考えを日記に記録しているが、もし気づかないうちに内容の解釈が変わっていたら、新しい解釈をどう受け入れるだろうか？ この作品は、リアルタイムで多様な解釈に変化していく日記を書く体験を通じて、少し違う「私」に出会うことができる体験だ。 体験者が日記を書き進めるにつれて、生成AIによる様々な解釈が同時に展開され、過去の出来事の意味が多層的に広がっていく。 出来事の異なった解釈の可能性に気付いた瞬間、あなたの世界の見え方は虹色に変わっていくだろう。`,
            en: ``,
        },
        imagePath: "/works/prismatic.jpg",
    },
    {
        title: "祈りの余白",
        member: ["森田匠", "高橋一成"],
        place: "工学部2号館展示室",
        description: {
            ja: `あなたの記憶に残る大切な他者や甚大な災害、凄惨な事件への関心は、時間が経つれて変化していく。本作品では、自分とそれらを想起させるモノの間を寄せては返す振り子を観ながら、鑑賞者は自身の関心を振り子に重ねることで、関心の移ろいを感じることができる。`,
            en: ``,
        },

        imagePath: "/works/pray.jpg",
    },
    {
        title: "Champloo ~かきまぜる ~",
        member: ["友利未夢", "ルイヴィル・デリーアン", "常盤優菜", "増澤茉利子", "谷凪彩"],
        place: "情報学環オープンスタジオ",
        description: {
            ja: `鑑賞者は、別の誰かが創り出したさまざまな要素をあるテーマに沿ってコラージュし、新たな作品を創り出す。世界に1つしかないその作品は、最後、あなたに何かを問うだろう。1つ1つの要素は一見するとバラバラなようでいて、どこか同じ部分を見出すこともできるからだ。`,
            en: ``,
        },

        imagePath: "/works/champloo.jpg",
    },
] as const satisfies WorkData[];
