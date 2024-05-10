import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import { HeaderVariant } from "@/types/variant.types";

import useScroll from "../hooks/useScroll";
import Header from "./Header/Header";

interface Props {
  heading: ReactNode;
  headerVariant: HeaderVariant;
}

const HeadBar = ({ heading, headerVariant }: Props) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [currHeaderVariant, setCurrHeaderVariant] = useState<HeaderVariant>(headerVariant);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (scrollY > 0 && headerVariant === HeaderVariant.Primary) {
      const headerRect = headerRef.current?.getBoundingClientRect();
      const headingRect = headingRef.current?.getBoundingClientRect();

      const headerHeadingDistance =
        Number(headingRect?.height) - Number(headerRect?.height) + Number(headingRect?.top);

      // header will pass the heading bottom side if and only if the distance is negative.
      const isReached = headerHeadingDistance < 0;

      setCurrHeaderVariant(isReached ? HeaderVariant.Secondary : HeaderVariant.Primary);
    }
  }, [scrollY, currHeaderVariant]);

  return (
    <>
      <Header ref={headerRef} headerVariant={currHeaderVariant} />
      {heading && (
        <div ref={headingRef} className="desktop:h-[680px]">
          {heading}
        </div>
      )}
    </>
  );
};

export default HeadBar;
