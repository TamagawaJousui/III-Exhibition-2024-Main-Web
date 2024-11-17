import { useRef } from "react";

import { useDateAndVenue } from "./useDateAndVenue";


export default function DateAndVenue() {
  const dateAndVenueDivRef = useRef<HTMLDivElement>(null);
  useDateAndVenue(dateAndVenueDivRef);

  return <div className="absolute size-full" ref={dateAndVenueDivRef}></div>;
};