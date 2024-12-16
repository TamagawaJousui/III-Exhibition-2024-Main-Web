import "./App.css";
import { lazy, useEffect } from "react";
import Header from "./component/Header";
import { breakpoint } from "./utils/BreakPoint";
import { useModalStore } from "./store/modalStore";
import WorksModal from "./component/WorksModal";
import { workList } from "./models/works";
import AllWorksModal from "./component/AllWorksModal";
const HeroArea = lazy(() => import("./component/HeroArea"));
const Concept = lazy(() => import("./component/Concept"));
const Works = lazy(() => import("./component/Works"));
const Access = lazy(() => import("./component/Access"));
const Announce = lazy(() => import("./component/Announce"));
const Members = lazy(() => import("./component/Members"));
const Archives = lazy(() => import("./component/Archives"));

function App() {
  const { isModalOpen, isGalleryModalOpen, openModal, openGalleryModal } =
    useModalStore();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const workId = urlParams.get("workId");
    const pathname = window.location.pathname;

    if (pathname === "/workslist") {
      openGalleryModal();
    } else if (workId && workList.find((work) => work.workId === workId)) {
      const workSection = document.getElementById("WORKS");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
      openModal(workId);
    } else {
      console.log("replaceState", "/");
      window.history.replaceState({}, "", "/");
    }
  }, [openModal, openGalleryModal]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint.md}px)`);
    if (isModalOpen || isGalleryModalOpen) {
      return;
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const scrollSpeed = 1;

      const magnitude = Math.sqrt(e.deltaX * e.deltaX + e.deltaY * e.deltaY);
      const direction = e.deltaY > -e.deltaX ? 1 : -1;

      window.scrollBy({
        left: magnitude * direction * scrollSpeed,
        behavior: "auto",
      });
    };

    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        window.addEventListener("wheel", handleWheel, {
          passive: false,
          capture: true,
        });
      } else {
        window.removeEventListener("wheel", handleWheel, {
          capture: true,
        });
      }
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("wheel", handleWheel, {
        capture: true,
      });
    };
  }, [isModalOpen, isGalleryModalOpen]);

  return (
    <>
      <Header />
      <div className="bg-gradient grid w-max grid-flow-row md:grid-flow-col">
        <HeroArea />
        <Concept />
        <Works />
        <Access />
        <Announce />
        <Members />
        <Archives />
      </div>
      <WorksModal />
      <AllWorksModal />
    </>
  );
}

export default App;
