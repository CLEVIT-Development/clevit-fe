import { InlineWidget } from "react-calendly";

import { appConfig } from "@/common/constants/config.constants.ts";
import Section from "@/common/templates/Section";

const CalendlySection = () => {
  return (
    <Section
      title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you."
      className="calendlyDesktop:!mb-[-200px] sm:!mb-[-30px] !-mb-[160px]"
    >
      <div className="w-full">
        <InlineWidget url={appConfig.shareUrl} styles={{ height: 1100 }} />
      </div>
    </Section>
  );
};

export default CalendlySection;
