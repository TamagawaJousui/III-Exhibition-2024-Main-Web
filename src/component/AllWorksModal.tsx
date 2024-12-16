import { workList } from "@/models/works";
import { placeList, placeColorPalette } from "@/models/place";
import { useModalStore } from "@/store/modalStore";
import { useEffect, useRef } from "react";
import clsx from "clsx";

export default function AllWorksModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { isGalleryModalOpen, closeGalleryModal, openModal } = useModalStore();

  useEffect(() => {
    if (!dialogRef.current) {
      return;
    }

    const dialog = dialogRef.current;
    if (isGalleryModalOpen && !dialog.open) {
      document.documentElement.classList.add(
        "bg-scrolling-element-when-modal-active"
      );
      history.replaceState(null, "", "/workslist");
      dialog.showModal();
      dialog.scrollTop = 0;
    } else if (!isGalleryModalOpen && dialog.open) {
      document.documentElement.classList.remove(
        "bg-scrolling-element-when-modal-active"
      );
      history.replaceState(null, "", "/");
      dialog.close();
    }
  }, [isGalleryModalOpen, closeGalleryModal]);

  // handle esc key caused close
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    const removeClassOnClose = () => {
      document.documentElement.classList.remove(
        "bg-scrolling-element-when-modal-active"
      );
      history.replaceState(null, "", "/");
      if (isGalleryModalOpen) {
        closeGalleryModal();
      }
    };

    dialog.addEventListener("cancel", removeClassOnClose);
    return () => {
      dialog.removeEventListener("cancel", removeClassOnClose);
    };
  }, [isGalleryModalOpen, closeGalleryModal]);

  return (
    <dialog
      ref={dialogRef}
      className="max-h-screen w-full max-w-none overflow-y-auto overscroll-contain outline-none"
    >
      <div className="all-works-bg-gradient font-serif text-primary">
        <div className="section-title">WORKS</div>
        <div className="flex flex-col items-center gap-12 py-12 xl:flex-row xl:items-start xl:justify-around xl:gap-x-2">
          {placeList.map((place, index) => (
            <div className="w-11/12 xl:w-[300px] 2xl:w-[350px]" key={place}>
              <div className="relative size-full border border-divider-line">
                {/* title */}
                <div
                  className={clsx(
                    "flex h-12 w-full items-center justify-center",
                    "bg-" + placeColorPalette[placeList[index]]
                  )}
                >
                  <div
                    className={`whitespace-pre-wrap text-center font-serif font-medium text-primary ${
                      place === placeList[2] ? "text-base leading-4" : "text-xl"
                    } `}
                  >
                    {place.replace("・", "\n")}
                  </div>
                </div>
                {/* works */}
                <div className="grid grid-cols-1 gap-16 py-8 sm:grid-cols-2 sm:gap-x-2 lg:grid-cols-3  xl:grid-cols-1">
                  {workList
                    .filter((work) => work.place === place)
                    .map((work) => (
                      <div
                        key={work.workId}
                        className="flex flex-col items-center gap-2 [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]"
                      >
                        <img
                          src={work.imagePath}
                          alt={work.title}
                          className="max-w-64 rounded-3xl transition-all duration-300 hover:scale-105"
                          onClick={() => openModal(work.workId)}
                        />
                        <div className="break-keep text-center">
                          {work.title}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
}
