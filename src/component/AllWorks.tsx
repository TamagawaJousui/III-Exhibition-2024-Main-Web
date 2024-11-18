import useEmblaCarousel from 'embla-carousel-react'
import VerticalCarousel from './VerticalCarousel'
export default function AllWorks() {
    const [emblaRef] = useEmblaCarousel({ loop: true })
    return (
        <div className="mt-24 h-[90dvh] max-w-[min(calc(50svh),640px)] snap-start scroll-m-8">
            <div className="second-title border-0">全作品</div>
            {/* in case nest embla don't work */}
            {/* <div className="mt-2 flex h-[90%] w-full snap-x snap-mandatory flex-row justify-around gap-4 overflow-x-auto">
                <div className="ml-4 w-11/12 shrink-0 snap-center bg-blue-500"></div>
                <div className="w-11/12 shrink-0 snap-center bg-green-500"></div>
                <div className="w-11/12 shrink-0 snap-center bg-red-500"></div>
                <div className="mr-4 w-11/1
                2 shrink-0 snap-center bg-yellow-500"></div>
            </div>
            <div className="text-center">Scroll For More</div> */}
            <div className="mt-2 overflow-hidden" ref={emblaRef}>
                <div className="-ml-1 flex touch-pan-y touch-pinch-zoom">
                    {[0, 1, 2, 3].map((number) => (
                        <div
                            key={number}
                            className="flex min-w-0 flex-[0_0_80%] pl-1"
                        >
                            <div className="h-[85dvh] w-full">
                                <VerticalCarousel index={number} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
