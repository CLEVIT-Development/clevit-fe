import { ContactSection, FaqSection } from "@/components/faq";
import { CalendlySection } from "@/components/home";
import { generatePageMetadata } from "@/utils/metadata.utils";

export const metadata = generatePageMetadata("faq");

const FAQPage = () => {
  return (
    <>
      <FaqSection />
      <ContactSection />
      <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
    </>
  );
};

export default FAQPage;
