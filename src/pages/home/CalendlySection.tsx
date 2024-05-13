import { InlineWidget } from "react-calendly";

import { appConfig } from "@/common/constants/config.constants.ts";
import useResponsive from "@/common/hooks/useResponsive.ts";
import Section from "@/common/templates/Section";

const CalendlySection = () => {
  const { isTablet, isMobile, isCalendlyDesktop } = useResponsive();

  return (
    <Section
      title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you."
      className="calendlyDesktop:!mb-[50px] space-y-0"
    >
      <div className="w-full">
        <InlineWidget
          url={appConfig.shareUrl}
          styles={{ height: isMobile ? 1000 : isTablet || isCalendlyDesktop ? 1100 : 700 }}
        />
      </div>
    </Section>
  );
};

export default CalendlySection;
