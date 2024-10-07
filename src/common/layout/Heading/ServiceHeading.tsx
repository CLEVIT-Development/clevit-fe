import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants";
import Messages from "@/assets/vectors/Messages.svg?react";
import Button from "@/shared/ui/Button.tsx";

const ServiceHeading = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center text-center desktop:pb-10 desktop:pt-[150px] xs:pb-6 xs:pt-[125px] xs:px-[30px]">
      <h1 className="animate-textSlide text-white desktop:text-3xl xs:text-lg xs:font-semibold">
        What We Can Do For You
      </h1>
      <p className="animate-textSlide text-white text-center desktop:max-w-[813px] desktop:text-lg xs:text-base desktop:mt-4 desktop:mb-9 xs:mt-6 xs:mb-11">
        As a partner for your business, at Clevit we provide a wide range of services that target
        your business’s growth and support the development of innovative solutions.
      </p>
      <Button
        className="flex desktop:hidden"
        prefix={<Messages />}
        onClick={() => navigate(RoutePaths.Calendly)}
      >
        Let's Talk
      </Button>
      <Button className="hidden desktop:flex" onClick={() => navigate(RoutePaths.Calendly)}>
        Contact Us
      </Button>
    </div>
  );
};

export default ServiceHeading;
