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
    <section className="p-16  w-screen bg-faqContactGradient desktop:space-y-14 flex flex-col text-3xl font-bold items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="text-white desktop:text-3xl text-lg font-semibold text-center">
          If you have ahy questions?
        </p>
        <Pointer className="desktop:hidden md:rotate-120 md:scale-100 xs:rotate-[130deg] xs:scale-[.6]" />
      </div>
      <Button variant={ButtonVariant.Primary} onClick={handleNavigate}>
        Contact Us
      </Button>
    </section>
  );
};

export default ContactSection;
