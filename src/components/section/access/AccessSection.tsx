import Image from "next/image";
import { FC } from "react";

import { trainInfo } from "@/models/access";

// const withTitleConfig = {
//     fit: true,
//     mobileAlign: "center",
// } as const;

export const AccessSection: FC = () => (
    <>
        {/* <SectionContainer id="access" title="ACCESS" className={styles.root}>
            <div className={clsx(styles.mapContainer, styles.item)}>
                <Image
                    src="/access/map.png"
                    alt="access map"
                    fill
                    style={{ objectFit: "contain" }}
                    className={styles.map}
                />
            </div>
            <WithTitle title="会場" {...withTitleConfig} className={styles.item}>
                <WithWordBreak className={styles.info} align="flexible" as="div">
                    <h4>東京大学本郷キャンパス</h4>
                    <p>工学部2号館</p>
                    <p>
                        情報学環本館 <wbr />
                        地下1階 <wbr />
                        情報学環オープンスタジオ
                    </p>
                </WithWordBreak>
            </WithTitle>
            <WithTitle title="日時" {...withTitleConfig} className={styles.item}>
                <WithWordBreak className={styles.info} align="flexible" as="div">
                    <p>
                        2024/11/7(木) <wbr />- 11/11(月)
                    </p>
                    <p>
                        11:00 - 19:00 <wbr />
                        (最終日17:00閉場)
                    </p>
                </WithWordBreak>
            </WithTitle>

            <WithTitle
                title="公共交通機関によるアクセス"
                {...withTitleConfig}
                className={styles.item}
            >
                <WithWordBreak className={styles.info} align="flexible" as="div">
                    {trainInfo.map((data) => (
                        <p key={data.line}>
                            {data.line} <wbr /> {data.station} より 徒歩{data.time}分
                        </p>
                    ))}
                </WithWordBreak>
            </WithTitle>

            <WithTitle title="お問い合わせ" {...withTitleConfig} className={styles.item}>
                <WithWordBreak className={styles.info} align="flexible" as="div">
                    <p>
                        本展覧会は東京大学
                        <wbr />
                        情報学環・学際情報学府が
                        <wbr />
                        主催しております。
                    </p>
                    <p>
                        (お問い合わせ : <wbr />
                        utokyo.iii.exhibition@gmail.com)
                    </p>
                </WithWordBreak>
            </WithTitle>
        </SectionContainer> */}
        <section
            id="access"
            className="flex flex-col w-full min-h-screen p-[2rem] py-6 md:w-screen"
        >
            <h1 className="font-normal">ACCESS</h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-flow-col">
                <div className="relative aspect-video">
                    <Image src="/access/map.png" alt="access map" fill />
                </div>
                <div className="text-center">
                    <h3 className="access-title">会場</h3>
                    <h4 className="font-gothic pt-3 text-2xl font-bold">東京大学本郷キャンパス</h4>
                    <div className="font-gothic flex flex-row gap-10 justify-center pt-2 font-light text-lg whitespace-nowrap">
                        <div className="flex flex-col gap-2 items-end justify-between ">
                            <div>工学部2号館</div>
                            <div>情報学環本館</div>
                        </div>
                        <div className="flex flex-col gap-2 items-start">
                            <div className="flex flex-col items-start">
                                <div>フォーラム（2階）・ 展示室（2階）</div>
                                <div>Sky Presentation Room（9階）</div>
                            </div>
                            <div>情報学環オープンスタジオ（地下1階）</div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="access-title">日時</h3>
                    <div className="font-gothic font-light text-lg pt-3">
                        <div>2024/11/7(木) - 11/11(月)</div>
                        <div>11:00 - 19:00 (最終日17:00閉場)</div>
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="access-title">公共交通機関によるアクセス</h3>
                    <div className="font-gothic font-light text-lg pt-3">
                        {trainInfo.map((data) => (
                            <div key={data.line}>
                                {data.line} {data.station} より 徒歩{data.time}分
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="access-title">お問い合わせ</h3>
                    <div>
                        <div className="font-gothic">
                            本展覧会は東京大学情報学環・学際情報学府が主催しております。
                        </div>
                        <div className="font-gothic">
                            (お問い合わせ : utokyo.iii.exhibition@gmail.com)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);
