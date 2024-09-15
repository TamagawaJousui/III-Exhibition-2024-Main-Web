import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";

import {
    NextButton,
    PrevButton,
    useDotButton,
    usePrevNextButtons,
} from "@/components/ui/WorksCarousel/Button";

import { styles } from "./WorksCarousel.css";

type PropType = {
    slides: string[];
};

const options = { axis: "y", align: "center" } as const satisfies EmblaOptionsType;

export const WorksCarousel: React.FC<PropType> = ({ slides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex } = useDotButton(emblaApi);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
        usePrevNextButtons(emblaApi);

    return (
        <section className={styles.embla}>
            <div className={styles.arrowButtonContainer}>
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            </div>
            <div className={styles.emblaViewport} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {slides.map((src, index) => {
                        const diff = index - selectedIndex;
                        const clampedDiff = Math.max(Math.min(diff, 2), -2).toString() as
                            | "0"
                            | "1"
                            | "2"
                            | "-2"
                            | "-1";
                        return (
                            <div
                                className={styles.emblaSlide({
                                    indexDiff: clampedDiff,
                                })}
                                key={src}
                            >
                                <Image
                                    src={src}
                                    alt="works image"
                                    width={150}
                                    height={150}
                                    className={styles.emblaSlideContent}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={styles.arrowButtonContainer}>
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
        </section>
    );
};
