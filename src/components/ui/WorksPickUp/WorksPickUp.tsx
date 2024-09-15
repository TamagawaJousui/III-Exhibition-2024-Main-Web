import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { styles } from "./WorksPickUp.css";

type PropType = {
    slides: string[];
};

const options = { align: "start", loop: true } as const satisfies EmblaOptionsType;

export const WorksPickUp: React.FC<PropType> = ({ slides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Fade(),
        Autoplay({ playOnInit: true, delay: 3000 }),
    ]);
    /**
     * 現状利用していないのでコメントアウトする
     * hover時にauto playをdisableする際などに参考に
     */
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [_, setIsPlaying] = useState(false);

    // const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    //     usePrevNextButtons(emblaApi);

    // const onButtonAutoplayClick = useCallback(
    //     (callback: () => void) => {
    //         const autoplay = emblaApi?.plugins()?.autoplay;
    //         if (!autoplay) return;

    //         const resetOrStop =
    //             autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

    //         resetOrStop();
    //         callback();
    //     },
    //     [emblaApi]
    // );

    // const toggleAutoplay = useCallback(() => {
    //     const autoplay = emblaApi?.plugins()?.autoplay;
    //     if (!autoplay) return;

    //     const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    //     playOrStop();
    // }, [emblaApi]);

    useEffect(() => {
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (!autoplay) return;

        setIsPlaying(autoplay.isPlaying());
        emblaApi
            .on("autoplay:play", () => setIsPlaying(true))
            .on("autoplay:stop", () => setIsPlaying(false))
            .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
    }, [emblaApi]);

    return (
        <div className={styles.embla}>
            <div className={styles.emblaViewport} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {slides.map((src) => (
                        <div className={styles.emblaSlide} key={src}>
                            <div className={styles.emblaSlideContent}>
                                <Image
                                    src={src}
                                    alt="works image"
                                    width={150}
                                    height={150}
                                    className={styles.emblaSlideContent}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
