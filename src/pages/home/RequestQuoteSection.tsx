import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants";
import HTMLtag from "@/assets/images/services/HTMLtag.png";
import Button from "@/shared/ui/Button";
import { ButtonVariant } from "@/types/variant.types";

const RequestQuoteSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(RoutePaths.Calendly);
  };

  return (
    <section className="relative desktop:h-[339px] h-[270px] xs:w-[90%]  md:w-full md:max-w-[1280px] bg-quoteGradient flex md:flex-row xs:flex-col items-start justify-between md:space-x-[73px] desktop:pl-[60px] mb-24">
      <div className="absolute xs:bottom-3 xs:left-5 xs:w-full h-[50%] md:static flex flex-col justify-start mt-[40px] z-10 desktop:p-4 md:p-0 ">
        <p className="desktop:text-3xl desktop:font-thin	 text-white">Let's build</p>
        <p className="text-white whitespace-nowrap desktop:text-3.5xl xs:font-extrabold desktop:font-extrabold xs:text-lg xs:mb-[20px]   desktop:mb-[20px]">
          YOUR DREAM PROJECT
        </p>
        <Button
          className="w-fit xs:py-[7px] xs:px-[7px] xs:text-[9px] rounded-[4px] md:py-2 md:px-4 md:text-base"
          variant={ButtonVariant.Outlined}
          onClick={handleNavigate}
        >
          Request a Demo
        </Button>
      </div>
      <div className="relative xs:w-full xs:h-[60%] desktop:h-full">
        <img
          className="w-full h-full object-cover desktop:scale-x-[1] xs:scale-x-[-1]"
          src={HTMLtag}
          alt="HTML tag"
        />
      </div>
    </section>
  );
};

export default RequestQuoteSection;
