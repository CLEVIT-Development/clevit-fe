import { seoConfig } from "@/app/seo.config";
import FaqHeading from "@/common/layout/Heading/FaqHeading";
import Layout from "@/common/layout/Layout.tsx";
import { Gradient } from "@/shared/gradient/Gradient";
import Seo from "@/shared/seo/Seo";
import { HeaderVariant } from "@/types/variant.types.ts";

import CalendlySection from "../home/CalendlySection";
import ContactSection from "./ContactSection";
import { FaqSection } from "./FaqSection";

const Faq = () => {
  return (
    <>
      <Seo {...seoConfig.faq} />
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
    </>
  );
};

export default Faq;
