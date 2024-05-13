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
  const { scrollY } = useScroll();

  const headerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [currHeaderVariant, setCurrHeaderVariant] = useState(headerVariant);

  useEffect(() => {
    if (headerVariant === HeaderVariant.Primary) {
      const headerRect = headerRef.current?.getBoundingClientRect();
      const headingRect = headingRef.current?.getBoundingClientRect();

      const headerHeadingDistance =
        Number(headingRect?.height) - Number(headerRect?.height) + Number(headingRect?.top);

      // header will pass the heading bottom side if and only if the distance is negative.
      const isReached = headerHeadingDistance < 0;

      setCurrHeaderVariant(isReached ? HeaderVariant.Secondary : HeaderVariant.Primary);
    }
  }, [scrollY, currHeaderVariant, headerVariant]);

  return (
    <>
      <Header ref={headerRef} headerVariant={currHeaderVariant} scrollY={scrollY} />
      {heading && <div ref={headingRef}>{heading}</div>}
    </>
  );
};

export default HeadBar;
