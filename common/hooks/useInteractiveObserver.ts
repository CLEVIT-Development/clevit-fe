import type { RefObject } from "react";
import { useLayoutEffect } from "react";

import { usePathname, useRouter } from "next/navigation";

import useHash from "@/common/hooks/useHash";
import { RoutePaths } from "@/shared/constants/route.constants";

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
  const router = useRouter();
  const pathname = usePathname();
  const hash = useHash();

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const checkPath = `${pathname}${hash}`;
        const isActive = checkPath === checkRoute;

        callback?.(entry, checkPath);

        if (entry.intersectionRect.height !== 0 && window.scrollY != 0 && isActive) {
          router.push(entry.isIntersecting ? checkRoute : backRoute);
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
