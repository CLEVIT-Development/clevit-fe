import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { servicesConstants } from "@/assets/constants/services.constants.ts";
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

  const replaceString = (str: string) => {
    return str.replace("/", "");
  };

  const service = servicesConstants.find((service) => replaceString(service.id) === id);

  const [headerItems, setHeaderItems] = useState<SingleServiceHeaderItems>({
    title: "",
    description: "",
    image: "",
    imageAlt: "",
  });

  useEffect(() => {
    if (service) {
      setHeaderItems({
        title: service.title,
        description: service.description,
        image: service.image,
        imageAlt: service.imageAlt,
      });
    }
  }, [service]);

  return (
    <>
      <PageSEO
        title={id && MetaServices[id] ? MetaServices[id].title : "Clevit"}
        description={id && MetaServices[id] ? MetaServices[id].description : "Clevit"}
        canonicalUrl={id && MetaServices[id] ? MetaServices[id].url : "https://www.clevit.io/"}
      />

      {service ? (
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
