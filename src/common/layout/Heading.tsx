import Messages from "@/assets/vectors/Messages.svg?react";
import useResponsive from "@/common/hooks/useResponsive.ts";
import Header from "@/common/layout/Header.tsx";
import Button from "@/shared/ui/Button.tsx";

const Heading = () => {
  const { isDesktop } = useResponsive();

  return (
    <div className="desktop:px-20 desktop:pt-11 desktop:pb-20 xs:px-5 xs:pt-4 xs:pb-6 bg-headingGradient flex flex-col desktop:space-y-[140px] xs:space-y-[76px]">
      <Header />
      <div className="flex flex-col items-center text-center">
        <h1 className="text-white font-semibold desktop:text-[45px] xs:text-[24px]">
          Web and Mobile App Development Company
        </h1>
        <p className="text-white text-center desktop:max-w-[80%] md:text-2xl xs:text-[16px] md:mt-4 md:mb-9 xs:mt-6 xs:mb-11">
          Clevit provides a comprehensive suite of web, mobile, and AI solutions to help your
          business evolve and fuel innovation.
        </p>
        {isDesktop ? (
          <Button prefix={<Messages />}>Let's Talk</Button>
        ) : (
          <Button>Request a Quote</Button>
        )}
      </div>
    </div>
  );
};

export default Heading;
