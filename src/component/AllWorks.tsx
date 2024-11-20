import useEmblaCarousel from 'embla-carousel-react'
import VerticalCarousel from './VerticalCarousel'
import { placeList } from '@/models/place'
import { useEffect, useState } from 'react'
// import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

export default function AllWorks() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, skipSnaps: true }
        // [
        // WheelGesturesPlugin(),
        // ]
    )
    const [inViewCarousel, setInViewCarousel] = useState(0)

    useEffect(() => {
        if (!emblaApi) {
            return
        }
        emblaApi.on('select', () => {
            setInViewCarousel(emblaApi.selectedScrollSnap())
        })
    }, [emblaApi])
    return (
        <div className="mt-24 h-[90dvh] snap-start scroll-m-4">
            <div className="second-title border-0">全作品</div>
            <div className="mt-2 overflow-hidden" ref={emblaRef}>
                <div className="-ml-1 flex touch-pan-y touch-pinch-zoom">
                    {placeList.map((place, index) => (
                        <div
                            key={place}
                            className="ml-1 flex min-w-0 flex-[0_0_80%]"
                        >
                            <div className="h-[85dvh] w-full">
                                <VerticalCarousel
                                    index={index}
                                    inView={inViewCarousel === index}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
