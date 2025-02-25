import Messages from "@/assets/vectors/Messages.svg";
import { RoutePaths } from "@/shared/constants/route.constants";
import { seoConfig } from "@/shared/constants/seo.constants";
import StyledLink from "@/shared/ui/StyledLink";

const ServiceHeading = () => {
  return (
    <div className="w-full flex flex-col items-center text-center desktop:pb-10 desktop:pt-[150px] xs:pb-6 xs:pt-[125px] xs:px-[30px]">
      <h1 className="animate-textSlide text-white desktop:text-3xl xs:text-lg xs:font-semibold">
        {seoConfig.services.h1}
      </h1>
      <p className="animate-textSlide text-white text-center desktop:max-w-[813px] desktop:text-lg xs:text-base desktop:mt-4 desktop:mb-9 xs:mt-6 xs:mb-11">
        As a partner for your business, at Clevit we provide a wide range of services that target
        your business’s growth and support the development of innovative solutions.
      </p>
      <StyledLink className="flex desktop:hidden" href={RoutePaths.Calendly} prefix={<Messages />}>
        Let&apos;s Talk
      </StyledLink>
      <StyledLink className="hidden desktop:flex" href={RoutePaths.ContactUs}>
        Contact Us
      </StyledLink>
    </div>
  );
};

export default ServiceHeading;
