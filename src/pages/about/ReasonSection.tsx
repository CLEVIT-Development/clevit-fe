import { reasonsConstants } from "@/common/constants/reasons.constants";
import Section from "@/common/templates/Section";
import ReasonCard from "@/shared/ui/ReasonCard";

const ReasonSection = () => {
  return (
    <Section title="Why Choose Clevit?" className="bg-gray-500 py-12 px-6">
      <div className="flex flex-wrap gap-[72px] justify-between">
        {reasonsConstants.map(({ id, title, description, Icon }) => (
          <ReasonCard key={id} title={title} description={description} icon={<Icon />} />
        ))}
      </div>
    </Section>
  );
};

export default ReasonSection;
