import useWindowSize from "@/common/hooks/useWindowSize.ts";

const useResponsive = () => {
  const { width } = useWindowSize();

  return {
    isMobile: width <= 270,
    isMiniTablet: width <= 640,
    isTablet: width <= 768,
    isDesktop: width <= 1024,
    isLarge: width <= 1260,
    isExtraLarge: width <= 1440,
    isExtraLarge2: width <= 1600,
    isExtraLarge3: width <= 2056,
  };
};

export default useResponsive;
