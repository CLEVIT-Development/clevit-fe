import { useParams } from "react-router-dom";

import Layout from "@/common/layout/Layout.tsx";
import CalendlySection from "@/pages/home/CalendlySection";
import NotFound from "@/pages/not-found/NotFoundPage";
import { Gradient } from "@/shared/gradient/Gradient";
import PageSEO from "@/shared/lib/meta/PageSeo";
import { HeaderVariant } from "@/types/variant.types.ts";

import SingleServiceHeading from "./SingleServiceHeading";
import SingleServiceSection from "./SingleServiceSection";

const SingleServicePage = () => {
  const { id } = useParams();

  return (
    <>
      <PageSEO canonicalUrl="https://www.clevit.io/service" />
      <Layout
        headerVariant={HeaderVariant.Primary}
        heading={
          <Gradient className="h-[200px] w-full">
            {/* Gradient doesn't appear without SingleBlogHeading, even though it's not strictly necessary */}
            <SingleServiceHeading />
          </Gradient>
        }
      >
        {id ? <SingleServiceSection serviceId={id} /> : <NotFound />}

        <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
      </Layout>
    </>
  );
};

export default SingleServicePage;
