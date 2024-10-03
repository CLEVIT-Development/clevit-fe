import { useState } from "react";
import { useParams } from "react-router-dom";

import AppDevelopmentOverview from "@/assets/images/services/AppDevelopmentHeading.png";
import Layout from "@/common/layout/Layout.tsx";
import CalendlySection from "@/pages/home/CalendlySection";
import NotFound from "@/pages/not-found/NotFoundPage";
import { Gradient } from "@/shared/gradient/Gradient";
import PageSEO from "@/shared/lib/meta/PageSeo";
import { HeaderVariant } from "@/types/variant.types.ts";

import SingleServiceHeading from "./SingleServiceHeading";
import SingleServiceSection from "./SingleServiceSection";

export interface SingleServiceHeaderItems {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const SingleServicePage = () => {
  const { id } = useParams();
  // ... existing code ...
  const [headerItems, setHeaderItems] = useState<SingleServiceHeaderItems>({});

  return (
    <>
      <PageSEO canonicalUrl="https://www.clevit.io/service" />
      <Layout
        headerVariant={HeaderVariant.Primary}
        heading={
          <Gradient className="h-[200px] w-full">
            {/* Gradient doesn't appear without SingleBlogHeading, even though it's not strictly necessary */}
            <SingleServiceHeading
              title={headerItems.title}
              description={headerItems.description}
              image={headerItems.image}
              imageAlt={headerItems.imageAlt}
            />
          </Gradient>
        }
      >
        {id ? (
          <SingleServiceSection setHeaderItems={setHeaderItems} serviceId={id} />
        ) : (
          <NotFound />
        )}

        <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
      </Layout>
    </>
  );
};

export default SingleServicePage;
