import Image from "next/image";
import { FC } from "react";

import { trainInfo } from "@/models/access";

import { SectionContainer } from "@/components/shared/Container";

import { styles } from "./AccessSection.css";

export const AccessSection: FC = () => (
    <SectionContainer id="access" title="ACCESS">
        <div className={styles.root}>
            <div className={styles.mapContainer}>
                <Image
                    src="/access/dummy-map.png"
                    alt="access map"
                    fill
                    objectFit="contain"
                    className={styles.map}
                />
            </div>
            <div>
                <h3>会場</h3>
                <div className={styles.info}>
                    <p>東京大学本郷キャンパス</p>
                    <p>工学部2号館</p>
                    <p>情報学環本館 地下1階 情報学環オープンスタジオ</p>
                </div>
            </div>
            <div>
                <h3>日時</h3>
                <div className={styles.info}>
                    <p>2024/11/7(木) - 11/11(月)</p>
                    <p>11:00 - 19:00 (最終日17:00開場)</p>
                </div>
            </div>
            <div>
                <h3>公共交通機関によるアクセス</h3>
                <div className={styles.info}>
                    {trainInfo.map((data) => (
                        <p key={data.line}>{`${data.line} より 徒歩${data.time}分`}</p>
                    ))}
                </div>
            </div>
            <div>
                <h3>お問い合わせ</h3>
                <div className={styles.info}>
                    <p>本展覧会は東京大学 情報学環・学環情報学府が主催しております。</p>
                    <p>(お問い合わせ : utokyo.iii.exhibition@gmail.com)</p>
                </div>
            </div>
        </div>
    </SectionContainer>
);
