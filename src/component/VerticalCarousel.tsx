import useEmblaCarousel from 'embla-carousel-react'

interface VerticalCarouselProps {
    index: number
}

export default function VerticalCarousel({ index }: VerticalCarouselProps) {
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
                return '[工学部2号館9F 92B教室]'
            case 3:
                return '[情報学環オープンスタジオ]'
            default:
                return '[工学部2号館2F フォーラム]'
        }
    }

    const place = getPlace(index)
    const bgColor = getBgColor(index)

    const [emblaRef] = useEmblaCarousel({ axis: 'y' })

    return (
        <div className="size-full border border-divider-line">
            <div
                className={`h-12 w-full ${bgColor} flex items-center justify-center`}
            >
                <div className="font-serif text-xl font-medium text-works-carousel-title">
                    {place}
                </div>
            </div>
            {/* embla__viewport */}
            <div
                className="flex h-[calc(100%-3rem)] w-full items-center justify-center overflow-hidden"
                ref={emblaRef}
            >
                {/* embla__container */}
                <div className="flex h-5/6 w-full touch-pan-x touch-pinch-zoom flex-col items-center">
                    {[0, 1, 2, 3, 5, 6, 7, 8].map((number) => (
                        <div
                            key={number}
                            className="flex min-w-0 flex-[0_0_30%]"
                        >
                            <div className="size-36 bg-primary/60">
                                {number}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
