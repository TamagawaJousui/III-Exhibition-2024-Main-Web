import Image from "next/image";
import { FC } from "react";

import { trainInfo } from "@/models/access";

export const AccessSection: FC = () => (
    <section id="access" className="flex flex-col w-screen p-[2rem] py-8">
        <h1 className="font-normal">ACCESS</h1>
        <div className="w-full h-full grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-3 md:grid-flow-col md:gap-4 xl:gap-8">
            <div className="flex justify-center items-center md:col-span-2 xl:col-span-1 xl:row-span-2">
                <Image
                    src="/access/map.png"
                    alt="access map"
                    width="5000"
                    height="2800"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="text-center md:text-left -mt-4 md:mt-0">
                <h3 className="access-title md:text-2xl">会場</h3>
                <h4 className="font-gothic pt-3 text-2xl font-bold md:text-xl">
                    東京大学本郷キャンパス
                </h4>
                <div className="font-gothic flex flex-row gap-10 justify-center pt-2 font-light text-lg whitespace-nowrap md:text-base md:justify-start md:whitespace-normal md:gap-4 ">
                    <div className="flex flex-col gap-2 items-end justify-between ">
                        <div className="break-keep">
                            工学部
                            <wbr />
                            2号館
                        </div>
                        <div>情報学環本館</div>
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                        <div className="flex flex-col items-start">
                            <div className="break-keep">
                                フォーラム（2階）・
                                <wbr />
                                展示室（2階）
                            </div>
                            <div>Sky Presentation Room（9階）</div>
                        </div>
                        <div className="break-keep">
                            情報学環オープンスタジオ
                            <wbr />
                            （地下1階）
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center md:text-left ">
                <h3 className="access-title md:text-2xl">日時</h3>
                <div className="font-gothic font-light text-lg pt-3 md:text-base">
                    <div>2024/11/7(木) - 11/11(月)</div>
                    <div>11:00 - 19:00 (最終日17:00閉場)</div>
                </div>
            </div>
            <div className="text-center md:text-left">
                <h3 className="access-title md:text-2xl">公共交通機関によるアクセス</h3>
                <div className="font-gothic font-light text-lg pt-3 md:text-base">
                    {trainInfo.map((data) => (
                        <div key={data.line}>
                            {data.line} {data.station} より 徒歩{data.time}分
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center md:text-left">
                <h3 className="access-title md:text-2xl">お問い合わせ</h3>
                <div className="pt-3 font-light text-lg  md:text-base">
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
);
