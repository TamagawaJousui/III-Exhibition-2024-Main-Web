import StaticTitle from "@/assets/heroarea/Title.svg?react";
import StaticTitleEnglish from "@/assets/heroarea/TitleEnglish.svg?react";
import StaticDateAndVenue from "@/assets/heroarea/DateAndVenue.svg?react";

import background_mobile from "@/assets/heroarea/background_mobile.webp";
import background_desktop from "@/assets/heroarea/background_desktop.webp";

import MainVisual from "./Particles/MainVisual/MainVisual";

import { breakpoint } from "@/utils/BreakPoint";
import { useEffect, useState } from "react";

import Title from "./Particles/Title/Title";
import TitleEnglish from "./Particles/TitleEnglish/TitleEnglish";
import DateAndVenue from "./Particles/DateAndVenue/DateAndVenue";
import { isWebGlCapable } from "@/utils/CheckUserEnv";

export default function HeroArea() {
  const mediaQuery = window.matchMedia(`(min-width: ${breakpoint.md}px)`);
  const [showParticles, setShowParticles] = useState(
    mediaQuery.matches && isWebGlCapable()
  );

  useEffect(() => {
    const handleMediaChange = () => {
      setShowParticles(mediaQuery.matches && isWebGlCapable());
    };
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  });

  return (
    <section className="section-container h-svh min-h-svh w-screen overflow-hidden">
      {showParticles ? (
        <>
          <Title />
          <TitleEnglish />
          <DateAndVenue />
          <MainVisual />
        </>
      ) : (
        <>
          <StaticTitle className="absolute left-[5px] top-[10%] z-10 h-[60svh] md:left-[10px] md:top-[15%] lg:h-[70svh] xl:left-[30px]" />
          <StaticTitleEnglish className="absolute right-[5px] top-12 z-10 w-[65%] md:right-[10px] lg:w-[666px] xl:right-[30px]" />
          <StaticDateAndVenue className="absolute bottom-5 right-[5px] z-10 h-[45svh] md:bottom-[50px] md:right-[10px] md:h-[50svh] xl:right-[30px]" />

          <img
            className="hero-bg-mobile"
            src={background_mobile}
            alt="particle"
          />

          <img
            className="hero-bg-desktop"
            src={background_desktop}
            alt="particle"
          />
        </>
      )}
    </section>
  );
}
