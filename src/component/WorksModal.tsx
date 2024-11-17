import { WorkData } from "@/models/works";
import { useEffect, useRef } from "react";
import { LiaWindowCloseSolid } from "react-icons/lia";
import { IoLocationSharp } from "react-icons/io5";

interface WorksModalProps {
  visible: boolean;
  workData: WorkData;
  onClose: () => void;
}

export default function WorksModal({
  visible,
  workData,
  onClose,
}: WorksModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    const handleClose = () => {
      if (!visible) return;
      onClose();
    };

    dialog.addEventListener("close", handleClose);

    if (visible) {
      dialog.showModal();
    } else {
      dialog.close();
    }
    return () => {
      dialog.removeEventListener("close", handleClose);
    };
  });

  return (
    <dialog
      ref={dialogRef}
      className="aspect-[0.5] max-h-[90vh] w-full bg-works-modal-background outline-none backdrop:bg-black/50 backdrop:backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="flex size-full flex-col px-[8%] py-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          {/* Title */}
          <div className="h-1 bg-works-modal-line" />
          <div className="mt-2 h-px bg-works-modal-line" />
          <div className="mt-3 flex flex-row justify-between">
            <div className="w-[15%] border-r border-works-modal-line" />
            <h2 className="mx-2 break-keep bg-works-modal-line px-2 text-center font-works-title text-lg text-works-modal-background">
              {workData.title}
            </h2>
            <div className="flex w-[15%] items-start justify-end border-l border-works-modal-line">
              <LiaWindowCloseSolid className="fill-works-modal-line stroke-[0.5px]" />
            </div>
          </div>
          <div className="mt-3 h-px bg-works-modal-line" />
        </div>
        {/* Place */}
        <div className="flex flex-col pt-2">
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

        {/* Content */}
        <div className="flex flex-col pt-8">
          <div className="border-b border-line pb-2 font-serif text-xl text-white">
            コンセプト
          </div>
          <div className="flex flex-col items-center gap-4 pt-2">
            <img
              className="w-11/12 rounded-3xl"
              src={workData.imagePath}
              alt={workData.title}
            />

            <div className="flex w-full flex-col gap-4 whitespace-pre-wrap indent-4 font-serif text-xs font-extralight text-white">
              {workData.description.ja.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
