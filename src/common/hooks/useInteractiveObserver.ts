import type { RefObject } from "react";
import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants.ts";

const useInteractiveObserver = <T extends HTMLElement>({
  sectionRef,
  checkRoute,
  callback,
  backRoute = RoutePaths.Home,
}: {
  sectionRef: RefObject<T>;
  checkRoute: string;
  backRoute?: RoutePaths;
  callback?: (entry: IntersectionObserverEntry, checkPath: string) => void;
}) => {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const checkPath = `${pathname}${hash}`;
        const isActive = checkPath === checkRoute;

        callback?.(entry, checkPath);

        // check if the user is not on the top of the page
        if (entry.intersectionRect.height !== 0 && window.scrollY != 0 && isActive) {
          navigate(entry.isIntersecting ? checkRoute : backRoute);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [pathname, hash]);
};

export default useInteractiveObserver;
