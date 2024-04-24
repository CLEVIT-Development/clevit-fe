import Messages from "@/assets/vectors/Messages.svg?react";
import Header from "@/common/layout/Header.tsx";
import { Gradient } from "@/shared/gradient/Gradient.tsx";
import Button from "@/shared/ui/Button.tsx";

const Heading = () => {
  return (
    <Gradient>
      <div className="desktop:px-20 desktop:pt-11 desktop:pb-20 xs:px-5 xs:pt-4 xs:pb-6 flex flex-col desktop:space-y-[140px] xs:space-y-[76px]">
        <Header />
        <div className="flex flex-col items-center text-center">
          <h1 className="text-white desktop:text-3xl xs:text-lg xs:font-semibold">
            Web and Mobile App Development Company
          </h1>
          <p className="text-white text-center desktop:max-w-[80%] md:text-lg xs:text-base md:mt-4 md:mb-9 xs:mt-6 xs:mb-11">
            Clevit provides a comprehensive suite of web, mobile, and AI solutions to help your
            business evolve and fuel innovation.
          </p>
          <Button className="xs:visible desktop:invisible" prefix={<Messages />}>
            Let's Talk
          </Button>
          <Button className="xs:invisible desktop:visible">Request a Quote</Button>
        </div>
      </div>
    </Gradient>
  );
};

export default Heading;
