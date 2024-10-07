import type { RefObject } from "react";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import { ServicesIdConstants } from "@/assets/constants/services-id.constants.ts";

const useScrollView = (ref: RefObject<HTMLDivElement>, route: string) => {
  const { pathname, hash } = useLocation();

  const isActive = route === `${pathname}${hash}`;

  useLayoutEffect(() => {
    if (isActive && ref.current) {
      const handleScroll = () => {
        if (ref.current) {
          ref.current.scrollIntoView({
            behavior: "smooth",
            block: Object.values(ServicesIdConstants).includes(route) ? "center" : "start",
          });
        }
      };

      requestAnimationFrame(handleScroll);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, hash, ref]);
};

export default useScrollView;
