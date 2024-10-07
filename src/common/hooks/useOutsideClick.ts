import type { RefObject } from "react";
import { useEffect } from "react";

const useOutsideClick = <T extends HTMLElement>(ref: RefObject<T>, callback: () => void) => {
  const handleClick = (e: MouseEvent) => {
    if (ref?.current && !ref?.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useOutsideClick;
