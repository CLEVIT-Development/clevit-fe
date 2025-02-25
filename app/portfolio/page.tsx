import { CalendlySection, FeedbackSection } from "@/components/home";
import { WorkSection } from "@/components/portfolio";
import { generatePageMetadata } from "@/utils/metadata.utils";

export const metadata = generatePageMetadata("portfolio");

const PortfolioPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-200 desktop:mb-4">Our Portfolio</h1>
      <WorkSection />
      <FeedbackSection />
      <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
    </>
  );
};

export default PortfolioPage;
