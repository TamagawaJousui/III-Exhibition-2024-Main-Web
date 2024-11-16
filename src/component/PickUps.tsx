import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { workList as slides } from "@/models/works";
import { IoLocationSharp } from "react-icons/io5";

export default function PickUps() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ playOnInit: true, delay: 1000 }),
  ]);
  return (
    <>
      <div className="text-2xl text-primary font-serif font-extrabold border-b-[1px] border-line">
        ピックアップ
      </div>
      <div className="h-2"></div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div
              className="flex-[0_0_100%] min-w-0"
              key={`${slide.title}-${slide.place}`}
            >
              <div className="bg-pickup-background rounded-3xl">
                <div className="relative w-full aspect-square bg-primary rounded-3xl">
                  <img
                    src={slide.imagePath}
                    alt={`works image of ${slide.title}`}
                    className="w-full aspect-square rounded-3xl"
                  />
                  <img
                    src="/works/random_texture.webp"
                    alt="random texture"
                    className="absolute top-0 left-0 w-full aspect-square rounded-3xl"
                  />
                </div>
                <div className="px-4 pt-4 text-pickup-text h-[200px]">
                  <div className="pb-2 font-works-title italic text-2xl border-b-[1px] border-pickup-text w-fit">
                    {slide.title}
                  </div>
                  <p className="pt-2 font-gothic text-base max-w-[70%]">
                    {slide.member.map((member, index) => (
                      <span key={member} className="break-keep">
                        {index > 0 && " /\u200B "}
                        {member}
                      </span>
                    ))}
                  </p>
                  <p className="pt-4 pb-2 flex items-center">
                    <IoLocationSharp className="text-white" />
                    <span className="pl-2 font-gothic text-sm text-[#5e5e5e]">
                      {slide.place}
                    </span>
                  </p>
                  <div className="flex justify-end pb-4 pr-4">
                    <div className="text-base font-serif text-center w-24 bg-white rounded-full">
                      詳細を見る
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
