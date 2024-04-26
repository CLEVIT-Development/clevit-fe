import { InlineWidget } from "react-calendly";

import { CalendlyConfig } from "@/common/constants/config";
import Section from "@/common/templates/Section";

const CalendlySection = () => {
  return (
    <Section title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you.">
      <div className="w-full">
        <InlineWidget url={CalendlyConfig.shareUrl} />
      </div>
    </Section>
  );
};

export default CalendlySection;
