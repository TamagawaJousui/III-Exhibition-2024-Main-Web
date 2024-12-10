import VerticalCarousel from "./VerticalCarousel";
import { placeList } from "@/models/place";
// import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

export default function AllWorks() {
  return (
    <div className="md: mt-24 snap-start scroll-m-12 md:ml-8 md:mt-0">
      <div className="second-title border-0">全作品</div>
      <div className="flex flex-col gap-8 pt-4 md:max-w-[1800px] md:flex-row md:overflow-hidden md:pt-0">
        {placeList.map((place, index) => (
          <div
            key={place}
            className="ml-1 flex min-w-0 flex-[0_0_80%] snap-start scroll-m-12 md:flex-[0_0_400px]"
          >
            <div className="h-[80vh] w-full">
              <VerticalCarousel index={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
