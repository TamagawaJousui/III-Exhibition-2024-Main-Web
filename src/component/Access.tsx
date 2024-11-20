// import map from '@/assets/access/map.webp'
// import { trainInfo } from '@/models/access'

export default function Access() {
    return (
        <section className="section-container md:w-screen md:h-screen md:overflow-hidden">
            <div className="section-title">ACCESS</div>
            {/* <div className="section-content">
                <div className="grid h-fit w-full grid-cols-1 gap-8 text-primary md:grid-flow-col md:grid-cols-2 md:grid-rows-3 md:gap-4 xl:gap-8">
                    <div className="flex items-center justify-center md:col-span-2 xl:col-span-1 xl:row-span-2">
                        <img
                            src={map}
                            alt="map"
                            className="h-full w-full object-contain md:max-h-[25vw]"
                        />
                    </div>
                    <div className="-mt-4 text-center md:mt-0 md:text-left">
                        <h3 className="access-title md:text-2xl">会場</h3>
                        <h4 className="pt-3 font-gothic text-2xl font-bold md:text-xl">
                            東京大学本郷キャンパス
                        </h4>
                        <div className="flex flex-row justify-center gap-10 whitespace-nowrap pt-2 font-gothic text-lg font-light md:justify-start md:gap-4 md:whitespace-normal md:text-base">
                            <div className="flex flex-col items-end justify-between gap-2">
                                <div className="break-keep">
                                    工学部
                                    <wbr />
                                    2号館
                                </div>
                                <div>情報学環本館</div>
                            </div>
                            <div className="flex flex-col items-start gap-2">
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
                    <div className="text-center md:text-left">
                        <h3 className="access-title md:text-2xl">日時</h3>
                        <div className="pt-3 font-gothic text-lg font-light md:text-base">
                            <div>2024/11/7(木) - 11/11(月)</div>
                            <div>11:00 - 19:00 (最終日17:00閉場)</div>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="access-title md:text-2xl">
                            公共交通機関によるアクセス
                        </h3>
                        <div className="pt-3 font-gothic text-lg font-light md:text-base">
                            {trainInfo.map((data) => (
                                <div key={data.line}>
                                    {data.line} {data.station} より 徒歩
                                    {data.time}分
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="access-title md:text-2xl">
                            お問い合わせ
                        </h3>
                        <div className="pt-3 text-lg font-light md:text-base">
                            <div className="font-gothic">
                                本展覧会は東京大学情報学環・学際情報学府が主催しております。
                            </div>
                            <div className="font-gothic">
                                (お問い合わせ : utokyo.iii.exhibition@gmail.com)
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}
