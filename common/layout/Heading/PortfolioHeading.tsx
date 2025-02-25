import PortfolioHeadingBackground from "@/assets/images/Portfolioheading.webp";
import { seoConfig } from "@/shared/constants/seo.constants";

const PortfolioHeading = () => {
  return (
    <div
      className="w-full flex  items-center desktop:text-left  desktop:pb-[77px] desktop:pt-[240px] desktop:px-[168px] text-center justify-center pb-6 pt-[90px] px-5"
      style={{
        backgroundImage: `url(${PortfolioHeadingBackground.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center ">
        <h1 className="animate-textSlide text-white  desktop:text-3xl text-lg font-semibold">
          {seoConfig.portfolio.h1}
        </h1>
        <p className="desktop:text-lg  desktop:w-[800px] text-base font-normal text-white text-center mt-4">
          Read about our successes in fulfilling Clevit’s commitment to deliver innovative web,
          mobile, and AI solutions. Discover how we overcome complex problems, give businesses a
          boost, and transform concepts into powerful digital encounters.
        </p>
      </div>
    </div>
  );
};

export default PortfolioHeading;
