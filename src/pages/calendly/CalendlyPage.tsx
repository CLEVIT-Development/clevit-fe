import Layout from "@/common/layout/Layout.tsx";
import CalendlySection from "@/pages/home/CalendlySection.tsx";
import { HeaderVariant } from "@/types/variant.types.ts";

const CalendlyPage = () => {
  return (
    <Layout headerVariant={HeaderVariant.Tertiary} className="pb-0">
      <CalendlySection />
    </Layout>
  );
};

export default CalendlyPage;
