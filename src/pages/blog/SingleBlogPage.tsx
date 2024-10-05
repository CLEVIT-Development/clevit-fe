import { useParams } from "react-router-dom";

import SingleBlogHeading from "@/common/layout/Heading/SingleBlogHeading";
import Layout from "@/common/layout/Layout.tsx";
import { Gradient } from "@/shared/gradient/Gradient";
import PageSEO from "@/shared/lib/meta/PageSeo";
import { HeaderVariant } from "@/types/variant.types.ts";

import CalendlySection from "../home/CalendlySection";
import NotFound from "../not-found/NotFoundPage";
import SingleBlogSection from "./SingleBlogSection";

const SingleBlogPage = () => {
  const { id } = useParams();

  return (
    <>
      <PageSEO canonicalUrl="https://www.clevit.io/blog" />
      <Layout
        headerVariant={HeaderVariant.Primary}
        heading={
          <Gradient className="h-[200px] w-full">
            <SingleBlogHeading />
          </Gradient>
        }
      >
        {id ? <SingleBlogSection blogId={id} /> : <NotFound />}

        <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
      </Layout>
    </>
  );
};

export default SingleBlogPage;
