import { workList } from "@/models/works";
import { useEffect, useRef } from "react";
import { LiaWindowCloseSolid } from "react-icons/lia";
import { IoLocationSharp, IoShareOutline } from "react-icons/io5";
import { memberMap } from "@/models/member";
import { useModalStore } from "@/store/modalStore";

export default function WorksModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { isModalOpen, currentWorkId, closeModal } = useModalStore();

  const copyLink = () => {
    const url = new URL(window.location.href);
    navigator.clipboard.writeText(
      url.origin + "/" + "?workId=" + currentWorkId
    );
    alert("リンクをコピーしました");
  };
  const workData =
    workList.find((work) => work.workId === currentWorkId) ?? workList[0];

  // handle modal open and close
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isModalOpen && !dialog.open) {
      document.documentElement.classList.add(
        "bg-scrolling-element-when-modal-active"
      );
      dialog.showModal();
      dialog.scrollTop = 0;
    } else if (!isModalOpen && dialog.open) {
      document.documentElement.classList.remove(
        "bg-scrolling-element-when-modal-active"
      );
      dialog.close();
    }
  }, [isModalOpen, closeModal]);

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
      if (isModalOpen) {
        closeModal();
      }
    };

    dialog.addEventListener("cancel", removeClassOnClose);
    return () => {
      dialog.removeEventListener("cancel", removeClassOnClose);
    };
  }, [isModalOpen, closeModal]);

  return (
    <dialog
      ref={dialogRef}
      className="w-[85%] max-w-screen-sm overscroll-contain rounded-3xl bg-works-modal-background outline-none backdrop:bg-black/50 backdrop:backdrop-blur-md 
      lg:h-[90%] lg:max-w-screen-lg lg:backdrop:bg-black/30 lg:backdrop:backdrop-blur-sm "
      onClick={closeModal}
    >
      <div
        className="flex size-full h-max flex-col px-[5%] py-8 lg:h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col">
          <div className="h-1 bg-works-modal-line" />
          <div className="mt-2 h-px bg-works-modal-line" />
          <div className="mt-3 flex flex-row justify-between">
            <div className="mr-4 w-[15%] border-r border-works-modal-line lg:mr-8 lg:w-[23%]">
              {/* Place and Link (desktop more than lg) */}
              <div className="hidden justify-between lg:flex">
                <div className="flex flex-col">
                  <div className="font-serif text-base font-extrabold tracking-[0.15rem] text-white">
                    展示場所
                  </div>
                  <div className="flex items-center pt-1 text-white">
                    <IoLocationSharp />
                    <span className="whitespace-pre-wrap  pl-2 font-serif text-sm font-extralight">
                      {workData.place.replace(
                        "情報学環オープンスタジオ",
                        "情報学環\nオープンスタジオ"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="mx-2 flex flex-1 items-center justify-center break-keep bg-works-modal-line px-2 text-center font-works-title text-lg text-works-modal-background lg:text-2xl">
              {workData.title}
            </h2>

            <div className="ml-4 flex w-[15%] items-center justify-end border-l border-works-modal-line lg:ml-8 lg:w-[23%] lg:justify-between">
              <IoShareOutline
                className="ml-4 hidden size-6 cursor-pointer text-works-modal-line transition-all duration-300 hover:scale-125 lg:block"
                onClick={copyLink}
              />
              <LiaWindowCloseSolid
                className="size-7 cursor-pointer fill-works-modal-line stroke-[0.5px] transition-all duration-300 hover:scale-110 lg:size-9"
                onClick={closeModal}
              />
            </div>
          </div>
          <div className="mt-3 h-px bg-works-modal-line" />
        </div>
        {/* Place and Link (mobile less then lg) */}
        <div className="flex justify-between pt-2 lg:hidden">
          <div className="flex flex-col">
            <div className="font-serif text-sm font-extrabold tracking-[0.15rem] text-white">
              展示場所
            </div>
            <div className="flex items-center pt-1 text-white">
              <IoLocationSharp />
              <span className="pl-2 font-serif text-xs font-extralight">
                {workData.place}
              </span>
            </div>
          </div>
          <div className="flex items-center text-white" onClick={copyLink}>
            <IoShareOutline className="size-6 cursor-pointer transition-all duration-300 hover:scale-125" />
          </div>
        </div>

        <div className="lg:flex">
          <div className="mr-10 hidden aspect-square shrink-0 items-start justify-center lg:flex ">
            <img
              className="mt-14 aspect-square w-80 rounded-3xl object-cover xl:w-96"
              src={workData.imagePath}
              alt={workData.title}
            />
          </div>

          <div>
            {/* Content */}
            <div className="flex flex-col pt-12">
              <div className="border-b border-divider-line pb-2 font-serif text-xl text-white lg:text-2xl">
                コンセプト
              </div>
              <div className="flex flex-col items-center gap-4 pt-4">
                <img
                  className="aspect-square w-11/12 rounded-3xl object-cover lg:hidden"
                  src={workData.imagePath}
                  alt={workData.title}
                />

                <div className="flex w-full flex-col gap-4 whitespace-pre-wrap indent-4 font-serif text-sm font-extralight text-white lg:text-base">
                  {workData.description.ja.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Members */}
            <div className="flex flex-col pt-12">
              <div className="border-b border-divider-line pb-2 font-serif text-xl text-white lg:text-2xl">
                メンバー
              </div>
              <div className="grid auto-cols-fr auto-rows-fr grid-cols-2 gap-3 pt-4 font-gothic">
                {workData.member.map((member) => (
                  <div key={member} className="ml-2">
                    <div className="text-sm text-works-modal-member lg:text-base">
                      {member}
                    </div>
                    <div className="flex flex-col text-xs text-works-modal-member-affiliationJa lg:text-sm">
                      {memberMap[member]?.affiliationJa
                        .split(" ")
                        .map((word, index) => <div key={index}>{word}</div>) ??
                        ""}
                      <div>
                        {memberMap[member]?.grade} {memberMap[member]?.lab}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:flex-1"></div>
        {/* Footer */}
        <div className="mt-12 flex flex-col">
          <div className="h-px bg-works-modal-line" />
          <div className="mt-2 h-1 bg-works-modal-line" />
        </div>
      </div>
    </dialog>
  );
}
