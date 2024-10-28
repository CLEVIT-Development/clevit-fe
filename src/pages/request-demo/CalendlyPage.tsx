import { seoConfig } from "@/app/seo.config";
import Layout from "@/common/layout/Layout.tsx";
import CalendlySection from "@/pages/home/CalendlySection.tsx";
import Seo from "@/shared/seo/Seo";
import { HeaderVariant } from "@/types/variant.types.ts";

const CalendlyPage = () => {
  return (
    <>
      <Seo {...seoConfig.requestDemo} />
      <Layout headerVariant={HeaderVariant.Tertiary} className="pb-0 !pt-[130px]">
        <CalendlySection title="Let’s find the perfect solution" />
      </Layout>
    </>
  );
};

export default CalendlyPage;
