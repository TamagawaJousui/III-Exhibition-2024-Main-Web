import { List, X } from "@phosphor-icons/react";
import { useRef } from "react";
export default function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpen = () => {
    if (!dialogRef.current) {
      return;
    }
    document.documentElement.classList.add(
      "bg-scrolling-element-when-modal-active"
    );
    dialogRef.current.showModal();
  };

  const handleClose = () => {
    if (!dialogRef.current) {
      return;
    }
    document.documentElement.classList.remove(
      "bg-scrolling-element-when-modal-active"
    );
    dialogRef.current.close();
  };

  const handleNavClick = (e: React.MouseEvent<HTMLSpanElement>, id: string) => {
    e.preventDefault();
    handleClose();
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  return (
    <div className="fixed z-20 flex w-full items-center justify-between px-3 pt-1 font-header italic backdrop-blur-[2px]">
      <div className="text-xl md:text-lg lg:text-xl">
        III EXHIBITION{" "}
        <span className="text-[1.5rem] leading-3 md:text-lg lg:text-xl">
          2024
        </span>
      </div>
      <List
        className="text-4xl md:hidden"
        weight="light"
        onClick={handleOpen}
      />
      <dialog
        ref={dialogRef}
        className="size-full max-h-screen max-w-screen-md bg-header-background/70 outline-none backdrop-blur-sm md:hidden"
      >
        <div
          className="flex h-full flex-col text-primary "
          onClick={handleClose}
        >
          <X weight="bold" className="mr-4 mt-4 self-end text-5xl " />
          <div
            className="ml-8 flex w-fit flex-col gap-4 text-2xl font-bold [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]"
            onClick={(event) => event.stopPropagation()}
          >
            <span
              onClick={(e) => handleNavClick(e, "CONCEPT")}
              className="cursor-pointer"
            >
              CONCEPT
            </span>
            <span>・</span>
            <span
              onClick={(e) => handleNavClick(e, "WORKS")}
              className="cursor-pointer"
            >
              WORKS
            </span>
            <span>・</span>
            <span
              onClick={(e) => handleNavClick(e, "ACCESS")}
              className="cursor-pointer"
            >
              ACCESS
            </span>
            <span>・</span>
            <span
              onClick={(e) => handleNavClick(e, "ANNOUNCE")}
              className="cursor-pointer"
            >
              ANNOUNCE
            </span>
            <span>・</span>
            <span
              onClick={(e) => handleNavClick(e, "MEMBERS")}
              className="cursor-pointer"
            >
              MEMBERS
            </span>
            <span>・</span>
            <span
              onClick={(e) => handleNavClick(e, "ARCHIVES")}
              className="cursor-pointer"
            >
              ARCHIVES
            </span>
          </div>
        </div>
      </dialog>

      <div className="hidden text-primary md:flex lg:text-lg lg:[&>span:nth-child(even)]:mx-4">
        <span
          onClick={(e) => handleNavClick(e, "CONCEPT")}
          className="cursor-pointer"
        >
          CONCEPT
        </span>
        <span>・</span>
        <span
          onClick={(e) => handleNavClick(e, "WORKS")}
          className="cursor-pointer"
        >
          WORKS
        </span>
        <span>・</span>
        <span
          onClick={(e) => handleNavClick(e, "ACCESS")}
          className="cursor-pointer"
        >
          ACCESS
        </span>
        <span>・</span>
        <span
          onClick={(e) => handleNavClick(e, "ANNOUNCE")}
          className="cursor-pointer"
        >
          ANNOUNCE
        </span>
        <span>・</span>
        <span
          onClick={(e) => handleNavClick(e, "MEMBERS")}
          className="cursor-pointer"
        >
          MEMBERS
        </span>
        <span>・</span>
        <span
          onClick={(e) => handleNavClick(e, "ARCHIVES")}
          className="cursor-pointer"
        >
          ARCHIVES
        </span>
      </div>
    </div>
  );
}
