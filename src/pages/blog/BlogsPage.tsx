import { seoConfig } from "@/app/seo.config";
import BlogHeading from "@/common/layout/Heading/BlogHeading";
import Layout from "@/common/layout/Layout.tsx";
import { Gradient } from "@/shared/gradient/Gradient";
import Seo from "@/shared/seo/Seo";
import { HeaderVariant } from "@/types/variant.types.ts";

import CalendlySection from "../home/CalendlySection";
import BlogSection from "./BlogSection";

const BlogPage = () => {
  return (
    <>
      <Seo {...seoConfig.blogs} />
      <Layout
        headerVariant={HeaderVariant.Primary}
        heading={
          <Gradient>
            <BlogHeading />
          </Gradient>
        }
      >
        <BlogSection />
        <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
      </Layout>
    </>
  );
};

export default BlogPage;
