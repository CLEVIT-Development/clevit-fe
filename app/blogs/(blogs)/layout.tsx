import BlogHeading from "@/common/layout/Heading/BlogHeading";
import Layout from "@/common/layout/Layout";
import { Gradient } from "@/components/gradient/Gradient";
import { HeaderVariant } from "@/types/variant.types";

interface IProps {
  children: React.ReactNode;
}

const BlogsLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Layout
      headerVariant={HeaderVariant.Primary}
      heading={
        <Gradient>
          <BlogHeading />
        </Gradient>
      }
    >
      {children}
    </Layout>
  );
};

export default BlogsLayout;
