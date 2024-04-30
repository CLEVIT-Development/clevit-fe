import { valueTabsConstants } from "@/common/constants/values.constants";
import Section from "@/common/templates/Section";
import Navigation from "@/shared/ui/Navigation";

const ValuesSection = () => {
  return (
    <Section title="Values">
      <Navigation items={valueTabsConstants} />
    </Section>
  );
};

export default ValuesSection;
