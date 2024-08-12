import type { IAdvantageConstant } from "@/assets/constants/services/webDevelopmentAdvantage.constants.ts";
import Section from "@/common/templates/Section.tsx";
import ReasonCard from "@/shared/ui/ReasonCard.tsx";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  advantages: IAdvantageConstant[];
}

const AdvantageSection = ({ title, subtitle, description, advantages }: Props) => (
  <Section className="space-y-12 lg:space-y-24">
    <div className="flex flex-col items-start lg:items-center">
      <h3 className="self-center text-lg font-semibold lg:text-2xl">{title}</h3>
      <span className="text-center self-center text-purple-300 text-md lg:text-md-l font-semibold px-2 lg:px-0 mt-4 mb-6">
        {subtitle}
      </span>
      <p className="lg:max-w-[85%] md:text-center text-gray-200 text-base lg:text-md">
        {description}
      </p>
    </div>
    <div className="w-full flex flex-wrap md:gap-[72px] gap-6 justify-center md:justify-between">
      {advantages.map(({ id, title, description, Icon }) => (
        <ReasonCard
          key={id}
          title={title}
          description={description}
          icon={<Icon />}
          className="!max-w-[320px]"
        />
      ))}
    </div>
  </Section>
);

export default AdvantageSection;
