import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants";
import Messages from "@/assets/vectors/Messages.svg?react";
import Button from "@/shared/ui/Button.tsx";

const HomeHeading = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center text-center desktop:pt-[197px]  desktop:pb-[85px]  xs:pb-6 xs:pt-[125px] xs:px-[30px]">
      <h1 className="animate-textSlide text-white desktop:text-3xl xs:text-lg xs:font-semibold">
        Web and Mobile App Development Company
      </h1>
      <p className="animate-textSlide  text-white text-center lg:w-[50%]  desktop:text-lg xs:text-base desktop:mt-4 desktop:mb-9 xs:mt-6 xs:mb-11">
        Clevit provides meaninful service that includes advanced web and mobile apps as well as the
        latest AI solutions, designed to accelerate growth and boost your business.
      </p>
      <Button
        className="flex desktop:hidden"
        prefix={<Messages />}
        onClick={() => navigate(RoutePaths.Calendly)}
      >
        Let's Talk
      </Button>
      <Button className="hidden desktop:flex" onClick={() => navigate(RoutePaths.Calendly)}>
        Request a Quote
      </Button>
    </div>
  );
};

export default HomeHeading;
