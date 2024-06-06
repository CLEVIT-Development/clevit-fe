import { InlineWidget } from "react-calendly";

import { appConfig } from "@/assets/constants/config.constants.ts";
import useResponsive from "@/common/hooks/useResponsive.ts";
import Section from "@/common/templates/Section";

interface Props {
  title: string;
}

const CalendlySection = ({ title }: Props) => {
  const { isExtraSmall, isMobile, isTablet, isCalendlyDesktop } = useResponsive();

  return (
    <Section
      title={title}
      titleClassName="desktop:text-xl-l"
      className="desktop:space-y-0 space-y-6"
    >
      <div className="w-full">
        <InlineWidget
          url={appConfig.shareUrl}
          styles={{
            height: isExtraSmall ? 1000 : isTablet || isCalendlyDesktop ? 1100 : 660,
            minWidth: isMobile ? "85vw" : 0,
            marginBottom: isCalendlyDesktop ? (isExtraSmall ? "-80px" : 0) : 50,
          }}
        />
      </div>
    </Section>
  );
};

export default CalendlySection;
