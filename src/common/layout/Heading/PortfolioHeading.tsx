import PortfolioHeadingBackground from "@/assets/images/Portfolioheading.png";

const PortfolioHeading = () => {
  return (
    <div
      className="w-full flex  items-center desktop:text-left  desktop:pb-[77px] desktop:pt-[180px] desktop:pl-[80px] desktop:pr-[110px] text-center justify-center pb-6 pt-[125px] pl-[30px] pr-[50px]"
      style={{
        backgroundImage: `url(${PortfolioHeadingBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="animate-textSlide text-white desktop:max-w-[50%] desktop:text-3xl text-lg font-semibold">
          Our Works
        </h1>
        <p className="desktop:text-lg font-normal text-base text-white">
          Dive into software case studies addressing diverse challenges, projects of all scales, and
          complexities. Explore Clevit’s dynamic portfolio, showcasing innovative web, mobile apps,
          and digital solutions that propel business success.
        </p>
      </div>
    </div>
  );
};

export default PortfolioHeading;
