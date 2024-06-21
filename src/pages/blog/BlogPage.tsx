import { appConfig } from "@/assets/constants/config.constants.ts";
import Layout from "@/common/layout/Layout.tsx";
import PageSEO from "@/shared/lib/meta/PageSeo";
import { HeaderVariant, LayoutVariant } from "@/types/variant.types.ts";

const BlogPage = () => {
  return (
    <>
      <PageSEO canonicalUrl="https://clevit.io/blog" />
      <Layout headerVariant={HeaderVariant.Tertiary} layoutVariant={LayoutVariant.Secondary}>
        <iframe src={appConfig.notionBlogUrl} className="h-[2800px] -mb-[450px]" />
      </Layout>
    </>
  );
};

export default BlogPage;
