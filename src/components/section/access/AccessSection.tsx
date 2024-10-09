import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

import { trainInfo } from "@/models/access";
import { WithTitle } from "@/utils/hocs/WithTitle";
import { WithWordBreak } from "@/utils/hocs/WithWordBreak";

import { SectionContainer } from "@/components/shared/Container";

import { styles } from "./AccessSection.css";

const withTitleConfig = {
    fit: true,
    mobileAlign: "center",
} as const;

export const AccessSection: FC = () => (
    <SectionContainer id="access" title="ACCESS" className={styles.root}>
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
                <b>東京大学本郷キャンパス</b>
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

        <WithTitle title="公共交通機関によるアクセス" {...withTitleConfig} className={styles.item}>
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
                    情報学環・学環情報学府が
                    <wbr />
                    主催しております。
                </p>
                <p>
                    (お問い合わせ : <wbr />
                    utokyo.iii.exhibition@gmail.com)
                </p>
            </WithWordBreak>
        </WithTitle>
    </SectionContainer>
);
