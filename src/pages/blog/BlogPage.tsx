import Layout from "@/common/layout/Layout.tsx";
import { HeaderVariant, LayoutVariant } from "@/types/variant.types.ts";

const BlogPage = () => {
  return (
    <Layout headerVariant={HeaderVariant.Tertiary} layoutVariant={LayoutVariant.Secondary}>
      <iframe
        src="https://v2-embednotion.com/26f4d4d6c39b45b7a4ba2dc2f0d01af8"
        className="h-[4600px]"
      />
    </Layout>
  );
};

export default BlogPage;
