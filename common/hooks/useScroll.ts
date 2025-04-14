import { useEffect, useState } from "react";

const useScroll = () => {
  const [{ scrollX, scrollY }, setScroll] = useState({ scrollX: 0, scrollY: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScroll({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrollX,
    scrollY,
  };
};

export default useScroll;
