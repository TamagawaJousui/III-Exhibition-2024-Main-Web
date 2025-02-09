import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { workList as slides } from "@/models/works";
import { IoLocationSharp } from "react-icons/io5";
import { useModalStore } from "@/store/modalStore";

export default function PickUps() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({
      playOnInit: true,
      delay: 3000,
      stopOnInteraction: false,
    }),
  ]);
  const { openModal } = useModalStore();

  const onModalClose = () => {
    if (!emblaApi) {
      return;
    }
    emblaApi.plugins().autoplay.play();
  };

  const showModalDetail = () => {
    if (!emblaApi) {
      return;
    }
    emblaApi.plugins().autoplay.stop();

    const workId = slides[emblaApi.selectedScrollSnap()].workId;
    openModal(workId, onModalClose);
  };

  return (
    <div className="flex w-full flex-col items-center md:max-w-screen-sm md:items-start">
      <div className="second-title w-full max-w-[min(calc(50svh),768px,100%)] snap-start scroll-m-2 md:snap-none">
        ピックアップ
      </div>
      <div className="h-2"></div>
      <div className="max-w-[min(calc(50svh),768px,100%)] transition-all duration-300 hover:scale-[101%] md:short:max-w-80">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide) => (
              <div
                className="flex min-w-0 flex-[0_0_100%] justify-center"
                key={`${slide.title}-${slide.place}`}
                onClick={showModalDetail}
              >
                <div className="max-w-[min(calc(50svh),768px,100%)] rounded-3xl bg-pickup-background md:short:max-w-80">
                  <div className="relative aspect-square w-full rounded-3xl">
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
                  <div className="flex h-52 flex-col justify-between px-4 pt-4 text-pickup-text md:short:h-56">
                    <div>
                      <div className="pickup-title">{slide.title}</div>
                      <p className="pickup-member">
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
      </div>
    </div>
  );
}
