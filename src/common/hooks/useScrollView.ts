import type { RefObject } from "react";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import type { RoutePaths } from "@/app/routing/routing.constants.ts";

const useScrollView = <T extends Element>(ref: RefObject<T>, routePath: RoutePaths) => {
  const { pathname, hash } = useLocation();

  const isActive = `${pathname}${hash}` === routePath;

  useLayoutEffect(() => {
    if (isActive && ref.current) {
      const handleScroll = () => {
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }
      };

      requestAnimationFrame(handleScroll);
    }
  }, [isActive, ref]);
};

export default useScrollView;
