import Pointer from "../../assets/vectors/Pointer.svg";
import { RoutePaths } from "../../shared/constants/route.constants";
import StyledLink from "../../shared/ui/StyledLink";
import { ButtonVariant } from "../../types/variant.types";

const ContactSection = () => {
  return (
    <section className="p-16 bg-faqContactGradient desktop:space-y-14 flex flex-col font-bold md:gap-6 desktop:gap-0 items-center justify-center w-full">
      <div className="flex flex-col md:gap-6 desktop:gap-1 items-center justify-center text-3xl">
        <p className="text-white desktop:text-3xl text-lg text-center">
          If You Have Any Questions?
        </p>
        <Pointer className="md:rotate-120 md:scale-100 xs:rotate-[130deg] xs:scale-[0.6]" />
      </div>
      <StyledLink
        href={RoutePaths.Calendly}
        variant={ButtonVariant.Primary}
        className="desktop:!mt-5"
      >
        Contact Us
      </StyledLink>
    </section>
  );
};

export default ContactSection;
