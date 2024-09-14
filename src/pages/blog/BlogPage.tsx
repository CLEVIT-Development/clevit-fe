import BlogHeading from "@/common/layout/Heading/BlogHeading";
import Layout from "@/common/layout/Layout.tsx";
import { Gradient } from "@/shared/gradient/Gradient";
import PageSEO from "@/shared/lib/meta/PageSeo";
import { HeaderVariant } from "@/types/variant.types.ts";

const BlogPage = () => {
  return (
    <>
      <PageSEO canonicalUrl="https://www.clevit.io/blog" />
      <Layout
        headerVariant={HeaderVariant.Primary}
        heading={
          <Gradient>
            <BlogHeading />
          </Gradient>
        }
      >
        Blog page
      </Layout>
    </>
  );
};

export default BlogPage;
