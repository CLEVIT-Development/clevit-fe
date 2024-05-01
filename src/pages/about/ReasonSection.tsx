import { reasonsConstants } from "@/common/constants/reasons.constants";
import Section from "@/common/templates/Section";
import ReasonCard from "@/shared/ui/ReasonCard";

const ReasonSection = () => {
  return (
    <Section
      title="Why Choose Clevit?"
      className="bg-gray-500 md:py-12 md:px-6 py-5 px-5 rounded-[10px]"
    >
      <div className="flex flex-wrap md:gap-[72px] gap-6 justify-between">
        {reasonsConstants.map(({ id, title, description, Icon }) => (
          <ReasonCard key={id} title={title} description={description} icon={<Icon />} />
        ))}
      </div>
    </Section>
  );
};

export default ReasonSection;
