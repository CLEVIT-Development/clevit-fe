import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants";
import Pointer from "@/assets/vectors/Pointer.svg?react";
import Button from "@/shared/ui/Button";
import { ButtonVariant } from "@/types/variant.types";

const ContactSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(RoutePaths.Calendly);
  };

  return (
    <section className="p-16 w-screen bg-faqContactGradient desktop:space-y-14 flex flex-col font-bold md:gap-6 desktop:gap-0 items-center justify-center">
      <div className="flex flex-col md:gap-6 desktop:gap-1 items-center justify-center text-3xl">
        <p className="text-white desktop:text-3xl text-lg text-center">
          If You Have Any Questions?
        </p>
        <Pointer className="md:rotate-120 md:scale-100 xs:rotate-[130deg] xs:scale-[0.6]" />
      </div>
      <Button variant={ButtonVariant.Primary} className="desktop:!mt-5" onClick={handleNavigate}>
        Contact Us
      </Button>
    </section>
  );
};

export default ContactSection;
