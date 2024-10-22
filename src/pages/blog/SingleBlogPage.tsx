import { useLocation, useParams } from "react-router-dom";

import { useBlogByTitle } from "@/common/hooks/blog/blogQueries";
import useOrigin from "@/common/hooks/useOrigin";
import SingleBlogHeading from "@/common/layout/Heading/SingleBlogHeading";
import Layout from "@/common/layout/Layout.tsx";
import { Gradient } from "@/shared/gradient/Gradient";
import PageSEO from "@/shared/lib/meta/PageSeo";
import { HeaderVariant } from "@/types/variant.types.ts";

import CalendlySection from "../home/CalendlySection";
import NotFound from "../not-found/NotFoundPage";
import SingleBlogSection from "./SingleBlogSection";

const SingleBlogPage = () => {
  const { titlePath } = useParams();
  const { data: blogData } = useBlogByTitle(titlePath!);
  const { pathname } = useLocation();
  const origin = useOrigin();

  const canonicalUrl = origin + pathname;

  return (
    <>
      <PageSEO
        description={blogData?.metaDescription}
        title={blogData?.title}
        canonicalUrl={canonicalUrl}
      />
      <Layout
        headerVariant={HeaderVariant.Primary}
        heading={
          <Gradient className="h-[200px] w-full">
            <SingleBlogHeading />
          </Gradient>
        }
        className="pt-[17px] px-4"
      >
        {titlePath ? <SingleBlogSection titlePath={titlePath} /> : <NotFound />}

        <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
      </Layout>
    </>
  );
};

export default SingleBlogPage;
