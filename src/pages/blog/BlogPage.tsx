import { appConfig } from "@/assets/constants/config.constants.ts";
import Layout from "@/common/layout/Layout.tsx";
import { HeaderVariant, LayoutVariant } from "@/types/variant.types.ts";

const BlogPage = () => {
  return (
    <Layout headerVariant={HeaderVariant.Tertiary} layoutVariant={LayoutVariant.Secondary}>
      <iframe src={appConfig.notionBlogUrl} className="h-[2800px] -mb-[450px]" />
    </Layout>
  );
};

export default BlogPage;
