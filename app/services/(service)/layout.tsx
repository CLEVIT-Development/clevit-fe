"use client";

import { useParams } from "next/navigation";

import Layout from "../../../common/layout/Layout";
import { Gradient } from "../../../components/gradient/Gradient";
import SingleServiceHeading from "../../../components/service/SingleServiceHeading";
import { servicesConstants } from "../../../shared/constants/services.constants";
import { HeaderVariant } from "../../../types/variant.types";

type Params = { id: string };

interface IProps {
  children: React.ReactNode;
}

const ServiceLayout: React.FC<IProps> = ({ children }) => {
  const { id } = useParams<Params>();
  const service = servicesConstants.find((service) => service.id === id)!;

  return (
    <Layout
      headerVariant={HeaderVariant.Primary}
      layoutClassName=""
      className="!pt-[50px]"
      heading={
        <Gradient className="h-[200px] w-full">
          <SingleServiceHeading
            title={service.singleServiceHeaderTitle}
            description={service.singleServiceHeaderDescription}
            image={service.headerImage.src}
            imageAlt={service.imageAlt}
          />
        </Gradient>
      }
    >
      {children}
    </Layout>
  );
};

export default ServiceLayout;
