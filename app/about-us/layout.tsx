import AboutHeading from "@/common/layout/Heading/AboutHeading";
import Layout from "@/common/layout/Layout";
import { Gradient } from "@/components/gradient/Gradient";

interface Props {
  children: React.ReactNode;
}

const AboutUsLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout
      className="!pt-[40px] px-5 desktop:px-0 lg:px-0"
      heading={
        <Gradient>
          <AboutHeading />
        </Gradient>
      }
    >
      {children}
    </Layout>
  );
};

export default AboutUsLayout;
