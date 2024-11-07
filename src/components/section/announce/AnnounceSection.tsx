import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { WithTitle } from "@/utils/hocs/WithTitle";

import { SectionContainer } from "@/components/shared/Container";

import { styles } from "./AnnounceSection.css";

const ICON_SIZE = "1.5rem";

export const AnnounceSection: FC = () => (
    <SectionContainer id="announce" title="ANNOUNCE">
        <WithTitle title="東京大学制作展クリエイターズ基金設置のお知らせ">
            <div className={styles.container}>
                <Image
                    src="/announce/announce.jpeg"
                    alt="東京大学制作展基金のイメージ画像"
                    layout="responsive"
                    width={16}
                    height={9}
                />
                <p>
                    この度、東京大学制作展は企画や運営、制作活動を担う学生たちの活動の幅を広げ、支援することを目的とする新たな基金を設置いたします。
                </p>
                <p>
                    2024年度
                    東京大学制作展では参加学生一同、皆様からご支援をいただけるような素晴らしい展覧会を意欲的に企画しています。
                </p>
                <p>東京大学制作展クリエイターズ基金へ、ぜひご協力をお願いいたします。</p>
                <p className={styles.detailText}>
                    <ArrowSquareOut size={ICON_SIZE} />
                    <Link
                        href="https://utf.u-tokyo.ac.jp/project/pjt187"
                        className={styles.linkLike}
                    >
                        基金運営サイト
                    </Link>
                    から詳細をご確認いただけます。
                </p>
            </div>
        </WithTitle>
    </SectionContainer>
);
