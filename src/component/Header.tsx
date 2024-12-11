import { breakpoint } from "@/utils/BreakPoint";
import { List, X } from "@phosphor-icons/react";
import { useRef, useEffect, useState, Fragment } from "react";
import clsx from "clsx";

export default function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  // const mediaQuery = window.matchMedia(`(min-width: ${breakpoint.md}px)`);
  // const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     requestAnimationFrame(() => {
  //       const scrollLeft = window.scrollX;
  //       const scrollWidth =
  //         document.documentElement.scrollWidth - window.innerWidth;
  //       const progress = (scrollLeft / scrollWidth) * 100;
  //       setProgress(progress);
  //     });
  //   };

  //   const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
  //     if (e.matches) {
  //       window.addEventListener("scroll", handleScroll, { passive: true });
  //     } else {
  //       window.removeEventListener("scroll", handleScroll);
  //     }
  //   };

  //   handleMediaChange(mediaQuery);
  //   mediaQuery.addEventListener("change", handleMediaChange, { passive: true });

  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaChange);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [mediaQuery]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% -50%",
        threshold: 0,
      }
    );

    const sections = [
      "HEROAREA",
      "CONCEPT",
      "WORKS",
      "ACCESS",
      "ANNOUNCE",
      "MEMBERS",
      "ARCHIVES",
    ];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

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
      {["CONCEPT", "WORKS", "ACCESS", "ANNOUNCE", "MEMBERS", "ARCHIVES"].map(
        (id) => (
          <Fragment key={id}>
            <span
              onClick={(e) => handleNavClick(e, id)}
              className={clsx(
                "cursor-pointer transition-all duration-300",
                activeSection === "HEROAREA"
                  ? "opacity-100 hover:scale-110"
                  : activeSection === id
                    ? "scale-105 opacity-100"
                    : "opacity-70 hover:scale-110 hover:opacity-100"
              )}
            >
              {id}
            </span>
            {id !== "ARCHIVES" && <span>・</span>}
          </Fragment>
        )
      )}
    </>
  );

  return (
    <div className="fixed z-20 flex w-full items-center justify-between px-3 pt-1 font-header italic backdrop-blur-[2px] md:px-2 lg:px-4">
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
      <div className="hidden text-xl leading-9 text-primary md:flex md:[&>span:nth-child(even)]:mx-[-0.06rem] min-[950px]:[&>span:nth-child(even)]:mx-0.5 lg:[&>span:nth-child(even)]:mx-2 xl:[&>span:nth-child(even)]:mx-3 2xl:[&>span:nth-child(even)]:mx-4">
        {Menu}
      </div>
      <div
        className={clsx(
          "absolute right-0 top-8 hidden animate-bounce-x text-lg text-primary transition-opacity duration-300 md:flex md:pr-2 lg:pr-4",
          `${activeSection !== "HEROAREA" ? "opacity-0" : "opacity-100"}`
        )}
      >
        SCROLL
      </div>
    </div>
  );
}
