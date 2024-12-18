import { useRef } from "react";

import { useTitle } from "./useTitle";

export default function Title() {
  const titleDivRef = useRef<HTMLDivElement>(null);
  useTitle(titleDivRef);

  return <div className="absolute size-full" ref={titleDivRef}></div>;
};