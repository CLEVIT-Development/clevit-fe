import { Suspense, lazy } from "react";

import { appConfig } from "@/assets/constants/config.constants.ts";
import useResponsive from "@/common/hooks/useResponsive.ts";
import Section from "@/common/templates/Section";

interface Props {
  title: string;
}

const InlineWidget = lazy(() =>
  import("react-calendly").then((module) => ({ default: module.InlineWidget }))
);

const CalendlySection = ({ title }: Props) => {
  const { isExtraSmall, isMobile, isTablet, isCalendlyDesktop } = useResponsive();

  return (
    <Section
      title={title}
      titleClassName="desktop:text-xl-l"
      className="desktop:space-y-0 space-y-6"
      headingLevel="h1"
    >
      <div className="w-full">
        <Suspense>
          <InlineWidget
            url={appConfig.shareUrl}
            styles={{
              height: isExtraSmall ? 1100 : isTablet || isCalendlyDesktop ? 1100 : 599,
              marginBottom: isCalendlyDesktop ? (isExtraSmall ? "-80px" : 0) : 50,
              minWidth: isMobile ? "85vw" : 0,
            }}
          />
        </Suspense>
      </div>
    </Section>
  );
};

export default CalendlySection;
