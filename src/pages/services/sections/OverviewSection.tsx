import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants.ts";
import Section from "@/common/templates/Section.tsx";
import Button from "@/shared/ui/Button.tsx";

interface Props {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const OverviewSection = ({ title, description, image, imageAlt }: Props) => {
  const navigate = useNavigate();

  return (
    <Section className="bg-overviewGradient rounded-lg-l py-5 lg:px-12">
      <div className="flex items-center">
        <div className="flex flex-col">
          <span className="text-white text-center lg:text-left text-lg font-bold">{title}</span>
          <span className="text-white text-base lg:text-md mb-12 mt-6 lg:mt-4">{description}</span>
          <Button
            className="justify-center w-full lg:w-fit"
            onClick={() => navigate(RoutePaths.Calendly)}
          >
            Book a Free Consultation
          </Button>
        </div>
        <img alt={imageAlt} src={image} className="ml-20 w-[510px] h-[450px] hidden lg:flex" />
      </div>
    </Section>
  );
};

export default OverviewSection;
