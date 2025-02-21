import Layout from "@/common/layout/Layout";
import { HeaderVariant } from "@/types/variant.types";

interface Props {
  children: React.ReactNode;
}

const CalendlyLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout headerVariant={HeaderVariant.Tertiary} className="pb-0 !pt-[130px]">
      {children}
    </Layout>
  );
};

export default CalendlyLayout;
