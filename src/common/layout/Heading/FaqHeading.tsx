import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants";
import Button from "@/shared/ui/Button";
import { ButtonVariant } from "@/types/variant.types";

const FaqHeading = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex  items-center desktop:text-left  text-center justify-center pt-[150px] desktop:pb-[65px] pb-[24px] px-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="animate-textSlide text-center text-white  desktop:text-3xl text-lg font-semibold desktop:w-full w-[60%]">
          What We Can Help you?
        </h1>
        <p className="desktop:text-lg  text-base font-normal text-white text-center mt-4 max-w-[800px] mb-6">
          Clevit provides a comprehensive suite of web, mobile, and AI solutions to help your
          business evolve and fuel innovation.
        </p>
        <Button variant={ButtonVariant.Primary} onClick={() => navigate(RoutePaths.ContactUs)}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default FaqHeading;
