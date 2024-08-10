import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants.ts";
import Section from "@/common/templates/Section.tsx";
import Button from "@/shared/ui/Button.tsx";

interface Props {
  title: string;
  description: string;
}

const ShowcaseSection = ({ title, description }: Props) => {
  const navigate = useNavigate();

  return (
    <Section className="relative">
      <h4 className="text-gray-200 text-lg self-start md:self-center font-semibold md:text-2xl">
        {title}
      </h4>
      <p className="text-base md:text-md md:text-center !mt-4 lg:!mt-6">{description}</p>
      <Button className="!mt-12 md:!mt-[60px] z-20" onClick={() => navigate(RoutePaths.Portfolio)}>
        See Our Portfolio
      </Button>
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="bg-showcaseGradient w-[350px] h-[350px]" />
      </div>
    </Section>
  );
};

export default ShowcaseSection;
