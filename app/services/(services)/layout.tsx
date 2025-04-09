import ServiceHeading from "../../../common/layout/Heading/ServiceHeading";
import Layout from "../../../common/layout/Layout";
import { Gradient } from "../../../components/gradient/Gradient";

interface Props {
  children: React.ReactNode;
}

const ServicesLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout
      layoutClassName="!px-0"
      heading={
        <Gradient>
          <ServiceHeading />
        </Gradient>
      }
    >
      {children}
    </Layout>
  );
};

export default ServicesLayout;
