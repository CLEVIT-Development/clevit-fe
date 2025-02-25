import AboutHeadingBackground from "@/assets/images/AboutHeading.webp";
import { seoConfig } from "@/shared/constants/seo.constants";

const AboutHeading = () => {
  return (
    <div className="w-full flex items-center desktop:text-left desktop:justify-between desktop:pb-[77px] desktop:pt-[180px] desktop:pl-[80px] desktop:pr-[110px] text-center justify-center pb-6 pt-[180px] ">
      <h1 className="animate-textSlide desktop:-mt-0 -mt-12 text-white desktop:max-w-[60%] desktop:text-3xl text-lg font-semibold">
        {seoConfig.about.h1}
      </h1>
      <img
        loading="lazy"
        src={AboutHeadingBackground.src}
        alt="AboutPage Heading Background"
        className="desktop:block hidden"
        width={424}
        height={309}
      />
    </div>
  );
};

export default AboutHeading;
