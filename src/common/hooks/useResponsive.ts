import useWindowSize from "@/common/hooks/useWindowSize.ts";

const useResponsive = () => {
  const { width } = useWindowSize();

  return {
    isExtraSmall: width <= 640,
    isMobile: width <= 768,
    isTablet: width < 1024,
    // Calendly breakpoint differs from 1024px, so I need configure my styles based on calendly
    isCalendlyDesktop: width <= 1045,
    isDesktop: width <= 1260,
    isLarge: width <= 1440,
    isExtraLarge: width <= 1600,
  };
};

export default useResponsive;
