import SingleBlogHeading from "@/common/layout/Heading/SingleBlogHeading";
import Layout from "@/common/layout/Layout";
import { Gradient } from "@/components/gradient/Gradient";
import { HeaderVariant } from "@/types/variant.types";

interface IProps {
  children: React.ReactNode;
}

const SingleBlogPage: React.FC<IProps> = ({ children }) => {
  return (
    <Layout
      headerVariant={HeaderVariant.Primary}
      heading={
        <Gradient className="h-[200px] w-full">
          <SingleBlogHeading />
        </Gradient>
      }
      className="pt-[17px] px-4"
    >
      {children}
    </Layout>
  );
};

export default SingleBlogPage;
