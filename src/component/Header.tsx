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

  const Menu = (
    <>
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
    </>
  );

  return (
    <div className="fixed z-20 flex w-full items-center justify-between px-3 pt-1 font-header italic backdrop-blur-[2px] md:px-2">
      {/* Title */}
      <div className="text-xl leading-9">
        <span>III</span>{" "}
        <span className="md:hidden min-[900px]:inline">EXHIBITION</span>{" "}
        <span className="text-2xl">2024</span>
      </div>
      {/* Menu Mobile */}
      <List
        className="text-4xl md:hidden"
        weight="light"
        onClick={handleOpen}
      />
      {/* Dialog For Mobile */}
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
            {Menu}
          </div>
        </div>
      </dialog>
      {/* Menu For Desktop */}
      <div className="hidden text-xl leading-9 text-primary md:flex md:[&>span:nth-child(even)]:mx-[-0.06rem] min-[950px]:[&>span:nth-child(even)]:mx-0.5  lg:[&>span:nth-child(even)]:mx-2 xl:[&>span:nth-child(even)]:mx-3 2xl:[&>span:nth-child(even)]:mx-4">
        {Menu}
      </div>
      {/* <div className="absolute right-0 top-8 hidden text-primary [text-shadow:_0_1px_2px_rgba(0,0,0,0)] md:flex">
        <span className="lg:text-lg">SCROLL FOR MORE</span>
        <span className="mx-4 flex w-36 items-center justify-center">
          <div className="size-0 border-y-4 border-r-4 border-y-transparent border-r-primary"></div>
          <div className="h-0.5 w-4/5 bg-primary"></div>
          <div className="size-0 border-y-4 border-l-4 border-y-transparent border-l-primary"></div>
        </span>
      </div> */}
    </div>
  );
}
