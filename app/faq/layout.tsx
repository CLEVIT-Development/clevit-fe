import FaqHeading from "../../common/layout/Heading/FaqHeading";
import Layout from "../../common/layout/Layout";
import { Gradient } from "../../components/gradient/Gradient";
import { HeaderVariant } from "../../types/variant.types";

interface Props {
  children: React.ReactNode;
}

const FAQLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout
      headerVariant={HeaderVariant.Primary}
      heading={
        <Gradient>
          <FaqHeading />
        </Gradient>
      }
    >
      {children}
    </Layout>
  );
};

export default FAQLayout;
