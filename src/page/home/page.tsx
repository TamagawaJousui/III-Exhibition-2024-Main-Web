"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import { sectionInfo } from "@/models"; // Assuming sectionInfo is typed

import { HeroareaSection } from "@/components/section/heroarea";
import { Header } from "@/components/shared/Header";
import { RegisterButton } from "@/components/ui/RegisterButton";
import { useWorksModal } from "@/components/ui/WorksModal";

import { breakpoint } from "@/styles";

import { styles } from "./page.css";

gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
    const { isOpen, renderModal } = useWorksModal();
    const component = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (window.innerWidth > breakpoint.mobile) {
            const ctx = gsap.context(() => {
                if (slider.current) {
                    const sections = gsap.utils.toArray<HTMLDivElement>(slider.current.children);
                    /**
                     * NOTE: 子要素の幅を取得しているが，明示的にスタイリングを当てないと計算に含まれないので注意
                     */
                    const getTotalWidth = () =>
                        sections.reduce((width, el) => width + el.offsetWidth, 0);

                    let snap: (value: number) => number;

                    if (sections.length) {
                        gsap.to(sections, {
                            x: () => -(getTotalWidth() - window.innerWidth), // セクション全体の幅に基づいて移動
                            ease: "none",
                            scrollTrigger: {
                                trigger: component.current,
                                pin: true,
                                scrub: true,
                                snap: {
                                    snapTo: (value) => {
                                        const threshold = 0.05;
                                        const closestSnapPoint = snap(value); // 最も近いスナップポイントを計算

                                        /**
                                         * NOTE: スナップポイントとの差がしきい値以内の場合のみスナップ
                                         * TODO: 利用を検討・UX検討
                                         */
                                        if (Math.abs(closestSnapPoint - value) <= threshold) {
                                            return closestSnapPoint; // スナップ
                                        } else {
                                            return value; // スナップせず、そのままの位置にとどまる
                                        }
                                    },
                                    duration: { min: 0.4, max: 0.7 },
                                    delay: 0.01,
                                    ease: "sine.inOut",
                                },
                                end: () =>
                                    "+=" + (component.current!.scrollWidth - window.innerWidth), // スクロール終了を全体の幅に基づいて設定
                                invalidateOnRefresh: true,
                                onRefresh: () => {
                                    let accumulatedWidth = 0;

                                    // スナップポイントを動的に生成
                                    const progressArray = sections.map((el) => {
                                        accumulatedWidth += el.offsetWidth;
                                        return accumulatedWidth / getTotalWidth();
                                    });

                                    progressArray.unshift(0); // 最初のスナップポイントを追加
                                    snap = gsap.utils.snap(progressArray); // スナップ機能のセットアップ
                                },
                                markers: true, // デバッグ用
                            },
                        });
                    }
                }
            }, component);

            return () => ctx.revert();
        }
    }, []);

    return (
        <div className={styles.root} ref={component}>
            {isOpen && renderModal()}
            <Header className={styles.header} />
            <div className={styles.wrapper} ref={slider}>
                <div className={styles.container}>
                    <HeroareaSection />
                    {sectionInfo.map((section: (typeof sectionInfo)[number]) => (
                        <section.node key={section.id} />
                    ))}
                </div>
            </div>
            <RegisterButton className={styles.registerButton} />
        </div>
    );
};
