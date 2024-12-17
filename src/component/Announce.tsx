import announce from "@/assets/announce/announce.webp";
import { LuExternalLink } from "react-icons/lu";
export default function Announce() {
  return (
    <section className="section-container md:w-screen" id="ANNOUNCE">
      <div className="section-title">ANNOUNCE</div>
      <div className="section-content md:pt-16">
        <div className="second-title w-fit text-2xl">
          東京大学制作展クリエイターズ基金設置のお知らせ
        </div>
        <div className="flex items-start justify-start pt-4">
          <img
            src={announce}
            alt="announce"
            className="max-h-40 w-auto rounded-xl object-contain"
          />
        </div>
        <div className="flex flex-col gap-8 pt-8 font-gothic text-base  text-primary md:text-lg">
          <p>
            この度、東京大学制作展は企画や運営、制作活動を担う学生たちの活動の幅を広げ、支援することを目的とする新たな基金を設置いたします。
          </p>
          <p>
            2024年度東京大学制作展では参加学生一同、皆様からご支援をいただけるような素晴らしい展覧会を意欲的に企画しています。
          </p>
          <p>
            東京大学制作展クリエイターズ基金へ、ぜひご協力をお願いいたします。
          </p>
          <p>
            <a
              href="https://utf.u-tokyo.ac.jp/project/pjt187"
              target="_blank"
              className="underline"
            >
              <LuExternalLink className="mr-1 inline-block text-xl" />
              基金運営サイト
            </a>
            から詳細をご確認いただけます。
          </p>
        </div>
      </div>
    </section>
  );
}
