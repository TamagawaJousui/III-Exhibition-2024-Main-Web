import Image from "next/image";

import { SnsData, TeaserInfo } from "./model";

import { SectionContainer } from "@/components/shared/Container";
import { Icon } from "@/components/shared/Icon";

import { styles } from "./Teaser.css";

const TeaserInfoList = [
    { item: "日程", info: "11月 7日 (木) 〜 11日 (月)" },
    { item: "場所", info: "オープンスタジオ" },
] as const satisfies TeaserInfo[];

const snsLinks = [
    {
        href: "https://twitter.com/iiiexhibition",
        src: "footer/x.svg",
        text: "X",
    },
    {
        href: "https://facebook.com/iiiexhibition",
        src: "footer/facebook.svg",
        text: "フェイスブック",
    },
    {
        href: "https://instagram.com/iiiexhibition",
        src: "footer/instagram.svg",
        text: "インスタグラム",
    },
] as const satisfies SnsData[];

export const TeaserSection = () => (
    <SectionContainer title="COMING SOON">
        <div className={styles.root}>
            <Icon src="/bg/circle.png" align="left" className={styles.icon} />
            <div className={styles.content}>
                <h4>2024年度 東京大学 制作展 開催決定</h4>
                <dl>
                    {TeaserInfoList.map((data) => (
                        <div key={data.item}>
                            <dt>{data.item}</dt>
                            <dd>{data.info}</dd>
                        </div>
                    ))}
                </dl>
                <p>↓各種SNSはこちら↓</p>
                <ul className={styles.ul}>
                    {snsLinks.map(({ href, src, text }) => (
                        <li key={href}>
                            <a target="_blank" href={href} title={`${text}へのリンク`}>
                                <Image src={src} alt={`${text}のアイコン`} height={24} width={24} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <Icon src="/bg/question.png" align="right" className={styles.icon} />
        </div>
    </SectionContainer>
);
