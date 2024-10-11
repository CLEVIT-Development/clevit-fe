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
          const yOffset = -80; // Измените это значение на нужный вам отступ
          const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      };

      requestAnimationFrame(handleScroll);
    }
  }, [isActive, hash, ref]);
};

export default useScrollView;
