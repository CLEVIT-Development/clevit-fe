import { useEffect, useRef, useState } from "react";

import useScroll from "../hooks/useScroll";
import Header from "./Header/Header";

interface Props {
  heading: React.ReactNode;
}

const HeadBar = ({ heading }: Props) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [isReached, setIsReached] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (scrollY > 0) {
      const headerRect = headerRef.current?.getBoundingClientRect();
      const headingRect = headingRef.current?.getBoundingClientRect();

      const headerHeadingDistance =
        Number(headingRect?.height) - Number(headerRect?.height) + Number(headingRect?.top);

      // header will pass the heading bottom side if and only if the distance is negative.
      setIsReached(headerHeadingDistance < 0);
    }
  }, [scrollY]);

  return (
    <>
      <Header ref={headerRef} isReached={isReached} />
      <div ref={headingRef}>{heading}</div>
    </>
  );
};

export default HeadBar;
