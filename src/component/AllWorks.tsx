import VerticalCarousel from "./VerticalCarousel";
import { placeList } from "@/models/place";
// import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

export default function AllWorks() {
  return (
    <div className="md: mt-24 snap-start scroll-m-12 md:ml-8 md:mt-0">
      <div className="second-title w-fit border-0">全作品</div>
      <div className="flex flex-col gap-8 pt-4 md:flex-row md:pt-0">
        {placeList.map((place, index) => (
          <div
            key={place}
            className="h-[80vh] w-full snap-start scroll-m-12 md:w-96"
          >
            <VerticalCarousel index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
