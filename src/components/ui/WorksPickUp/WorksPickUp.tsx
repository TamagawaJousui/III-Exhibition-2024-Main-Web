import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";

import { Content } from "./Content";

import { WorkData } from "@/components/section/works/model";

import { styles } from "./WorksPickUp.css";

type PropType = {
    slides: WorkData[];
};

const options = { align: "start", loop: true } as const satisfies EmblaOptionsType;

export const WorksPickUp: React.FC<PropType> = ({ slides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Fade(),
        Autoplay({ playOnInit: true, delay: 3000 }),
    ]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurrentIndex(emblaApi.selectedScrollSnap()); // Get the current index
    }, [emblaApi]);
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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (!autoplay) return;

        if (isModalOpen || isHovering) {
            autoplay.stop();
        } else {
            autoplay.play();
        }
    }, [emblaApi, isModalOpen, isHovering]);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on("select", onSelect);
            onSelect();
        }
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (!autoplay) return;
        setIsPlaying(autoplay.isPlaying());
        emblaApi
            .on("autoplay:play", () => setIsPlaying(true))
            .on("autoplay:stop", () => setIsPlaying(false))
            .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
    }, [emblaApi, onSelect]);

    return (
        <div
            className={styles.embla}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className={styles.emblaViewport} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {slides.map((slide) => (
                        <div className={styles.emblaSlide} key={`${slide.title}-${slide.place}`}>
                            <Content
                                data={slides[currentIndex]}
                                setIsModalOpen={setIsModalOpen}
                                className={styles.emblaSlideContent}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
