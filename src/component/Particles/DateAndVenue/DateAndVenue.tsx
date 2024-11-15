import { FC, useRef } from "react";

import { useDateAndVenue } from "./useDateAndVenue";


export const DateAndVenue: FC = () => {
  const dateAndVenueDivRef = useRef<HTMLDivElement>(null);
  useDateAndVenue(dateAndVenueDivRef);

  return <div className="absolute w-full h-full" ref={dateAndVenueDivRef}></div>;
};