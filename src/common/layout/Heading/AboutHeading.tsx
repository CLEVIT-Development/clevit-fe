import type { ForwardedRef } from "react";
import { forwardRef } from "react";

import AboutHeadingBackground from "@/assets/images/AboutHeading.png";
import { Gradient } from "@/shared/gradient/Gradient.tsx";

const AboutHeading = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Gradient ref={ref}>
      <div className="w-full flex items-center desktop:text-left desktop:pb-[138px] desktop:pt-[240px] desktop:justify-between desktop:px-[80px] text-center justify-center pb-6 pt-[125px] px-[30px]">
        <h1 className="text-white desktop:max-w-[60%] desktop:text-3xl text-lg font-semibold">
          Transforming Ideas into Intelligent Software
        </h1>
        <img src={AboutHeadingBackground} alt="" className="desktop:block hidden" />
      </div>
    </Gradient>
  );
});

export default AboutHeading;
