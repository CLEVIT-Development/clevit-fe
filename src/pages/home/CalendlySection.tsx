import { InlineWidget } from "react-calendly";

import { CalendlyConfig } from "@/common/constants/config";
import useResponsive from "@/common/hooks/useResponsive";
import Section from "@/common/templates/Section";

const CalendlySection = () => {
  const { isTablet, isExtraSmall } = useResponsive();

  return (
    <Section title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you.">
      <div className="w-full">
        <InlineWidget
          url={CalendlyConfig.shareUrl}
          styles={{ height: isExtraSmall ? 1000 : isTablet ? 1100 : 700 }}
        />
      </div>
    </Section>
  );
};

export default CalendlySection;
