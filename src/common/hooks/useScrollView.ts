import type { RefObject } from "react";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollView = (ref: RefObject<HTMLDivElement>, route: string) => {
  const { pathname, hash } = useLocation();

  const isActive = route === `${pathname}${hash}`;

  useLayoutEffect(() => {
    if (isActive && ref.current) {
      const handleScroll = () => {
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      };

      requestAnimationFrame(handleScroll);
    }
  }, [isActive, hash, ref]);
};

export default useScrollView;
