import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

import { trainInfo } from "@/models/access";
import { WithTitle } from "@/utils/hocs/WithTitle";

import { SectionContainer } from "@/components/shared/Container";

import { styles } from "./AccessSection.css";

export const AccessSection: FC = () => (
    <SectionContainer id="access" title="ACCESS" className={styles.root}>
        <div className={clsx(styles.mapContainer, styles.item)}>
            <Image
                src="/access/map.png"
                alt="access map"
                fill
                objectFit="contain"
                className={styles.map}
            />
        </div>
        <WithTitle title="会場" size="xl" fit mobileAlign="center" className={styles.item}>
            <div className={styles.info}>
                <p>東京大学本郷キャンパス</p>
                <p>工学部2号館</p>
                <p>
                    情報学環本館 <wbr />
                    地下1階 <wbr />
                    情報学環オープンスタジオ
                </p>
            </div>
        </WithTitle>
        <WithTitle title="日時" size="xl" fit mobileAlign="center" className={styles.item}>
            <div className={styles.info}>
                <p>
                    2024/11/7(木) <wbr />- 11/11(月)
                </p>
                <p>
                    11:00 - 19:00 <wbr />
                    (最終日17:00閉場)
                </p>
            </div>
        </WithTitle>

        <WithTitle
            title="公共交通機関によるアクセス"
            size="xl"
            fit
            mobileAlign="center"
            className={styles.item}
        >
            <div className={styles.info}>
                {trainInfo.map((data) => (
                    <p key={data.line}>
                        {data.line} <wbr /> {data.station} より 徒歩{data.time}分
                    </p>
                ))}
            </div>
        </WithTitle>

        <WithTitle title="お問い合わせ" size="xl" fit mobileAlign="center" className={styles.item}>
            <div className={styles.info}>
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
            </div>
        </WithTitle>
    </SectionContainer>
);
