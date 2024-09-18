import FaqHeading from "@/common/layout/Heading/FaqHeading";
import Layout from "@/common/layout/Layout.tsx";
import { Gradient } from "@/shared/gradient/Gradient";
import { HeaderVariant } from "@/types/variant.types.ts";

import CalendlySection from "../home/CalendlySection";
import ContactSection from "./ContactSection";
import { FaqSection } from "./FaqSection";

const Faq = () => {
  return (
    <Layout
      headerVariant={HeaderVariant.Primary}
      heading={
        <Gradient>
          <FaqHeading />
        </Gradient>
      }
    >
      <FaqSection />
      <ContactSection />
      <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
    </Layout>
  );
};

export default Faq;
