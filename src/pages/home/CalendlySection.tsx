import { InlineWidget } from "react-calendly";

import { CalendlyConfig } from "@/common/constants/config";
import Section from "@/common/templates/Section";

const CalendlySection = () => {
  return (
    <Section
      title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you."
      className="-z-[20]"
    >
      <div className="w-full">
        <InlineWidget url={CalendlyConfig.shareUrl} styles={{ height: 1100 }} />
      </div>
    </Section>
  );
};

export default CalendlySection;
