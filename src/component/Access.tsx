import map from "@/assets/access/map.webp";
import { trainInfo } from "@/models/access";

export default function Access() {
  return (
    <section className="section-container md:w-screen" id="ACCESS">
      <div className="section-title">ACCESS</div>
      <div className="section-content pt-4 md:pt-8">
        <div className="flex flex-col items-center text-center font-gothic text-primary xl:hidden">
          <img
            src={map}
            alt="map"
            className="aspect-video w-full max-w-screen-md short:w-96"
          />
          <div className="md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-10 md:pt-6 lg:gap-x-14 lg:gap-y-16">
            {/* 会場 */}
            <div className="flex flex-col items-center">
              <div className="access-title">会場</div>
              <div className="pt-3 text-xl font-bold lg:text-2xl">
                東京大学本郷キャンパス
              </div>
              <div className="ml-4 flex flex-row justify-center gap-6 pt-3 text-base font-light lg:text-lg">
                <div className="flex flex-col items-end justify-between gap-2">
                  <div className="break-keep">
                    工学部
                    <wbr />
                    2号館
                  </div>
                  <div>情報学環本館</div>
                </div>
                <div className="flex flex-col items-start justify-between gap-2">
                  <div className="flex w-full flex-col items-center">
                    <div>フォーラム（2階）</div>
                    <div>展示室（2階）</div>
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
            {/* 日時 */}
            <div className="flex flex-col items-center pt-12 md:pt-0">
              <div className="access-title">日時</div>
              <div className="pt-3 text-base font-light lg:text-lg ">
                <div>2024/11/7(木) - 11/11(月)</div>
                <div>11:00 - 19:00 (最終日17:00閉場)</div>
              </div>
            </div>
            {/* 公共交通機関によるアクセス */}
            <div className="flex flex-col items-center pt-12 md:pt-0">
              <div className="access-title">公共交通機関によるアクセス</div>
              <div className="pt-3  text-base font-light lg:text-lg">
                {trainInfo.map((data) => (
                  <div key={data.line}>
                    {data.line} {data.station} より 徒歩
                    {data.time}分
                  </div>
                ))}
              </div>
            </div>
            {/* お問い合わせ */}
            <div className="flex snap-end flex-col items-center pt-12 md:pt-0">
              <div className="access-title">お問い合わせ</div>
              <div className="pt-3 font-light ">
                <div className="">
                  本展覧会は東京大学情報学環・学際情報学府が主催しております。
                </div>
                <div className="">
                  (お問い合わせ : utokyo.iii.exhibition@gmail.com)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden gap-x-10 gap-y-16 text-center font-gothic text-primary xl:grid xl:grid-flow-col xl:auto-rows-fr xl:grid-cols-2 xl:grid-rows-3 xl:short:grid-cols-3 xl:short:grid-rows-2">
          <div className="row-span-2 flex flex-col items-start justify-center short:row-span-1">
            <img src={map} alt="map" className="w-full max-w-screen-sm" />
          </div>

          {/* 会場 */}
          <div className="flex flex-col items-start">
            <div className="access-title ">会場</div>
            <div className="pt-3 text-2xl font-bold">
              東京大学本郷キャンパス
            </div>
            <div className="flex flex-row justify-center gap-6 pt-3 text-lg font-light">
              <div className="flex flex-col items-start justify-between gap-2">
                <div className="break-keep">
                  工学部
                  <wbr />
                  2号館
                </div>
                <div>情報学環本館</div>
              </div>
              <div className="flex flex-col items-start justify-between gap-2">
                <div className="flex w-full flex-col items-start">
                  <div>フォーラム（2階）</div>
                  <div>展示室（2階）</div>
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
          {/* 日時 */}
          <div className="flex flex-col items-start pt-12 md:pt-0">
            <div className="access-title">日時</div>
            <div className="flex flex-col items-start pt-3 text-lg font-light  ">
              <div>2024/11/7(木) - 11/11(月)</div>
              <div>11:00 - 19:00 (最終日17:00閉場)</div>
            </div>
          </div>
          {/* 公共交通機関によるアクセス */}
          <div className="flex flex-col items-start pt-12 md:pt-0">
            <div className="access-title">公共交通機関によるアクセス</div>
            <div className="flex  flex-col items-start pt-3 text-lg font-light">
              {trainInfo.map((data) => (
                <div key={data.line}>
                  {data.line} {data.station} より 徒歩
                  {data.time}分
                </div>
              ))}
            </div>
          </div>
          {/* お問い合わせ */}
          <div className="flex snap-end flex-col items-start pt-12 md:pt-0">
            <div className="access-title">お問い合わせ</div>
            <div className="flex flex-col items-start pt-3 text-lg font-light">
              <div className="">
                本展覧会は東京大学情報学環・学際情報学府が主催しております。
              </div>
              <div className="">
                (お問い合わせ : utokyo.iii.exhibition@gmail.com)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
