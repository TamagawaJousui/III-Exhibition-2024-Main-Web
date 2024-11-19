import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

// import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

interface VerticalCarouselProps {
    index: number
}
const getBgColor = (index: number) => {
    switch (index) {
        case 0:
            return 'bg-works-carousel-forum'
        case 1:
            return 'bg-works-carousel-exhibition'
        case 2:
            return 'bg-works-carousel-sky'
        case 3:
            return 'bg-works-carousel-open'
        default:
            return 'bg-works-carousel-forum'
    }
}

const getPlace = (index: number) => {
    switch (index) {
        case 0:
            return '[工学部2号館2F フォーラム]'
        case 1:
            return '[工学部2号館2F 展示室]'
        case 2:
            return '[工学部2号館9F Ｓｋｙ]'
        case 3:
            return '[情報学環オープンスタジオ]'
        default:
            return '[工学部2号館2F フォーラム]'
    }
}

export default function VerticalCarousel({ index }: VerticalCarouselProps) {
    const place = getPlace(index)
    const bgColor = getBgColor(index)

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            axis: 'y',
            skipSnaps: true,
            startIndex: 2,
        }
        // [WheelGesturesPlugin()]
    )

    const onSelect = useCallback(
        (emblaApi: EmblaCarouselType) => {
            if (!emblaApi) return
            const selectedScrollSnap = emblaApi.selectedScrollSnap()
            const slidesCount = emblaApi.slideNodes().length

            // 处理边界情况
            if (selectedScrollSnap <= 1) {
                emblaApi.scrollTo(2)
                return
            } else if (selectedScrollSnap >= slidesCount - 2) {
                emblaApi.scrollTo(slidesCount - 3)
                return
            }

            // Set default state for all slides
            emblaApi.slideNodes().forEach((slide) => {
                slide.style.transform = 'rotateX(0deg)'
                slide.style.transition = 'all 0.3s ease'
                slide.style.opacity = '0.1'
                slide.style.transformOrigin = 'center center'
            })

            // Current slide
            const selectedSlide = emblaApi.slideNodes()[selectedScrollSnap]
            selectedSlide.style.transform = 'rotateX(0deg)'
            selectedSlide.style.opacity = '1'

            // Previous slides (transform from bottom)
            if (selectedScrollSnap > 0) {
                const prev1 = emblaApi.slideNodes()[selectedScrollSnap - 1]
                prev1.style.transformOrigin = 'center bottom'
                prev1.style.transform = 'rotateX(20deg)'
                prev1.style.opacity = '0.4'

                if (selectedScrollSnap > 1) {
                    const prev2 = emblaApi.slideNodes()[selectedScrollSnap - 2]
                    prev2.style.transformOrigin = 'center 145%'
                    prev2.style.transform = 'rotateX(40deg)'
                    prev2.style.opacity = '0.4'
                }
            }

            // Next slides (transform from top)
            if (selectedScrollSnap < slidesCount - 1) {
                const next1 = emblaApi.slideNodes()[selectedScrollSnap + 1]
                next1.style.transformOrigin = 'center top'
                next1.style.transform = 'rotateX(-20deg)'
                next1.style.opacity = '0.4'

                if (selectedScrollSnap < slidesCount - 2) {
                    const next2 = emblaApi.slideNodes()[selectedScrollSnap + 2]
                    next2.style.transformOrigin = 'center -45%'
                    next2.style.transform = 'rotateX(-40deg)'
                    next2.style.opacity = '0.4'
                }
            }
        },
        [emblaApi]
    )

    useEffect(() => {
        if (!emblaApi) return

        emblaApi.on('select', onSelect)

        // emblaApi.scrollTo(2, true)
        onSelect(emblaApi)
        return () => {
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi])

    return (
        <div className="border-divider-line relative size-full border">
            {/* title */}
            <div
                className={`h-12 w-full ${bgColor} flex items-center justify-center`}
            >
                <div className="text-works-carousel-title font-serif text-xl font-medium">
                    {place}
                </div>
            </div>
            {/* embla__viewport */}
            <div
                className="perspective-400 perspective-origin-center flex h-[calc(100%-3rem)] w-full items-center justify-center overflow-hidden"
                ref={emblaRef}
            >
                {/* embla__container */}
                <div className="transform-style-3d flex h-1/3 w-full touch-pan-x touch-pinch-zoom flex-col items-center">
                    <PlaceHolder />
                    <PlaceHolder />
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((number) => (
                        <div
                            key={number}
                            className="my-1 flex min-h-0 w-full flex-[0_0_100%] items-center justify-center"
                        >
                            <div className="relative aspect-square h-full rounded-3xl border-2 border-green-500 bg-primary/60">
                                {number + 1}
                                <div className="absolute left-0 top-1/2 h-[2px] w-full bg-red-500"></div>
                                <div className="absolute left-1/2 top-0 h-full w-[2px] bg-red-500"></div>
                            </div>
                        </div>
                    ))}
                    <PlaceHolder />
                    <PlaceHolder />
                </div>
                {/* progress bar */}
            <div className="absolute right-6 flex h-full flex-col justify-center">
                <div className="flex flex-col items-center gap-2">
                    {/* up arrow */}
                    <div className="h-4 w-4">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 4l-8 8h16l-8-8z" />
                        </svg>
                    </div>

                    {/* vertical line */}
                    <div className="h-32 w-[2px] bg-gray-400"></div>

                    {/* dots */}
                    <div className="flex flex-col gap-1.5">
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={i}
                                className="h-1 w-1 rounded-full bg-gray-400"
                            ></div>
                        ))}
                    </div>

                    {/* down arrow */}
                    <div className="h-4 w-4">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 20l-8-8h16l-8 8z" />
                        </svg>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

const PlaceHolder = () => {
    return (
        <div className="flex min-h-0 w-full flex-[0_0_100%] items-center justify-center">
            <div className="relative aspect-square h-full rounded-3xl"></div>
        </div>
    )
}
