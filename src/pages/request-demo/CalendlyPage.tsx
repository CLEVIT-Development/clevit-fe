import Layout from "@/common/layout/Layout.tsx";
import CalendlySection from "@/pages/home/CalendlySection.tsx";
import PageSEO from "@/shared/lib/meta/PageSeo";
import { HeaderVariant } from "@/types/variant.types.ts";

const CalendlyPage = () => {
  return (
    <>
      <PageSEO
        title="Request a demo | Clevit"
        description="Request a demo with Clevit and explore how our tailored solutions can help your business grow with innovative web, mobile, and software development services."
        canonicalUrl="https://www.clevit.io/request-demo"
      />
      <Layout headerVariant={HeaderVariant.Tertiary} className="pb-0 !pt-[130px]">
        <CalendlySection title="Let’s find the perfect solution" />
      </Layout>
    </>
  );
};

export default CalendlyPage;
