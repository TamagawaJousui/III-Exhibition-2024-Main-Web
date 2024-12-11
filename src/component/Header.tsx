import { breakpoint } from "@/utils/BreakPoint";
import { List, X } from "@phosphor-icons/react";
import { useRef, useEffect, useState } from "react";

export default function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const mediaQuery = window.matchMedia(`(min-width: ${breakpoint.md}px)`);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = window.scrollX;
      const scrollWidth =
        document.documentElement.scrollWidth - window.innerWidth;
      const progress = (scrollLeft / scrollWidth) * 100;
      setProgress(progress);
      console.log(progress);
    };

    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("scroll", handleScroll);
    };
  });

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
      <div className="absolute right-0 top-8 hidden text-primary [text-shadow:_0_1px_2px_rgba(0,0,0,0)] md:flex">
        <div
          className={`text-lg transition-opacity duration-300 ${progress > 3 ? "opacity-0" : "opacity-100"}`}
        >
          SCROLL FOR MORE
        </div>
        <div className="mx-4 flex w-36 items-center justify-between gap-4">
          {/* progress bar container */}
          <div className="relative flex flex-1 justify-between gap-1">
            {/* moving line */}
            <div
              className="absolute  z-10 h-full w-12 rounded-full bg-primary"
              style={{
                left: "0%",
                transition: "top 0.3s ease",
              }}
            />
            {/* dots */}
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="size-1 rounded-full bg-primary drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.25)]"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
