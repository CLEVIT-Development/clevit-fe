import { useEffect, useRef, useState } from "react";

import { HeaderVariant } from "@/types/variant.types";

import useScroll from "../hooks/useScroll";
import Header from "./Header/Header";

interface Props {
  heading: React.ReactNode;
  headerVariant?: HeaderVariant;
}

const HeadBar = ({ heading, headerVariant = HeaderVariant.Primary }: Props) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [isReached, setIsReached] = useState(headerVariant === HeaderVariant.Secondary);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (scrollY > 0 && headerVariant === HeaderVariant.Primary) {
      const headerRect = headerRef.current?.getBoundingClientRect();
      const headingRect = headingRef.current?.getBoundingClientRect();

      const headerHeadingDistance =
        Number(headingRect?.height) - Number(headerRect?.height) + Number(headingRect?.top);

      // header will pass the heading bottom side if and only if the distance is negative.
      setIsReached(headerHeadingDistance < 0);
    }
  }, [scrollY, headerVariant]);

  return (
    <>
      <Header ref={headerRef} isReached={isReached} headerVariant={headerVariant} />
      {heading && (
        <div ref={headingRef} className="desktop:h-[680px]">
          {heading}
        </div>
      )}
    </>
  );
};

export default HeadBar;
