import VerticalCarousel from "./VerticalCarousel";
import { placeList } from "@/models/place";
import { LuExternalLink } from "react-icons/lu";

export default function AllWorks() {
  return (
    <div className="md: mt-24 snap-start scroll-m-12 md:ml-8 md:mt-0">
      <div className="second-title w-fit border-0">
        全作品
        <a
          href="/workslist"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 cursor-pointer border-b border-primary pb-1 text-lg font-normal [-webkit-text-stroke:0] [paint-order:normal]"
        >
          (作品一覧へ
          <LuExternalLink className="ml-1 inline-block size-5 stroke-[1px]" />)
        </a>
      </div>
      <div className="flex flex-col gap-8 pt-4 md:flex-row md:pt-0">
        {placeList.map((place, index) => (
          <div
            key={place}
            className="h-[80vh] w-full snap-start scroll-m-12 md:w-96  md:short:h-[75vh]"
          >
            <VerticalCarousel index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
