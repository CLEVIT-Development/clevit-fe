import { useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "@/common/layout/Layout.tsx";
import NotFound from "@/pages/not-found/NotFoundPage";
import { Gradient } from "@/shared/gradient/Gradient";
import PageSEO from "@/shared/lib/meta/PageSeo";
import { HeaderVariant } from "@/types/variant.types.ts";

import { MetaServices } from "../metaServices";
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
  const [headerItems, setHeaderItems] = useState<SingleServiceHeaderItems>({
    title: "",
    description: "",
    image: "",
    imageAlt: "",
  });

  return (
    <>
      <PageSEO
        title={id ? MetaServices[id]?.title : "Clevit"}
        description={id ? MetaServices[id]?.description : "Clevit"}
        canonicalUrl={id ? MetaServices[id]?.url : "https://www.clevit.io/"}
      />

      {id && MetaServices[id] ? (
        <Layout
          headerVariant={HeaderVariant.Primary}
          layoutClassName=""
          className="!pt-[50px]"
          heading={
            <Gradient className="h-[200px] w-full">
              <SingleServiceHeading
                title={headerItems.title}
                description={headerItems.description}
                image={headerItems.image}
                imageAlt={headerItems.imageAlt}
              />
            </Gradient>
          }
        >
          {id && <SingleServiceSection setHeaderItems={setHeaderItems} serviceId={id} />}
        </Layout>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default SingleServicePage;
