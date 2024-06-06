import Layout from "@/common/layout/Layout.tsx";
import CalendlySection from "@/pages/home/CalendlySection.tsx";
import { HeaderVariant } from "@/types/variant.types.ts";

const CalendlyPage = () => {
  return (
    <Layout headerVariant={HeaderVariant.Tertiary} className="pb-0">
      <CalendlySection title="Book a call with one of our experts, and they will reach out to discuss the services we provide and how we can help turn your ideas into reality." />
    </Layout>
  );
};

export default CalendlyPage;
