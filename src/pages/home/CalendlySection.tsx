import { InlineWidget } from "react-calendly";

import Section from "@/common/templates/Section";

const CalendlySection = () => {
  return (
    <Section title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you.">
      <div className="w-full">
        <InlineWidget url="https://calendly.com/hovhannes-baghdasaryan-03/contact-us?hide_gdpr_banner=1&embed_domain=clevit.io&embed_type=Inline" />
      </div>
    </Section>
  );
};

export default CalendlySection;
