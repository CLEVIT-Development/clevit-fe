import AboutHeadingBackground from "@/assets/images/AboutHeading.png";

const AboutHeading = () => {
  return (
    <div className="w-full flex items-center desktop:text-left desktop:justify-between desktop:pb-[77px] desktop:pt-[180px] desktop:pl-[80px] desktop:pr-[110px] text-center justify-center pb-6 pt-[125px] pl-[30px] pr-[50px]">
      <h1 className="text-white desktop:max-w-[50%] desktop:text-3xl text-lg font-semibold">
        Transforming Ideas into Intelligent Software
      </h1>
      <img
        src={AboutHeadingBackground}
        alt="AboutPage Heading Background"
        className="desktop:block hidden"
        width={424}
        height={309}
      />
    </div>
  );
};

export default AboutHeading;
