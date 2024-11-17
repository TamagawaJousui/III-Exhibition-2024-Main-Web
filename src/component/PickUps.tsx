import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { workList as slides, WorkData } from "@/models/works";
import { IoLocationSharp } from "react-icons/io5";
import WorksModal from "./WorksModal";
import { useState } from "react";

export default function PickUps() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({
      playOnInit: true,
      delay: 500,
      stopOnInteraction: false,
    }),
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workData, setWorkData] = useState<WorkData>(slides[0]);
  const showModalDetail = () => {
    if (!emblaApi) {
      return;
    }
    const workData = slides[emblaApi.selectedScrollSnap()];
    if (!workData) {
      return;
    }
    emblaApi.plugins().autoplay.stop();
    setWorkData(workData);
    setIsModalOpen(true);
  };
  const hideModalDetail = () => {
    if (!emblaApi) {
      return;
    }
    emblaApi.plugins().autoplay.play();
    setIsModalOpen(false);
  };
  return (
    <div className="flex max-w-screen-md flex-col items-center">
      <div className="second-title-stroke w-full border-b border-line pb-2 font-serif text-2xl font-extrabold text-primary">
        ピックアップ
      </div>
      <div className="h-2"></div>
      <div className=" overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div
              className="flex min-w-0 flex-[0_0_100%] justify-center"
              key={`${slide.title}-${slide.place}`}
              onClick={showModalDetail}
            >
              <div className="rounded-3xl bg-pickup-background">
                <div className="relative aspect-square max-h-[min(100vw,100vh,768px)] w-full rounded-3xl ">
                  <img
                    src={slide.imagePath}
                    alt={`works image of ${slide.title}`}
                    className="aspect-square w-screen rounded-3xl"
                  />
                  <img
                    src="/works/random_texture.webp"
                    alt="random texture"
                    className="absolute left-0 top-0 aspect-square w-full rounded-3xl"
                  />
                </div>
                <div className="flex h-52 flex-col justify-between px-4 pt-4 text-pickup-text md:h-48">
                  <div>
                    <div className="w-fit break-keep border-b border-pickup-text pb-2 font-works-title text-2xl italic">
                      {slide.title}
                    </div>
                    <p className="pt-2 font-gothic text-base">
                      {slide.member.map((member, index) => (
                        <span key={member} className="break-keep">
                          {index > 0 && " /\u200B "}
                          {member}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center pt-4">
                      <IoLocationSharp className="text-white" />
                      <span className="pl-2 font-gothic text-sm">
                        {slide.place}
                      </span>
                    </p>
                    <div className="flex justify-end pb-2 pt-1">
                      <div className="rounded-full bg-white px-4 py-2 text-center font-serif text-base font-medium leading-none">
                        詳細を見る
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WorksModal
        visible={isModalOpen}
        workData={workData}
        onClose={hideModalDetail}
      />
    </div>
  );
}
