import type { RefObject } from "react";
import { useLayoutEffect } from "react";

import { usePathname } from "next/navigation";

import useHash from "./useHash";

const useScrollView = (ref: RefObject<HTMLElement>, route: string) => {
  const pathname = usePathname();
  const hash = useHash();

  const isActive = route === `${pathname}#${hash}`;

  useLayoutEffect(() => {
    if (isActive && ref.current) {
      const handleScroll = () => {
        if (ref.current) {
          const yOffset = -80;
          const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      };

      requestAnimationFrame(handleScroll);
    }
  }, [isActive, hash, ref]);
};

export default useScrollView;
