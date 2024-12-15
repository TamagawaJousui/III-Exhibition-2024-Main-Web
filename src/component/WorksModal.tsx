import { workList } from "@/models/works";
import { useEffect, useRef } from "react";
import { LiaWindowCloseSolid } from "react-icons/lia";
import { IoLocationSharp, IoShareSocialOutline } from "react-icons/io5";
import { memberMap } from "@/models/member";
import { useModalStore } from "@/store/modalStore";

export default function WorksModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { isModalOpen, currentWorkId, closeModal } = useModalStore();

  const copyLink = () => {
    navigator.clipboard.writeText(
      window.location.href + "?workId=" + currentWorkId
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
      closeModal();
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
      className="w-[85%] max-w-screen-sm overscroll-contain rounded-3xl bg-works-modal-background outline-none backdrop:bg-black/50 backdrop:backdrop-blur-md "
      onClick={closeModal}
    >
      <div
        className="flex size-full h-max flex-col px-[8%] py-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col">
          <div className="h-1 bg-works-modal-line" />
          <div className="mt-2 h-px bg-works-modal-line" />
          <div className="mt-3 flex flex-row justify-between">
            <div className="w-[15%] border-r border-works-modal-line" />
            <h2 className="mx-2 break-keep bg-works-modal-line px-2 text-center font-works-title text-lg text-works-modal-background">
              {workData.title}
            </h2>
            <div
              className="flex w-[15%] items-center justify-center border-l border-works-modal-line"
              onClick={closeModal}
            >
              <LiaWindowCloseSolid className="size-7 cursor-pointer fill-works-modal-line stroke-[0.5px]" />
            </div>
          </div>
          <div className="mt-3 h-px bg-works-modal-line" />
        </div>
        {/* Place and Link */}
        <div className="flex justify-between pt-2">
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
            <IoShareSocialOutline className="size-7 cursor-pointer text-works-modal-line" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col pt-12">
          <div className="border-b border-divider-line pb-2 font-serif text-xl text-white">
            コンセプト
          </div>
          <div className="flex flex-col items-center gap-4 pt-4">
            <img
              className="aspect-square w-11/12 rounded-3xl object-cover"
              src={workData.imagePath}
              alt={workData.title}
            />

            <div className="flex w-full flex-col gap-4 whitespace-pre-wrap indent-4 font-serif text-sm font-extralight text-white">
              {workData.description.ja.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Members */}
        <div className="flex flex-col pt-12">
          <div className="border-b border-divider-line pb-2 font-serif text-xl text-white">
            メンバー
          </div>
          <div className="grid auto-cols-fr auto-rows-fr grid-cols-2 gap-3 pt-4 font-gothic">
            {workData.member.map((member) => (
              <div key={member} className="ml-2">
                <div className="text-sm text-works-modal-member">{member}</div>
                <div className="flex flex-col text-xs text-works-modal-member-affiliationJa">
                  {memberMap[member]?.affiliationJa
                    .split(" ")
                    .map((word, index) => <div key={index}>{word}</div>) ?? ""}
                  <div>
                    {memberMap[member]?.grade} {memberMap[member]?.lab}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="mt-12 flex flex-col">
          <div className="h-px bg-works-modal-line" />
          <div className="mt-2 h-1 bg-works-modal-line" />
        </div>
      </div>
    </dialog>
  );
}
