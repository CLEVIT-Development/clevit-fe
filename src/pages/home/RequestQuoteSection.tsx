import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants.ts";
import Pointer from "@/assets/vectors/Pointer.svg?react";
import Button from "@/shared/ui/Button.tsx";
import { ButtonVariant } from "@/types/variant.types.ts";

const RequestQuoteSection = () => {
  const navigate = useNavigate();

  return (
    <section className="md:w-full md:max-w-[1280px] p-3 bg-quoteGradient rounded-lg-l md:py-[84px] xs:py-6 md:px-[46px] flex md:flex-row xs:flex-col items-center justify-center md:space-x-[73px] mb-24">
      <div className="flex md:flex-row xs:flex-col space-x-3 md:items-end xs:items-center">
        <p className="text-white desktop:text-xl xs:text-lg-l xs:font-medium text-center">
          Let's build your dream project
        </p>
        <Pointer className="md:rotate-0 md:scale-100 xs:rotate-[130deg] xs:scale-[.6]" />
      </div>
      <Button variant={ButtonVariant.Outlined} onClick={() => navigate(RoutePaths.Calendly)}>
        Book a Free Consultation
      </Button>
    </section>
  );
};

export default RequestQuoteSection;
