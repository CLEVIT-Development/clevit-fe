import HTMLtag from "@/assets/images/services/HTMLtag.png";
import { RoutePaths } from "@/shared/constants/route.constants";
import StyledLink from "@/shared/ui/StyledLink";
import { ButtonVariant } from "@/types/variant.types";

const RequestQuoteSection = () => {
  return (
    <section className="w-full relative  desktop:h-[339px] h-[260px]   bg-quoteGradient flex md:flex-row xs:flex-col items-start justify-between md:space-x-[73px] mb-24">
      <div className="absolute xs:bottom-3 xs:left-5 h-[50%] md:static flex flex-col justify-start mt-[40px] z-10 desktop:pl-14 md:p-0 md:pl-14">
        <p className="desktop:text-3xl desktop:font-thin text-white">Let&apos;s build</p>
        <p className="text-white whitespace-nowrap lg:text-3.5xl desktop:text-2xl  xs:font-extrabold desktop:font-extrabold xs:text-lg xs:mb-[20px] desktop:mb-[20px]">
          YOUR DREAM PROJECT
        </p>
        <StyledLink
          href={RoutePaths.Calendly}
          className="w-fit xs:py-[7px] xs:px-[7px] xs:text-[9px] rounded-[4px] md:py-2 md:px-4 md:text-base"
          variant={ButtonVariant.Outlined}
        >
          Request a Demo
        </StyledLink>
      </div>
      <div className="relative xs:w-full xs:h-[60%] desktop:h-full md:h-full  max-w-[1000px]">
        <img
          className="w-full h-full object-cover desktop:scale-x-[1] md:h-full xs:scale-x-[-1] md:scale-x-[1]"
          src={HTMLtag.src}
          alt="HTML tag"
        />
      </div>
    </section>
  );
};

export default RequestQuoteSection;
