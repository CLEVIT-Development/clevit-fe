import PortfolioHeading from "@/common/layout/Heading/PortfolioHeading";
import Layout from "@/common/layout/Layout";
import { Gradient } from "@/components/gradient/Gradient";
import { HeaderVariant } from "@/types/variant.types";

interface Props {
  children: React.ReactNode;
}

const PortfolioLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout
      className="space-y-9 !pt-[40px]"
      headerVariant={HeaderVariant.Primary}
      heading={
        <Gradient>
          <PortfolioHeading />
        </Gradient>
      }
    >
      {children}
    </Layout>
  );
};

export default PortfolioLayout;
