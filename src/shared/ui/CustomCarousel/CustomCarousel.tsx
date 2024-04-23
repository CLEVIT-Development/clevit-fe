import React from "react";
import { Carousel } from "react-responsive-carousel";

import classNames from "classnames";

import Arrow from "@/assets/vectors/Arrow.svg?react";

// import useResponsive from "@/common/hooks/useResponsive";
import styles from "./CustomCarousel.module.scss";

interface Props {
  children: React.ReactElement[];
}

const CustomCarousel = ({ children }: Props) => {
  // const { isTablet } = useResponsive();

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      className={styles.container}
      useKeyboardArrows
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={classNames(
              "absolute top-0 bottom-0 left-0 flex justify-center items-center p-3 cursor-pointer z-20",
              {
                ["hidden"]: !hasPrev,
                ["absolute"]: hasPrev,
              }
            )}
            onClick={clickHandler}
          >
            <Arrow />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={classNames(
              "top-0 bottom-0 right-0 flex justify-center items-center p-3 cursor-pointer z-20",
              {
                ["hidden"]: !hasNext,
                ["absolute"]: hasNext,
              }
            )}
            onClick={clickHandler}
          >
            <Arrow className="rotate-180" />
          </div>
        );
      }}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
