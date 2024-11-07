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
        title: "Whole Teidai Gesui Catalog",
        member: ["あんどうやすし"],
        place: "工学部2号館フォーラム",
        description: {
            ja: `「マンホール」と聞いてポジティブな印象を抱く人は少ないかもしれない。そもそも視界にすら入っていない人も多いだろう。本展示では本郷キャンパスに多数存在する「帝大下水」マンホールを中心にそのデザインについて詳説する。近年はエポキシ樹脂を使用したカラフルなデザインマンホールも多いが、私個人は鋳鉄のみの無骨なマンホールにこそ美しさを感じる。この展示を通じてこれまで顧みられることの少なかった素朴マンホールの魅力に気づいてもらいたい。`,
            en: "",
        },
        imagePath: "/works/Whole_Teidai_Gesui_Catalog.jpg",
    },
    {
        title: "umoru",
        member: ["宮道彩乃", "中根葵", "澤田智佳"],
        place: "工学部2号館フォーラム",
        description: {
            ja: `本作品は、人がumoruに埋もれて一体化する体験を実現した。人がumoruの中を覗き込むと、スクリーンにumoruの心が映し出される。来場者との接触や対話に影響されながら、umoruは心を取り戻していく。`,
            en: "",
        },
        imagePath: "/works/umoru.jpg",
    },
    {
        title: "鏡",
        member: ["王文鶴", "中野博貴", "徐錦芸"],
        place: "工学部2号館9階・Sky Presentation Room",
        description: {
            ja: `この作品では、顔の位置を追跡し、光の反射モデルに基づいてカメラを動かすことで、検出された顔がモニタに映る際に、まるで鏡に映っているかのような錯覚を生じさせます。そして、顔がモニタに映った瞬間からリアルタイムで顔を交換し、「これが自分……のはずだけど、別人？それともこれが自分？」という不思議な体験を提供します。`,
            en: "",
        },
        imagePath: "/works/The_Mirror.jpg",
    },
    {
        title: "存える",
        member: ["星杏優菜", "鈴木健", "足立信基", "花岡桃可"],
        place: "工学部2号館フォーラム",
        description: {
            ja: `物理的に存在が消えても、残り続ける痕跡。私がいなくなっても、他者に及ぼした影響の中で、私は生き続ける。`,
            en: "",
        },
        imagePath: "/works/Remain.jpg",
    },
    {
        title: "心の味わい",
        member: ["余楚韵", "王文鶴", "莫子敏", "席竞帆", "李嘉懿", "何婧"],
        place: "工学部2号館9階・Sky Presentation Room",
        description: {
            ja: `光の三原色が生まれる原理のように、私たちの感情にも基本的な構成要素が存在する。  あなたの心は躍動しているのか、それとも静寂に包まれているのか。本作品では、感情という料理を注文できる。自分の心と向き合うと、ふわりと食べ物の香りが漂い、今の心情が記されたレシートが静かに落ちてくる。その香りをそっと嗅いでみれば、きっと自分の感情をより深く理解できるだろう。`,
            en: "",
        },
        imagePath: "/works/The_Flavor_of_Hearts.jpg",
    },
    {
        title: "CottonSketchPen",
        member: ["金澤政宜", "中田裕紀", "岡空来", "南田桂吾"],
        place: "工学部2号館9階・Sky Presentation Room",
        description: {
            ja: `僕たちは必要な時に必要なものを創り出すような世界をつくりたい。その世界をつくるにあたって、必要なものを即座に作成することができないというのと、すぐに形を作って崩して素材の状態に戻すことができないという問題があります。そこで僕らは、ハンディタイプの好きな形のわた構造を出力するデバイスをつくっています。わた構造だと大さじ一杯のザラメからからぐわぐわぐわと顔の大きさ程度の形を創ることができたり、出来たわた構造をまた溶かして、また別のわた構造を創り出すような再利用できるメリットがあります。この「CottonSketchPen」さえ持っていれば、例えば、ハンモックをつくったり、クッションをつくったりすることができます。ほしくないですか？`,
            en: "",
        },
        imagePath: "/works/CottonSketchPen.jpg",
    },
    {
        title: "Geocussion",
        member: ["岡空来", "金澤政宜", "中田裕紀", "南田桂吾"],
        place: "工学部2号館9階・Sky Presentation Room",
        description: {
            ja: `Hiroshi Ishiiの『Sandscape』は、コンピューターが誕生するはるか前から、人々は天然の素材を使い、3次元の形状をデザインしてきた歴史を思い起こさせる。古代の都市設計者たちは、粘土や小石、木片を使いながら、都市の景観を描き、自らの身体を通じてその感触を楽しむことで、アイデアを形にしてきた。砂場遊びにおいても、砂を叩き、押し固めることでオブジェクトを作り上げる。そうやって私たちは直感的な触覚体験を通じて創造を楽しんできた。音を大きく鳴らしたいならば大きなオブジェクトを作り、形を変えれば異なる音が生まれる。素材に触れ、感覚を通じて表現することの喜びを今一度思い起こしたい。`,
            en: "",
        },
        imagePath: "/works/Geocussion.jpg",
    },
    {
        title: "覗香",
        member: ["岡空来", "金澤政宜", "中田裕紀", "南田桂吾"],
        place: "工学部2号館9階・Sky Presentation Room",
        description: {
            ja: `香道の趣をうつし、香木を燃やさずとも、静かに熱を加えてその幽けき香りを引き出す妙技に倣い、今に息づかせたる趣向なり。香木は、穏やかなる温もりを受けて、香気をそよそよと立ち昇らせ、微にして幽玄なる香りを耳に語りかける。此の技を身近なる花々や香辛のものにうつし、慎ましき電熱線にて温をたしなみ、普段は人の鼻に感じ得ぬ芳香をそっと呼び起こさんとす。漂えども決して強がらず、仄かにたゆたうその様は、虫眼鏡の如く香の細やかさをうつし取り、奥ゆかしきひとときをもたらす。かの香りの世界に心をゆだね、静謐なる時をゆるりとお楽しみあれ。`,
            en: "",
        },
        imagePath: "/works/nozoko.jpg",
    },
    {
        title: "ColorNote",
        member: ["金澤政宜"],
        place: "工学部2号館9階・Sky Presentation Room",
        description: {
            ja: `絵を書くとき、服を選ぶとき、プレゼンの資料を作るとき、私たちはいつも色の選択を迫られる。赤は危険を感じる、緑は快適な感じがある、青なら清潔感がある、、、無意識のうちに持ち合わせている色のイメージは多くの人に共通していて、そのイメージをもとに選択していく。そうして配色していくときに合わない色同士の感覚もなんとなく持っている。そこで日々培ってきた色感覚を頼りに音楽を作ってみたいと思う。音楽を聴いて色が見えるというような人がもつ共感覚のデータをもとに、色から音への変換を可能にしてみる。自分なりに配色した後の音のイメージは色のイメージと合うだろうか。`,
            en: "",
        },
        imagePath: "/works/ColorNote.jpg",
    },
    {
        title: "生成AIと優美な死骸",
        member: ["梅田悠哉", "中野博貴", "平林晴馬"],
        place: "工学部2号館9階・Sky Presentation Room",
        description: {
            ja: `シュルレアリスムにおける共同制作手法である「優美な死骸」を生成AIと実践する。隣接した絵の端だけが見える状態で、次の人・AIがそれにつながる絵を描く、という作業を繰り返すことで、どのような作品が出来上がるのだろうか。`,
            en: "",
        },
        imagePath: "/works/Exquisite_Corpse_with_Generative_AI.jpg",
    },
    {
        title: "バードっち",
        member: [
            "李伊婧",
            "石田颯人",
            "カイカセイ",
            "sion",
            "白井崇陽",
            "中山蒼玄",
            "南部隆一",
            "真しろ",
        ],
        place: "工学部2号館フォーラム",
        description: {
            ja: `バードっちは、目に見えない小鳥「オーディオン」の気配を音だけで探すオーディオゲームである。視覚障害者と晴眼者で協力して制作を行い、聴覚のみで空間の知覚を研ぎ澄ます体験を提供する。
スマートフォンを持ちながら空間を歩き回り、オーディオンを探し、餌を与えてみてほしい。近づくと鳴き声や羽ばたきの音が大きくなる。オーディオンが満腹になるまで、一緒に遊んでみよう。
※本作はシビック・クリエイティブ・ベース東京［CCBT］で開催された「オーディオゲームセンター＋ CCBT」のハッカソンにて制作されました。
※このソフトウェアには、（株）ＣＲＩ・ミドルウェアの「CRIWARE」が使用されています。
Powered by “CRIWARE”.CRIWARE is a trademark of CRI Middleware Co., Ltd.`,
            en: "",
        },
        imagePath: "/works/Birdatch.jpg",
    },
    {
        title: "Living Lens",
        member: ["大平麻以", "金澤政宜", "森田崇文", "吳冠儒", "岩瀬英治", "筧康明"],
        place: "工学部2号館9階・Sky Presentation Room",
        description: {
            ja: `単調な格子模様が液滴によって歪められ、有機的な曲線模様が浮かび上がる。
定まった形状を持たない水という素材が、生きているかのように動き得られる、その瞬間だけの形。
その水滴に浮かび上がる格子もまた、常に異なる形の曲線へと姿を変える。`,
            en: "",
        },
        imagePath: "/works/Droplens.jpg",
    },
    {
        title: "VoiceStorming",
        member: ["有川由祐", "南田桂吾", "坪山倫"],
        place: "工学部2号館9階・Sky Presentation Room",
        description: {
            ja: `本展示は、鑑賞者たちが別々に話した感想を、生成AIを用いて会話として再構成した会話体験型作品である。東京大学制作展に展示されている作品の感想を語り合う2人に遭遇した体験者は、その会話の輪の中に入っていき、時間や会場の異なる鑑賞者たちと同期的に語り合うことになる。過去の自分を含む「わたしたち」との対話の中で、作品への見方はどのように変わるだろうか。`,
            en: "",
        },
        imagePath: "/works/VoiceStorming.jpg",
    },
    {
        title: "VoiceStorming",
        member: ["有川由祐", "南田桂吾", "坪山倫"],
        place: "工学部2号館フォーラム",
        description: {
            ja: `本展示は、鑑賞者たちが別々に話した感想を、生成AIを用いて会話として再構成した会話体験型作品である。東京大学制作展に展示されている作品の感想を語り合う2人に遭遇した体験者は、その会話の輪の中に入っていき、時間や会場の異なる鑑賞者たちと同期的に語り合うことになる。過去の自分を含む「わたしたち」との対話の中で、作品への見方はどのように変わるだろうか。`,
            en: "",
        },
        imagePath: "/works/VoiceStorming.jpg",
    },
    {
        title: "本郷キャンパス謎巡り　ーAさんの消失ー",
        member: ["李嘉懿", "莫子敏", "席竞帆", "胡欣雨"],
        place: "工学部2号館フォーラム",
        description: {
            ja: `本郷キャンパスは、我が校の中でも最も歴史と物語のあるキャンパスだ。残念ながら、多くの興味深い場所や面白い歴史を、長年ここでいる学生でさえ知らないことが多い。この作品を通じて、少しでもこのキャンパスの面白い歴史や物語を知ってもらいたいと思う。`,
            en: "",
        },
        imagePath: "/works/Hongo_Campus_Treasure_Hunting_Tour_-_The_Missing_of_A_-.jpg",
    },
    {
        title: "サンゴポリプのシノブトウ",
        member: ["カモクセイ"],
        place: "工学部2号館9階・Sky Presentation Room",
        description: {
            ja: `サンゴについて、一つ有名な誤解は、彼らの骨格が仲間の死体で作られているということである。実際には、それは炭酸カルシウムだが、このゲームでは、以前のプレイヤーが残した骨格を利用して、彼らが辿り着けなかった場所へ進んでいく。直接会って話すわけではなく、前の来場者たちが残した死体を使って、難関なステージをクリアしていくことができる。`,
            en: "",
        },
        imagePath: "/works/The_Dance_of_Death_of_Coral_Polyps.jpg",
    },
    {
        title: "Hand",
        member: ["中根葵"],
        place: "工学部2号館フォーラム",
        description: {
            ja: `人の手の形状は、それだけで誰かの存在を思わせる。物言わぬ手だけの存在があるとしたら、どのような交流が生まれるだろうか。本作品は、手繋ぎや手遊びができるハンドを通して非言語コミュニケーションの可能性を探る。`,
            en: "",
        },
        imagePath: "/works/Hand.jpg",
    },
    {
        title: "chaosync",
        member: ["ウォンマタイ", "カーアーネスト航太"],
        place: "工学部2号館9階・Sky Presentation Room",
        description: {
            ja: `「初めに、万物は混ざり合っていた。そして理解が生まれ、秩序が生まれた。」 - Anaxagoras。このインスタレーションは、台上でメトロノームが不規則に揺れ、個々のリズムで動く様子から始まります。しかし、観客が注視することで、メトロノームは次第に同期し、秩序を生み出します。これは、人の意識によってカオスの中から秩序をもたらす瞬間を象徴しています。さらに、鑑賞者の動作によって、メトロノームは再び同期が外れ、制御されたカオスを体現します。創造性は、カオスと秩序の間の相互作用から生まれるというテーマを通じ、参加者はこの根本的な関係性を探求することを促されます。`,
            en: "",
        },
        imagePath: "/works/chaosync.jpg",
    },
    {
        title: "Puflica",
        member: ["中田裕紀", "金澤政宜", "岡空来", "南田桂吾"],
        place: "工学部2号館9階・Sky Presentation Room",
        description: {
            ja: `インフレータブル構造物とは、チューブや膜を風船のように気体で膨らませることによってできる柔軟な構造物である。インフレータブル構造物を用いたインターフェースには、必要に応じて拡大や収縮ができるという利点がある。この利点を生かして、普段は小さいオブジェクトを使用するときだけ拡大できる世界を実現する。本作品では、小さいときも大きいときも同じ形となるようにこだわっている。`,
            en: "",
        },
        imagePath: "/works/Puflica.jpg",
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
        title: "zip or",
        member: ["増田凌", "大平麻以", "加藤遼真", "石川虎之介", "永田莉紗", "金田昌也"],
        place: "工学部2号館展示室",
        description: {
            ja: `ジッパーは「金属やプラスチック製の角張った構造が互いに噛み合い、直線を形成する」という強い人工物らしさをもっている。そんなジッパーを用いながら自然がもつ有機的な形を表現することはできるのだろうか。 本作品では所望の曲線に沿うようコンピュテーショナルに設計・製造されたジッパーによって形作られた立体を提示する。ジッパーは布を支える骨格となり、その開閉によって立体の形を変化させる。 服を着る。鞄にものをしまう。日常に埋もれていた｢ジッパーを開閉する｣という行為に新たな意味を見出すことができるかもしれない。`,
            en: ``,
        },
        imagePath: "/works/zip.jpg",
    },
    {
        title: "Protophysica",
        member: ["南田桂吾", "金澤政宜", "中田裕紀", "岡空来"],
        place: "工学部2号館展示室",
        description: {
            ja: `僕らが何かを制作する時、絵の具で色を付けたり、板を切り出したり、テープを貼り付けたりするように、スーパーキャパシタを制作物に取り付ける未来が考えられないだろうか。高速に充放電できるエネルギー貯蔵装置であるスーパーキャパシタ。小型で超軽量なところも素晴らしい。接触によるほんの一瞬の給電で溜め込んだエネルギーを制作物に取り付けることで、新たな制作の可能性が広がるだろう。`,
            en: "",
        },
        imagePath: "/works/Protophysica.jpg",
    },
    {
        title: "Metransfer",
        member: ["南田桂吾", "金澤政宜", "中田裕紀", "岡空来"],
        place: "工学部2号館展示室",
        description: {
            ja: `波打つ液体から泡沫を高速に飛び立たせることで、目の前に立体物を実体化する。そして、一瞬にして消滅させる。このように液体と泡沫を行き来して、次々と異なる立体物として形を現しては崩してを繰り返す、メタモルフォーゼをする。このとめどない変身が多様な律動を刻み心を揺さぶる鼓動感を生みだす。`,
            en: "",
        },
        imagePath: "/works/Metransfer.jpg",
    },
    {
        title: "suzumushi",
        member: ["増田凌"],
        place: "工学部2号館展示室",
        description: {
            ja: `虫の「声」や「合唱」と表現されるように、生命を感じさせる風流なものとして親しまれる虫の音（むしのね）。その実、多くの虫は単調な音で決まったフレーズを繰り返すだけであり、まるで機械的な反復のように感じる。虫の音そのものよりむしろ、草陰に足を踏み入れた時に音が鳴り止む、その静寂が生命を感じさせるのではないだろうか。本作品は、スズムシの形態・鳴く機構を単純化したsuzumushiによってこの仮説を検証する。`,
            en: "",
        },
        imagePath: "/works/suzumushi.jpg",
    },
    {
        title: "月々輪廻",
        member: ["李伊婧", "姚思妤", "王文鶴"],
        place: "工学部2号館展示室",
        description: {
            ja: `この作品は、歯車の運動と占星術のシンボルを融合させた占い装置である。特に月の位置とその相位の変化に注目し、これが人間の感情や潜在意識、内面的世界に与える影響を探求する。
            装置の動きは、偏光板が重なるたびに新たなパターンが現れる体験を提供する。
            意味の解釈と生成は、装置とのインタラクションを通じて初めて生まれる。装置との対話においては、自身との内面的な対話の痕跡を残しながら、自らの感情や潜在意識を理解する手助けを得ることが期待されている。
            「あなたの一日が幸せでありますように。」`,
            en: "",
        },
        imagePath: "/works/WHEEL_of_MOON_PHASE.jpg",
    },
    {
        title: "メンヘラ・リフレクション",
        member: ["西岡春菜"],
        place: "工学部2号館展示室",
        description: {
            ja: `本作品では「メンヘラな鏡」との対話を楽しむ体験が出来ます。
            東京大学の学生と「メンヘラ」とは何か、どんな「メンヘラ」な経験をしたかを議論を繰り広げ、作者がメンヘラの分析を行った上で、モノに対してメンヘラの擬人化を行いました。`,
            en: "",
        },
        imagePath: "/works/Mental_Health_Reflection.jpg",
    },
    {
        title: "揺現",
        member: ["仲村友杜"],
        place: "工学部2号館展示室",
        description: {
            ja: `すべてを飲み込む、重くて小さいブラックホールは、鑑賞者と相互に影響を与えながら動きを変化させ続ける。揺れ動く星の中で、曖昧な距離感を提供する。
    複雑に入り混じった現実では、二物を明確に分かつ線を引くことは難しい。 どこまでが外側で、どこからが内側なのだろう？ 浮遊する星々の中で、地平線の向こう側に広がる世界を夢想し続けたい。`,
            en: "",
        },
        imagePath: "/works/Siyo.jpg",
    },
    {
        title: "寝床タイムカプセル",
        member: ["井上国太郎", "中村雅人"],
        place: "工学部2号館展示室",
        description: {
            ja: `赤の他人の寝床にお邪魔し、一夜を過ごした経験をドキュメンタリーとして展示する。僕には日中、いわゆる「現実」と呼ばれる時間帯に起きる出来事が、どこか嘘っぽく感じられる。それに比べて、暗がりの中に沈む夜は圧倒的にリアルだ。遠い昔の子守唄、従兄弟のお兄ちゃんが即興で語り出す物語、お祈りの声、同居人の寝息と寝返り、夢。僕が惹きつけられるものに魂が宿るのは、いつも夜だ。暗い寝床を他人と共有するからこそ、話せること、見えるものがある(そしてそこには、危険も潜んでいる)。視界が朝日で白ける前に、早くカメラを回してしまおう。`,
            en: "",
        },
        imagePath: "/works/A_Bedroom_Time_Capsule.jpg",
    },
    {
        title: "書動",
        member: ["小西優多郎", "田中祐玖", "都築あい", "席竞帆"],
        place: "情報学環オープンスタジオ",
        description: {
            ja: `文章を生み出していく執筆のリズムや、一文字一文字の筆運びに宿るリズム。書かれたものではなく、書いている最中に奏でられるリズムから何を読み取り、何を感じるのか。`,
            en: "",
        },
        imagePath: "/works/SHODO_trajectory_of_handwriting.jpg",
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
        title: "Champloo ~かきまぜる~",
        member: ["友利未夢", "ルイヴィルデリーアン", "常盤優菜", "増澤茉利子", "谷凪彩"],
        place: "情報学環オープンスタジオ",
        description: {
            ja: `鑑賞者は、別の誰かが創り出したさまざまな要素をあるテーマに沿ってコラージュし、新たな作品を創り出す。世界に1つしかないその作品は、最後、あなたに何かを問うだろう。1つ1つの要素は一見するとバラバラなようでいて、どこか同じ部分を見出すこともできるからだ。`,
            en: ``,
        },

        imagePath: "/works/champloo.jpg",
    },
    {
        title: "帝大下水（閉店しました）",
        member: ["あんどうやすし", "十河翔"],
        place: "情報学環オープンスタジオ",
        description: {
            ja: `閉店のお知らせ。2024年7月5日より4ヶ月の長きにわたり地域の皆様に愛されてきたTシャツショップ「帝大下水」は10月末日をもって閉店いたしました。マンホールTシャツ一本でいこうと決心はしたものの、それで経営が成り立つのか不安に思いながら開店したあの日を昨日のことのように思い出すことができます。それから4ヶ月、思い返せばいろいろなことがありましたが、皆様のお陰で走り抜くことができました。これまでの長きにわたるご愛顧に心より感謝申し上げます。ありがとうございました`,
            en: ``,
        },
        imagePath: "/works/Teidai_Gesui.jpg",
    },
    {
        title: "都市の断片",
        member: ["足立信基", "機田悠希", "仲村友杜"],
        place: "情報学環オープンスタジオ",
        description: {
            ja: `固定的な状態で都市生活の背景となっていることの多い存在をメディアとして、都市の痕跡や時間を内包するオブジェクトを展示する。`,
            en: "",
        },
        imagePath: "/works/Fragments_of_the_City.jpg",
    },
    {
        title: "滝の香り",
        member: ["石津悠人"],
        place: "情報学環オープンスタジオ",
        description: {
            ja: `全てがイヤになった時、僕はどうも滝を求めているようでして。 自分のウェルビーイングを探求する中で辿った気づきをもとに、本格オリジナル香水を作りました！ この香りを嗅いだ時、皆さんはどんな自分を重ね、そして出会うのでしょうか。`,
            en: "",
        },
        imagePath: "/works/The_Scent_of_Waterfall.jpg",
    },
    {
        title: "Another Path",
        member: ["大河内洋平", "牛島百合子", "増子優輝"],
        place: "情報学環オープンスタジオ",
        description: {
            ja: `もう一度やり直せるなら、あなたは何を選択するだろうか。『Another Path』は、ちょっと変わった生物の物語を通して、これまでのあなたの選択を見つめ直すVR体験。見覚えのある選択肢を前に、あなたは何を思う？`,
            en: "",
        },
        imagePath: "/works/Another_Path.jpg",
    },
    {
        title: "Tシャツのトポロジー最適化",
        member: ["金田昌也", "福田晴紀"],
        place: "情報学環オープンスタジオ",
        description: {
            ja: `数理に基づき、材料や構造の最適な形状を求める「トポロジー最適化」という手法がある。目的に応じたデザインを計算的に求めることができ、建築や工業部品の軽量化や強度向上に活用されている。では、服をトポロジー最適化してみたらどうなるだろう。  この作品では、トポロジー最適化を服に適用した。コンピューター計算によって、服は入力に基づいて最小限の形へ削ぎ落とされる。人はなぜ服を着るのか、トポロジー最適化は人と服の暗黙の関係に光を当てる。`,
            en: "",
        },
        imagePath: "/works/Topology_optimization_of_T-shirts.jpg",
    },
    {
        title: "触れる不可能立体",
        member: ["横井総太朗"],
        place: "情報学環オープンスタジオ",
        description: {
            ja: `「無限階段を見たことある？じゃあ触れたことは？」 無限階段、またの名をペンローズの階段は上り続けると初めの位置に戻ってしまう不思議な騙し絵です。 このモチーフは無限のモチーフとして、エッシャーをはじめ多くの芸術家を魅了してきました。 従来の騙し絵は視覚的に楽しむものであり、触覚や固有感覚などのモダリティが重視されていませんでした。 そこで、本作品はVRを用いて無限階段に触ることができる体験を制作しました。 ぜひ、身体を通じて騙し絵体験をしてください。`,
            en: "",
        },
        imagePath: "/works/Tangible_Impossible_Object.jpg",
    },
] as const satisfies WorkData[];
