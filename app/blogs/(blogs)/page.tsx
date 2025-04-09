import BlogSection from "../../../components/blog/BlogSection";
import { CalendlySection } from "../../../components/home";
import { generatePageMetadata } from "../../../utils/metadata.utils";

export const metadata = generatePageMetadata("blogs");

const BlogPage = async () => {
  return (
    <>
      <BlogSection />
      <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
    </>
  );
};

export default BlogPage;
