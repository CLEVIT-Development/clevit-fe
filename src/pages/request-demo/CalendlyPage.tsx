import Layout from "@/common/layout/Layout.tsx";
import CalendlySection from "@/pages/home/CalendlySection.tsx";
import PageSEO from "@/shared/lib/meta/PageSeo";
import { HeaderVariant } from "@/types/variant.types.ts";

const CalendlyPage = () => {
  return (
    <>
      <PageSEO
        title="Book a Product Demo"
        description="You're invited to book a demo call with our team and get an in-depth look at our products. Our team will be happy to address any inquiries you may have about product setup, features, pricing, and other details."
        canonicalUrl="https://www.clevit.io/request-demo"
      />
      <Layout headerVariant={HeaderVariant.Tertiary} className="pb-0 !pt-[130px]">
        <CalendlySection title="Book a call with one of our experts, and they will reach out to discuss the services we provide and how we can help turn your ideas into reality." />
      </Layout>
    </>
  );
};

export default CalendlyPage;
