import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { placeList, placeColorPalette } from "@/models/place";
import { workList } from "@/models/works";
import { useModalStore } from "@/store/modalStore";

interface VerticalCarouselProps {
  // should be 0-3
  index: number;
}

export default function VerticalCarousel({ index }: VerticalCarouselProps) {
  const place = placeList[index];
  const bgColor = `bg-${placeColorPalette[place]}`;
  const progressBarRef = useRef<HTMLDivElement>(null);
  const slides = workList.filter((work) => work.place === place);
  const { openModal } = useModalStore();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const workId = slides[selectedIndex].workId;

  const showModalDetail = () => {
    openModal(workId);
  };

  const workName = slides[selectedIndex].title;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y",
    skipSnaps: true,
  });

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return;
    const selectedScrollSnap = emblaApi.selectedScrollSnap();
    const slidesCount = emblaApi.slideNodes().length;

    // Update progress bar position
    if (progressBarRef.current) {
      const actualProgress = (selectedScrollSnap - 2) / (slidesCount - 5);

      const topPosition = actualProgress * 75;
      progressBarRef.current.style.top = `${topPosition}%`;
    }

    // scroll back when overscroll
    if (selectedScrollSnap <= 1) {
      emblaApi.scrollTo(2);
      return;
    } else if (selectedScrollSnap >= slidesCount - 2) {
      emblaApi.scrollTo(slidesCount - 3);
      return;
    }

    // Set default state for all slides
    emblaApi.slideNodes().forEach((slide) => {
      slide.style.transform = "rotateX(0deg)";
      slide.style.transition = "all 0.3s ease";
      slide.style.opacity = "0.1";
      slide.style.transformOrigin = "center center";
    });

    // Current slide
    const selectedSlide = emblaApi.slideNodes()[selectedScrollSnap];
    selectedSlide.style.transform = "rotateX(0deg)";
    selectedSlide.style.opacity = "1";

    // Previous slides (transform from bottom)
    if (selectedScrollSnap > 0) {
      const prev1 = emblaApi.slideNodes()[selectedScrollSnap - 1];
      prev1.style.transformOrigin = "center bottom";
      prev1.style.transform = "rotateX(20deg)";
      prev1.style.opacity = "0.4";

      if (selectedScrollSnap > 1) {
        const prev2 = emblaApi.slideNodes()[selectedScrollSnap - 2];
        prev2.style.transformOrigin = "center 145%";
        prev2.style.transform = "rotateX(40deg)";
        prev2.style.opacity = "0.4";
      }
    }

    // Next slides (transform from top)
    if (selectedScrollSnap < slidesCount - 1) {
      const next1 = emblaApi.slideNodes()[selectedScrollSnap + 1];
      next1.style.transformOrigin = "center top";
      next1.style.transform = "rotateX(-20deg)";
      next1.style.opacity = "0.4";

      if (selectedScrollSnap < slidesCount - 2) {
        const next2 = emblaApi.slideNodes()[selectedScrollSnap + 2];
        next2.style.transformOrigin = "center -45%";
        next2.style.transform = "rotateX(-40deg)";
        next2.style.opacity = "0.4";
      }
    }

    setSelectedIndex(selectedScrollSnap - 2);
  }, []);
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    setTimeout(() => {
      emblaApi.scrollTo(4);
    }, 300);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative size-full border border-divider-line">
      {/* title */}
      <div
        className={`h-12 w-full ${bgColor} flex items-center justify-center`}
      >
        <div
          className={`whitespace-pre-wrap text-center font-serif font-medium text-primary ${
            place === placeList[2] ? "text-base leading-4" : "text-xl"
          } `}
        >
          {place.replace("・", "\n")}
        </div>
      </div>
      {/* embla__viewport */}
      <div className="h-[calc(100%-6rem)] w-full">
        <div
          className="flex size-full items-center justify-center overflow-hidden perspective-origin-center perspective-400"
          ref={emblaRef}
        >
          {/* embla__container */}
          <div className="flex h-1/3 w-full flex-col items-center transform-style-3d">
            <PlaceHolder />
            <PlaceHolder />
            {slides.map((slide) => (
              <div
                key={slide.title}
                className="my-1 flex min-h-0 w-full flex-[0_0_100%] items-center justify-center"
                onClick={showModalDetail}
              >
                <div className="relative aspect-square h-full rounded-3xl">
                  <img
                    src={slide.imagePath}
                    alt={slide.title}
                    className="rounded-3xl"
                  />
                </div>
              </div>
            ))}
            <PlaceHolder />
            <PlaceHolder />
          </div>
          {/* progress bar */}
          <div className="absolute right-4 flex h-full flex-col justify-center">
            <div className="flex h-2/5 flex-col items-center justify-between gap-4">
              {/* up arrow */}
              <div className="size-5 text-works-carousel-progress">
                <svg
                  viewBox="0 0 14 11"
                  fill="none"
                  onClick={() => emblaApi?.scrollPrev()}
                >
                  <path
                    d="M10.8672 7.13281L6.67264 2.4005L2.47809 7.13281"
                    stroke="currentColor"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    className="drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.25)]"
                  />
                </svg>
              </div>

              {/* dots container */}
              <div className="relative flex flex-1 flex-col justify-between gap-1">
                {/* moving line */}
                <div
                  ref={progressBarRef}
                  className="absolute left-1/2 z-10 h-1/4 w-1 -translate-x-1/2 rounded-full bg-works-carousel-progress-line"
                  style={{
                    top: "0%",
                    transition: "top 0.3s ease",
                  }}
                />

                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="size-1 rounded-full bg-works-carousel-progress drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.25)]"
                  ></div>
                ))}
              </div>

              {/* down arrow */}
              <div
                className="flex size-5 flex-col justify-end text-works-carousel-progress"
                onClick={() => emblaApi?.scrollNext()}
              >
                <svg viewBox="0 0 14 11" fill="none">
                  <path
                    d="M2.47809 2.4005L6.67264 7.13281L10.8672 2.4005"
                    stroke="currentColor"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    className="drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.25)]"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="flex h-12 w-full items-center justify-center">
        <div className="size-1 rounded-full bg-works-carousel-progress drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.25)]"></div>
        <div className="second-title-stroke mx-2 break-keep text-center font-works-title text-lg font-bold italic text-white">
          {workName}
        </div>
        <div className="size-1 rounded-full bg-works-carousel-progress drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.25)]"></div>
      </div>
    </div>
  );
}

const PlaceHolder = () => {
  return (
    <div className="flex min-h-0 w-full flex-[0_0_100%] items-center justify-center">
      <div className="relative aspect-square h-full rounded-3xl"></div>
    </div>
  );
};
